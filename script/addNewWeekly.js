var TurndownService = require('turndown')
var https=require("https");
var cheerio = require("cheerio");
var fs=require('fs');
var options;
var req;
const base= './weeklys/weekly_collect'
var weeklys=[
    ['JavaScript Weekly',"javascript_weekly","https://javascriptweekly.com/issues/",'.issue-html'],
    ['Node Weekly',"node_weekly","https://nodeweekly.com/issues/",'.issue-html'],
    ['React Status',"react_status","https://react.statuscode.com/issues/",'.issue-html'],
    ['Mobile Dev Weekly',"mobile_dev_weekly","https://mobiledevweekly.com/issues/",'.issue-html'],
    ['Frontend Focus',"frontend_focus","https://frontendfoc.us/issues/",'.issue-html'],
    ['CSS Weekly',"css_weekly","https://css-weekly.com",'.box-newsletter']
]
weeklys.forEach(function(item){
    var weeklyName=item[0];
    var weeklyDir=item[1];
    var weeklyNum=getNewNum(weeklyName,weeklyDir);
    if(weeklyDir!='css_weekly'){
        var weeklyUrl=item[2]+weeklyNum;
    }else{
        var weeklyUrl=item[2]+'/issue-'+weeklyNum+'/';
    }
    var className=item[3];
    
    start(weeklyName,weeklyDir,weeklyUrl,weeklyNum,className);
})

function getNewNum(weeklyName,weeklyDir){
    console.log(`开始获取本地 ${weeklyName} 数据...`);
    var readFiles = fs.readdirSync(`${base}/${weeklyDir}/`).map(parseFloat).sort(function(a,b){return b-a});
    return readFiles[0]+1;
}

function start(weeklyName,weeklyDir,weeklyUrl,weeklyNum,className){  
    var options = new URL(weeklyUrl);

    req=https.request(options,function(resp){
        resp.setEncoding('utf8');
        var body="";

        resp.on('data',function(chunk){
            body+=chunk;              
        });

        resp.on('end',function(){
            var $ = cheerio.load(body);
            let html = $(className).html();
            if(html!=null){
                var turndownService = new TurndownService();
                var markdown = turndownService.turndown(html);
                var head=
`---
title: '${weeklyName} #${weeklyNum}'
date: '${getNowFormatDate()}'
categories:
 - ${weeklyName}
---

`
                fs.writeFileSync(`${base}/${weeklyDir}/${weeklyNum}.md`, head+markdown, 'utf8');
                console.log(`${weeklyName} 新增一篇周刊，刊号为${weeklyNum}`);
            }else{
                console.log(`${weeklyName} 没有新内容`);
            }
        });
    });

    // 超时处理
    req.setTimeout(10000,function(){
        req.abort();
    });

    // 出错处理
    req.on('error',function(err){
        if(err.code=="ECONNRESET"){
            console.log('socket端口连接超时。');
        }else{
            console.log('请求发生错误，err.code:'+err.code);
        }
    });
    req.end();
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate
    return currentdate;
}