const TurndownService = require('turndown')
const https = require("https");
const cheerio = require("cheerio");
const fs = require('fs');
// const options;
let req;
const base = './weeklys'
const weeklys = [
	['JavaScript Weekly', "javascript_weekly", "https://javascriptweekly.com/issues/", '.issue-html'],
	['Node Weekly', "node_weekly", "https://nodeweekly.com/issues/", '.issue-html'],
	['React Status', "react_status", "https://react.statuscode.com/issues/", '.issue-html'],
	['Mobile Dev Weekly', "mobile_dev_weekly", "https://mobiledevweekly.com/issues/", '.issue-html'],
	['Frontend Focus', "frontend_focus", "https://frontendfoc.us/issues/", '.issue-html'],
	['CSS Weekly', "css_weekly", "https://css-weekly.com", '.box-newsletter']
]

const getNewNum = (weeklyName, weeklyDir) => {
	console.log(` \x1B[33m🚗开始获取本地 ${weeklyName} 数据...\x1B[0m`);
	const readFiles = fs.readdirSync(`${base}/${weeklyDir}/`).map(parseFloat).sort(function (a, b) { return b - a });
	return readFiles[0] + 1;
}

const start = (weeklyName, weeklyDir, weeklyUrl, weeklyNum, className) => {
	const options = new URL(weeklyUrl);

	req = https.request(options, resp => {
		resp.setEncoding('utf8');
		let body = "";

		resp.on('data', chunk => body += chunk);

		resp.on('end', () => {
			const $ = cheerio.load(body);
			const html = $(className).html();

			if (html != null) {
				console.log(`创建 ${weeklyName} 新的 ${weeklyNum} 目录`);
                fs.mkdir(`${base}/${weeklyNum}`,{ recursive: true }, (err) => {
                    if (err) throw err;
                  })
				const turndownService = new TurndownService();
				const markdown = turndownService.turndown(html);
				const head =
					`---
title: '${weeklyName} #${weeklyNum}'
date: '${getNowFormatDate()}'
categories:
 - ${weeklyName}
---

`
				fs.writeFileSync(`${base}/${weeklyDir}/${weeklyNum}/README.md`, head + markdown, 'utf8');
				console.log(` \x1B[32m🍻${weeklyName} 新增一篇周刊，刊号为${weeklyNum}\x1B[0m`);
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
