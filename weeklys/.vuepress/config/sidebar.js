const fs = require('fs');
const yamlFront = require('yaml-front-matter');

const base = './weeklys';

const css = {
    name: 'CSS Weekly',
    path: '/css_weekly/',
};
const js = {
    name: 'JavaScript Weekly',
    path: '/javascript_weekly/',
};
const front = {
    name: 'Frontend Focus',
    path: '/frontend_focus/',
};
const node = {
    name: 'Node Weekly',
    path: '/node_weekly/',
};
const react = {
    name: 'React Status',
    path: '/react_status/',
};
const mobile = {
    name: 'Mobile Dev Weekly',
    path: '/mobile_dev_weekly/',
};
const sidebar = {};
sidebar.zh = {
    [`${css.path}`]: getGroupArr('', css.name, css.path),
    [`${js.path}`]: getGroupArr('', js.name, js.path),
    [`${front.path}`]: getGroupArr('', front.name, front.path),
    [`${node.path}`]: getGroupArr('', node.name, node.path),
    [`${react.path}`]: getGroupArr('', react.name, react.path),
    [`${mobile.path}`]: getGroupArr('', mobile.name, mobile.path),
};
sidebar.en = {
    [`/en${css.path}`]: getGroupArr('/en', css.name, css.path),
    [`/en${js.path}`]: getGroupArr('/en', js.name, js.path),
    [`/en${front.path}`]: getGroupArr('/en', front.name, front.path),
    [`/en${node.path}`]: getGroupArr('/en', node.name, node.path),
    [`/en${react.path}`]: getGroupArr('/en', react.name, react.path),
    [`/en${mobile.path}`]: getGroupArr('/en', mobile.name, mobile.path),
};
function getGroupArr(locale, name, path) {
    let groupArr = [];
    const readDirArr = fs
        .readdirSync(`${base}${locale}${path}`)
        .map(parseFloat)
        .sort(function (a, b) {
            return b - a;
        });
    for (let weeklyNum of readDirArr) {
        let fileContent = fs.readFileSync(
            `${base}${locale}${path}${weeklyNum}/README.md`
        );
        let fileFrontObj = yamlFront.loadFront(fileContent); //获取markdown文件的frontmatter
        if (fileFrontObj.publish) {
            //根据publish来判断是否添加到sidebar
            let obj = getGroupObj(locale, name, path, weeklyNum);
            groupArr.push(obj);
        }
    }
    return groupArr;
}
function getGroupObj(locale, name, path, weeklyNum) {
    let childrenFiles = fs.readdirSync(`${base}${locale}${path}${weeklyNum}/`);
    let groupObj = {
        title: `${name} #${weeklyNum}`, // 必要的
        path: `${locale}${path}${weeklyNum}/`, // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false,
        children: getChildrenFiles(locale, path, weeklyNum),
    };
    return groupObj;
}
function getChildrenFiles(locale, path, weeklyNum) {
    let children = [];
    let childrenFiles = fs.readdirSync(`${base}${locale}${path}${weeklyNum}/`);
    for (let file of childrenFiles) {
        if (file != 'img') {
            // 排除 img 文件夹
            let fileContent = fs.readFileSync(
                `${base}${locale}${path}${weeklyNum}/${file}`
            );
            let fileFrontObj = yamlFront.loadFront(fileContent); // 获取markdown文件的frontmatter
            if (file !== 'README.md' && fileFrontObj.publish) {
                // 根据publish来判断是否添加到sidebar
                children.push(`${locale}${path}${weeklyNum}/${file}`);
            }
        }
    }
    return children;
}

module.exports = sidebar;