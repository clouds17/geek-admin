<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <el-container :direction="vertical" style="height: 100%;">
    <el-header>
          <el-menu
            :default-active="1"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
              <el-menu-item index="1">处理中心</el-menu-item>
              <el-submenu index="2">
                <template v-slot:title>我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template v-slot:title>选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="3" disabled>消息中心</el-menu-item>
              <el-menu-item index="4"
                ><a href="https://element3-ui.com" target="_blank"
                  >订单管理</a
                ></el-menu-item
              >
        </el-menu>

    </el-header>
    <el-container :direction="horizontal">
      <el-aside width="200px">
        <div>
          <router-link to="/">Home</router-link>
        </div>
        <div>
          <router-link to="/about">About</router-link>
        </div>
      </el-aside>
      <el-container :direction="vertical">
        <el-main height="">
          <!-- Main content -->
          <router-view></router-view>
        </el-main>
        <el-footer height="">
          Footer content
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
  
</template>
<style>
* {
  padding: 0;
  margin: 0;
}
body {
  height: 100vh;
}
#app {
  height: 100%;
}
</style>
<style scoped>

.el-header, .el-footer { background-color: #b3c0d1; color: #333; text-align: center; } .el-aside { background-color: #d3dce6; color: #333; } .el-main { background-color: #e9eef3; color: #333; } body > .el-container { margin-bottom: 40px; }

</style>
