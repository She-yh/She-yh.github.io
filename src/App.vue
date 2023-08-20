<template >
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
  <PerformanceCard></PerformanceCard>
</template>
<script setup>
import Banner from "./components/Banner.vue";
import PerformanceCard from './components/PerformanceCard.vue'
import { ref } from 'vue';
let loading = ref(true);
window.onload = () => {
  loading.value = false;
}
</script>
<style lang="less" scoped>
.home {

  &-header {
    position: absolute;
    width: 100%;
  }

  &-main {
    flex: 1;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
