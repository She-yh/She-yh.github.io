<template>
  <Banner v-if="true"></Banner>

  <el-container class="home-container">
    <el-main class="home-main">
      <router-view></router-view>
    </el-main>
    <el-footer>© Sheyh. All Rights Reserved</el-footer>
  </el-container>
</template>
<script setup>
import { Fragment, watch, reactive, onMounted, onUnmounted } from "vue"
import Banner from "./components/Banner.vue";
const screen = reactive({
  width: window.innerWidth,
  mode: "computer"
})
const onResize = () => {
  screen.width = window.innerWidth
}
onMounted(() => {
  window.addEventListener('resize', onResize);
})
onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
watch(screen, () => {
  if (screen.width < 768) {
    screen.mode = "phone"
  } else {
    screen.mode = "computer"
  }
})

</script>
<style lang="less" scoped>
.home {
  &-container {
    height: 100vh;
  }

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
