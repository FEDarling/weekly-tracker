const { Toolkit } = require("actions-toolkit");
const fs = require("fs");
const yamlFront = require("yaml-front-matter");
const { Octokit } = require("@octokit/rest");
const { resolve } = require('path');
const Weeklys = require('../../../script/utils.js').weeklys;
const Base = require('../../../script/utils.js').base;

// 整理本地待公开周刊
function getAllUnpublishedAritcles(base, weeklys) {
    const UnpublishedAritcles = [];
    weeklys.forEach((weekly) => {
        const weeklyNums = fs.readdirSync(base + '/' + weekly[1]);
        weeklyNums.forEach((weeklyNum) => {
            // 目前只读取周刊内容
            let weeklyPath =
                base + '/' + weekly[1] + '/' + weeklyNum + '/README.md';
            const content = fs.readFileSync(weeklyPath, 'utf8');
            const weeklyNumFront = yamlFront.loadFront(content);
            if (weeklyNumFront.publish === false) {
                UnpublishedAritcles.push({
                    name: weekly[0],
                    title: weeklyNumFront.title,
                    path: weeklyPath,
                });
            }
        });
    });
    console.log('隐藏的文章：');
    console.log(UnpublishedAritcles);
    return UnpublishedAritcles;
}
// 读取 issue 模板文件
function getIssueTemplate() {
    const content = fs.readFileSync(
        './.github/ISSUE_TEMPLATE/weekly-release.md',
        'utf8'
    );
    const lines = content.split('\n');
    return lines.splice(15).join('\n');
}
// 创建 issue
function createReleaseIssue(UnreleasedAritcles) {
    // 创建 issue
    const tools = new Toolkit({
        event: 'push',
    });

    UnreleasedAritcles.forEach((article) => {
        let bodyTemplate = `
## 待认领列表
### 周刊
- [ ] [${article.title}](https://github.com/FEDarling/weekly-tracker/blob/main/${article.path})
`;
        tools.github.issues.create({
            owner: 'FEDarling',
            repo: 'weekly-tracker',
            title: article.title,
            body: bodyTemplate + getIssueTemplate(),
            labels: ['待认领', `${article.name}`],
        });
    });
}

// 检查未创建 issue 的文章并创建对应的issue
function checkUnreleasedAritclesAndCreateIssue() {
    const UnreleasedAritcles = [];
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN,
        userAgent: 'Chrome v1.2.3',
    });
    let articles = octokit
        .paginate(
            'GET /repos/FEDarling/weekly-tracker/issues',
            { owner: 'FEDarling', repo: 'weekly-tracker' },
            (response) => response.data.map((issue) => issue.title)
        )
        .then((issueTitles) => {
            // 获取本地尚未发布的周刊
            const UnpublishedAritcles = getAllUnpublishedAritcles(
                Base,
                Weeklys
            );
            let result = [];
            console.log('已有的issue：');
            console.log(issueTitles);
            UnpublishedAritcles.forEach((article) => {
                if (!issueTitles.includes(article.title)) {
                    result.push(article);
                    console.log(`${article.title} 已添加到待发布列表`);
                }
            });
            console.log('无issue的文章：');
            console.log(result);
            // 创建 issue
            createReleaseIssue(result);
        })
        .catch((err) => {
            console.log(err);
        });
}

checkUnreleasedAritclesAndCreateIssue();