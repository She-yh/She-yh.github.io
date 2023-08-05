<template>
  <Banner v-if="true"></Banner>
  <el-container class="home-container">
    <el-main class="home-main">
      <router-view>
      </router-view>
    </el-main>
    <el-footer>© Sheyh. All Rights Reserved</el-footer>
  </el-container>
</template>
<script setup>
import Banner from "./components/Banner.vue";

</script>
<style lang="less" scoped>
.home {
  &-container {}

  &-header {
    position: absolute;
    width: 100%;
  }

  &-header-transparent {}

  &-main {
    flex: 1;
  }
}
</style>
