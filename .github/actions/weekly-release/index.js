const { Toolkit } = require("actions-toolkit");
const fs = require("fs");
const yamlFront = require("yaml-front-matter");
const { Octokit } = require("@octokit/rest");

const Base = "weeklys/";
const Weeklys = ['react_status']

// 整理本地待公开周刊
function getAllUnpublishedAritcles(base,weeklys) {
  const UnpublishedAritcles = [];
  weeklys.forEach(weekly => {
  const weeklyNums = fs.readdirSync(base + weekly);
    weeklyNums.forEach((weeklyNum) => {
    // 目前只读取周刊内容
    let weeklyPath = base + weekly + '/' + weeklyNum + "/README.md"
    const content = fs.readFileSync(weeklyPath, "utf8");
    const weeklyNumFront = yamlFront.loadFront(content);
    if (weeklyNumFront.publish === false) {
      UnpublishedAritcles.push({
        title: weeklyNumFront.title,
        path: weeklyPath,
      });
    }
  });
  });
  console.log("隐藏的文章：");
  console.log(UnpublishedAritcles);
  return UnpublishedAritcles;
}

// 检查未发布的文章
function getAllUnreleasedAritcles(UnpublishedAritcles) { 
  const UnreleasedAritcles = [];
  const octokit = new Octokit();
  octokit
      .paginate(
          'GET /repos/FEDarling/weekly-tracker/issues',
          { owner: 'FEDarling', repo: 'weekly-tracker' },
          (response) => response.data.map((issue) => issue.title)
      )
      .then((issueTitles, UnreleasedAritcles) => {
          UnpublishedAritcles.forEach((article) => {
              if (!issueTitles.includes(article.title)) {
                  UnreleasedAritcles.push(article);
              }
          });
      });
  console.log("无issue的文章：");
  console.log(UnreleasedAritcles);
   return UnreleasedAritcles;
}

function createReleaseIssue() { 
// 创建 issue
const tools = new Toolkit({
    event: 'push',
});
  const UnpublishedAritcles = getAllUnpublishedAritcles(Base, Weeklys);
  const UnreleasedAritcles = getAllUnreleasedAritcles(UnpublishedAritcles);
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

createReleaseIssue();

