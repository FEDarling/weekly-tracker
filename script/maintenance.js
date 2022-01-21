// 该文件仅限于仓库维护者使用

const inquirer = require('inquirer');
const { exec } = require("child_process");

class Maintenance {
  constructor() {
    this.username = ""
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
        type: 'list',
        name: 'username',
        message: '请选择人员',
        choices: [
          { name: "道道里", value: "道道里" },
          { name: "Chen", value: "Chen" }
        ]
      }
    ])
    return target.username
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
    this.commitStr = `Maintenance by ${this.username}: ${this.descr}`;
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
          // console.log(stdout)
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
    this.descr = await this.getDescr()
    this.resultBool = await this.getSplice()

    if (!this.resultBool) {
      // 退出
      return
    }
    await this.execSh(`sh script/push.sh "${this.commitStr}"`, this.execCb)
  }
  // 拉取
  async pull() {
    await this.execSh("sh script/pull.sh", this.execCb)
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


let m = new Maintenance()
m.run()