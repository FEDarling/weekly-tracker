const fs = require('fs');
const yamlFront = require('yaml-front-matter');

const base=`./weeklys`;
const css = {
	name: "CSS Weekly",
	path: "/css_weekly/",
}
const js = {
	name: "JavaScript Weekly",
	path: "/javascript_weekly/",
}
const front = {
	name: "Frontend Focus",
	path: "/frontend_focus/",
}
const node = {
	name: "Node Weekly",
	path: "/node_weekly/",
}
const react = {
	name: "React Status",
	path: "/react_status/",
}
const mobile = {
	name: "Mobile Dev Weekly",
	path: "/mobile_dev_weekly/",
}

const sidebar={
	[`${css.path}`]:getGroupArr(css.name,css.path),
	[`${js.path}`]:getGroupArr(js.name,js.path),
	[`${front.path}`]:getGroupArr(front.name,front.path),
	[`${node.path}`]:getGroupArr(node.name,node.path),
	[`${react.path}`]:getGroupArr(react.name,react.path),
	[`${mobile.path}`]:getGroupArr(mobile.name,mobile.path),
 }
function getGroupArr(name,path){
	let groupArr = [];
	const readDirArr = fs.readdirSync(`${base}${path}`).map(parseFloat).sort(function (a, b) { return b - a });
	for(let weeklyNum of readDirArr){
		let fileContent = fs.readFileSync(`${base}${path}${weeklyNum}/README.md`);
		let fileFrontObj = yamlFront.loadFront(fileContent);//获取markdown文件的frontmatter
		if(fileFrontObj.publish){//根据publish来判断是否添加到sidebar
		let obj = getGroupObj(name,path,weeklyNum);
		groupArr.push(obj);
		}
	}
	return groupArr;
}
function getGroupObj(name,path,weeklyNum){
	let childrenFiles=fs.readdirSync(`${base}${path}${weeklyNum}/`);
	let groupObj = {
		title: `${name} #${weeklyNum}`,   // 必要的
        path: `${path}${weeklyNum}/`,      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
		collapsable: false,
        children: getChildrenFiles(path,weeklyNum),
	};
	return groupObj;

}
function getChildrenFiles(path,weeklyNum){
	let children = [];
	let childrenFiles=fs.readdirSync(`${base}${path}${weeklyNum}/`);
	for(let file of childrenFiles){
		let fileContent = fs.readFileSync(`${base}${path}${weeklyNum}/${file}`);
		let fileFrontObj = yamlFront.loadFront(fileContent);//获取markdown文件的frontmatter
		if(file!=='README.md'&&fileFrontObj.publish){//根据publish来判断是否添加到sidebar
		children.push(`${path}${weeklyNum}/${file}`);
	}
	}
	return children;
}

module.exports = sidebar;