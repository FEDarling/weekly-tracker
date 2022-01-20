const path = require("path");

module.exports = (options = {}, ctx) => {
  return {
    name: "vuepress-plugin-sidebar-collapse",
    clientRootMixin: path.resolve(__dirname, "./clientRootMixin.js")
  }
}