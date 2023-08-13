<template >
  <LoadingPage v-if="loading"></LoadingPage>
  <div v-loading.fullscreen.lock="loading" element-loading-background="rgba(122, 122, 122, 0.8)"
    element-loading-text="Loading...">
    <Banner></Banner>
    <el-container class="home-container">
      <el-main class="home-main">
        <RouterView v-slot="{ Component }">
          <Transition mode="out-in">
            <component :is="Component"></component>
          </Transition>
        </RouterView>
      </el-main>
    </el-container>
  </div>
</template>
<script setup>
import Banner from "./components/Banner.vue";
import LoadingPage from "@/pages/LoadingPage/index.vue";
import { ref } from 'vue';
let loading = ref(true);
window.onload = () => {
  console.log('onload')
  loading.value = false;
}
</script>
<style lang="less" scoped>
.home {

  &-header {
    position: absolute;
    width: 100%;
  }

  &-header-transparent {}

  &-main {
    flex: 1;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.footer {
  transition: all 0.3s;
}
</style>
