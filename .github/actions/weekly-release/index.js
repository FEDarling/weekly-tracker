const { Toolkit } = require("actions-toolkit");
const fs = require("fs");
const yamlFront = require("yaml-front-matter");
const { Octokit } = require("@octokit/rest");
const { resolve } = require('path');

const Base = 'weeklys/';
const Weeklys = ['react_status'];

// 整理本地待公开周刊
function getAllUnpublishedAritcles(base, weeklys) {
    const UnpublishedAritcles = [];
    weeklys.forEach((weekly) => {
        const weeklyNums = fs.readdirSync(base + weekly);
        weeklyNums.forEach((weeklyNum) => {
            // 目前只读取周刊内容
            let weeklyPath = base + weekly + '/' + weeklyNum + '/README.md';
            const content = fs.readFileSync(weeklyPath, 'utf8');
            const weeklyNumFront = yamlFront.loadFront(content);
            if (weeklyNumFront.publish === false) {
                UnpublishedAritcles.push({
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
// 创建 issue
function createReleaseIssue(UnreleasedAritcles) {
    // 创建 issue
    const tools = new Toolkit({
        event: 'push',
    });

    UnreleasedAritcles.forEach((article) => {
        let bodyTemplate = `
    ## 认领列表
    ### 周刊
    - [ ] [${article.title}](https://github.com/FEDarling/weekly-tracker/blob/main/${article.path})
    `;
        tools.github.issues.create({
            owner: 'FEDarling',
            repo: 'weekly-tracker',
            title: article.title,
            body: bodyTemplate,
            labels: ['待认领'],
            assignees: 'daodaolee',
        });
    });
}

// 检查未发布的文章并创建对应的issue
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
            console.log('无issue的文章1：');
            console.log(result);
            // 创建 issue
            createReleaseIssue(result);
        })
        .catch((err) => {
            console.log(err);
        });
}

checkUnreleasedAritclesAndCreateIssue();