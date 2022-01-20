import SidebarCollapse from './SidebarCollapse.vue';
import Vue from "vue";

export default {
  updated() {
    setTimeout(() => {
      this.updated()
    }, 100)
  },
  methods: {
    updated() {
      // 获取所有的dom，之后在所有的代码块上插入vue的组件
      const container = document.querySelector(".theme-container")
      if (!container) {
        return
      }
      if (container.className.indexOf("no-sidebar") > -1) {
        // 没有左侧菜单的不需要折叠按钮
        return
      }

      if (document.querySelector(".sidebar_collapse")) {
        // 已存在
        return
      }
      // 创建组件
      const S = Vue.extend(SidebarCollapse);
      const sc = new S();
      sc.$mount();

      const parentEl = document.querySelector(".page section");
      parentEl.appendChild(sc.$el);
    }
  }
}