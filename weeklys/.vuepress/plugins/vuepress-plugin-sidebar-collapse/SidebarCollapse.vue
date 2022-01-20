<template>
  <div class="sidebar_collapse" @click="changeStatus">
    <svg t="1642672166025" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10707" width="20" height="20"><path d="M686.0032 667.392a30.6944 30.6944 0 0 1-21.76-8.96l-143.1808-142.5152a30.848 30.848 0 0 1 0-43.648l143.2064-142.592a30.7968 30.7968 0 1 1 43.4688 43.648l-121.344 120.7552 121.344 120.7552a30.7968 30.7968 0 0 1-21.76 52.5568z" p-id="10708"></path><path d="M481.2032 667.392a30.6944 30.6944 0 0 1-21.76-8.96l-143.1808-142.5152a30.848 30.848 0 0 1 0-43.648l143.2064-142.592a30.7968 30.7968 0 1 1 43.4688 43.648l-121.344 120.7552 121.344 120.7552a30.7968 30.7968 0 0 1-21.76 52.5568z" p-id="10709"></path></svg>
  </div>
</template>
<script>
export default {
  methods:{
    changeStatus(){
      const sidebar = document.querySelector(".sidebar")
      const page = document.querySelector("main.page")
      const svg = document.querySelector(".sidebar_collapse svg")
      if(sidebar.offsetLeft == 0){
        // 当前是展开状态
        sidebar.style.left = '-100%'
        page.style.marginLeft = '0'
        svg.style.transform = 'rotate(180deg)'
      }else{
        sidebar.style.left = '0'
        page.style.marginLeft = '320px'
         svg.style.transform = 'rotate(0deg)'
      }
    }
  }
}
</script>
<style scoped>
@media (max-width: 959px){
  .sidebar_collapse{
    display: none;
  }
}
.sidebar_collapse{
  width: 1.3em;
  height: 1.3em;
  padding: 0.1em;
  position: absolute;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  text-align: center;
  line-height: 1.3em;
  border-radius: 50%;
  z-index: 100;
  cursor: pointer;
  top: 0;
  left:-5px;
}
.sidebar_collapse svg{
  position: relative;
  top: 0.05em
}
</style>