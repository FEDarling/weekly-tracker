const inquirer = require('inquirer');
const { exec } = require("child_process");

class AutoCommit {
  constructor() {
    this.username = ""
    this.number = ""
    this.journal = ""
    this.type = ""
    this.descr = ""
    this.commitStr = ""
    this.resultBool = false
  }
  // 验证
  validate(val, name) {
    if (!val) {
      return `${name}为必项！`
    }
    return true
  }
  // 用户名
  async getUsername() {
    const target = await inquirer.prompt([
      {
        type: 'input', // 问题类型
        name: 'username', // 数据属性名
        message: '请输入你的名字', // 提示信息
        default: '', // 默认值
        validate: val => this.validate(val, "名字")
      }
    ])
    return target.username
  }
  // 所属期刊
  async getJournalName() {
    const target = await inquirer.prompt([
      {
        type: 'list',
        name: 'journal',
        message: '请选择期刊名',
        choices: [
          { name: 'JavaScript Weekly', value: "JavaScript Weekly" },
          { name: 'CSS Weekly', value: "CSS Weekly" },
          { name: 'React Status', value: "React Status" },
          { name: 'Frontend Focus', value: "Frontend Focus" },
          { name: 'Mobile Dev Weekly', value: "Mobile Dev Weekly" },
          { name: 'Node Weekly', value: "Node Weekly" }
        ]
      }
    ])
    return target.journal
  }
  // 刊号
  async getJournalNum() {
    const target = await inquirer.prompt([
      {
        type: 'input',
        name: 'number',
        message: '请输入刊号',
        default: null,
        validate: val => this.validate(val, "刊号")
      }
    ])
    return target.number
  }
  // 类型
  async getType() {
    const target = await inquirer.prompt([
      {
        type: 'list',
        name: 'type',
        message: '请选择操作类型，Feature：翻译新文章，BugFix：修复文章问题，Refactor：重新翻译文章',
        choices: [
          { name: "Feature", value: "Feature" },
          { name: "BugFix", value: "BugFix" },
          { name: "Refactor", value: "Refactor" }
        ]
      }
    ])
    return target.type
  }
  // 具体说明
  async getDescr() {
    const target = await inquirer.prompt([
      {
        type: 'input',
        name: 'descr',
        message: '请描述你要做什么',
        default: '',
        validate: val => this.validate(val, "描述")
      }
    ])
    return target.descr
  }
  // 整合提交信息
  async getSplice() {
    this.commitStr = `${this.type} by ${this.username}: 【${this.journal} #${this.number}】${this.descr}`;
    console.log("————————————————\n 这是你将要提交的信息")
    console.log(` \x1B[32m${this.commitStr}\x1B[0m`)
    console.log("————————————————")

    const target = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'result',
        message: '信息是否正确？',
      }
    ])
    return target.result
  }
  // 调用sh
  execSh(command, cb) {
    return new Promise(resolve => {
      exec(command, (err, stdout, stderr) => {
        if (err != null) {
          resolve(cb(new Error(err), null))
        } else if (typeof (stderr) != "string") {
          resolve(cb(new Error(stderr), null))
        } else {
          console.log(stdout)
          // process.stdout.write(stdout);
          resolve(cb(null, stdout));
        }
      });
    })
  }
  // sh脚本回调
  execCb(err){
    if(err){
      console.log(err)
    }else{
      // 执行脚本成功
    }
  }
  // 推送
  async push() {
    this.username = await this.getUsername()
    this.journal = await this.getJournalName()
    this.number = await this.getJournalNum()
    this.type = await this.getType()
    this.descr = await this.getDescr()
    this.resultBool = await this.getSplice()

    if (!this.resultBool) {
      // 退出
      return
    }
    await this.execSh(`sh push.sh "${this.commitStr}"`, this.execCb)
  }
  // 拉取
  async pull() {
    await this.execSh(`sh pull.sh`, this.execCb)
  }
  // 入口
  async run() {
    const target = await inquirer.prompt([
      {
        type: 'list',
        name: 'type',
        message: '你想 拉取内容 还是 推送内容',
        choices: [
          { name: "拉取内容（pull）", value: "pull" },
          { name: "推送内容（push）", value: "push" }
        ]
      }
    ])
    if(target.type === "pull"){
      await this.pull()
    }else{
      await this.push()
    }
  }
}


let ac = new AutoCommit()
ac.run()