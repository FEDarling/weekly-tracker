const TurndownService = require('turndown')
const https = require("https");
const cheerio = require("cheerio");
const fs = require('fs');
const weeklys = require('./utils.js').weeklys;
const base = require('./utils.js').base;

let req;

const getNewNum = (weeklyName, weeklyDir) => {
	console.log(` \x1B[33m🚗开始获取本地 ${weeklyName} 数据...\x1B[0m`);
	const readFiles = fs.readdirSync(`${base}/${weeklyDir}/`).map(parseFloat).sort(function (a, b) { return b - a });
	let newNum;
    if (weeklyDir == 'mobile_dev_weekly') {
        newNum = readFiles[readFiles.length - 1] - 1;
    } else {
        newNum = readFiles[0] + 1;
    }
    return newNum;
}

const start = (weeklyName, weeklyDir, weeklyUrl, weeklyNum, className) => {
	const options = new URL(weeklyUrl);

	req = https.request(options, resp => {
		resp.setEncoding('utf8');
		let body = "";

		resp.on('data', chunk => body += chunk);

		resp.on('end', () => {
            // console.log(body)
            const $ = cheerio.load(body);
            const html = $(className).html();
            // console.log(html);
            if (html != null) {
                console.log(`创建 ${weeklyName} 新的 ${weeklyNum} 目录`);
                fs.mkdir(
                    `${base}/${weeklyDir}/${weeklyNum}`,
                    { recursive: true },
                    (err) => {
                        if (err) throw err;
                    }
                );
                const head = `---
title: '${weeklyName} #${weeklyNum}' # 不可修改
date: '${getNowFormatDate()}' # 不可修改
categories: ['${weeklyName}'] # 不可修改
publish: false # 翻译完成后修改
---

<!--以上是预览信息，图片一张或限制百字左右，前者优先，全文请使用二级及以下标题-->
<!-- more -->

`;
                const END = `

---
> * 译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> * [查看原文](${weeklyUrl})对比阅读
> * 发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/${weeklyDir}/${weeklyNum})
> * 译者：
> * 校对者：
`;
                const turndownService = new TurndownService();
                const markdown = turndownService.turndown(html);
                fs.writeFileSync(
                    `${base}/${weeklyDir}/${weeklyNum}/README.md`,
                    head + markdown + END,
                    'utf8'
                );
                console.log(
                    ` \x1B[32m🍻${weeklyName} 新增一篇周刊，刊号为${weeklyNum}\x1B[0m`
                );
            } else {
                console.log(` \x1B[32m🤪${weeklyName} 没有新内容\x1B[0m`);
            }
        });
	});

	// 超时处理
	req.setTimeout(10000, () => {
		req.abort();
	});

	// 出错处理
	req.on('error', err => {
		if (err.code == "ECONNRESET") {
			console.log('socket端口连接超时。');
		} else {
			console.log('请求发生错误，err.code:' + err.code);
		}
	});
	req.end();
}

const getNowFormatDate = () => {
	const date = new Date();
	const seperator1 = "-";
	const year = date.getFullYear();
	let month = date.getMonth() + 1;
	let strDate = date.getDate();

	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	const currentdate = year + seperator1 + month + seperator1 + strDate
	return currentdate;
}
weeklys.forEach(item => {
	const weeklyName = item[0];
	const weeklyDir = item[1];
	const className = item[3];
	const weeklyNum = getNewNum(weeklyName, weeklyDir);
	let weeklyUrl;

	if (weeklyDir != 'css_weekly') {
		weeklyUrl = item[2] + weeklyNum;
	} else {
		weeklyUrl = item[2] + '/issue-' + weeklyNum + '/';
	}

	start(weeklyName, weeklyDir, weeklyUrl, weeklyNum, className);
})
