<template>
    <el-menu :default-active="$route.path" class='topbar' :class="{ solid: $route.path !== '/home' }" mode="horizontal"
        :ellipsis="false" @select="handleSelect">
        <div class="topbar-logo" style="height:70px">
            佘远航的博客
        </div>
        <div style="flex:1" @click="console.log(this)" />
        <el-menu-item v-for="item in menuItem" :index="item.index" :key="item.index">
            <div class="hover-block">
                {{ item.title }}
            </div>
        </el-menu-item>
    </el-menu>
</template>
<script setup>
import { onMounted } from "vue"
import { menuList } from '@/constant/constant.js'
import { useRouter } from 'vue-router'
const menuItem = menuList
const router = useRouter()
onMounted(() => {
})
const handleSelect = (index) => {
    if (index[0] != '/') window.location.href = index;
    else {
        console.log("switch to route:", index)
        router.push(index)
    }
}
</script>
<style lang="less" scoped>
.topbar {
    background-color: transparent;
    border: none;
    color: white;
    width: 100%;
    top: 0;
    z-index: 1000;
    height: 70px;

    &-logo {
        display: flex;
        align-items: center;
        font-size: 24px;
        font-style: italic;
        padding-left: 16px;
        font-family: "Microsoft Yahei";
    }

    transition: box-shadow 0.3s;

}

.el-menu {
    &>&-item {
        color: white;

        &:hover {
            color: #97c7f3;
            background-color: transparent;
        }

        &:active {
            color: white;
            background-color: transparent;
        }

        border: none !important;
        background-color: transparent !important;


    }


    .hover-block {
        display: flex;
        align-items: center;
        height: 32px;
        border-radius: 5px;
        padding: 0 12px;
        background-color: rgba(20, 20, 20, 0.15);
        transition: background-color 0.3s;

        &:hover {
            background-color: transparent;
        }
    }

}

.is-active {
    color: #5aaafc !important;

    &>.hover-block {
        background-color: #fff !important;
    }
}

.solid {
    background-image: radial-gradient(transparent 1px, #fff 1px);
    // background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: saturate(50%) blur(4px);
    box-shadow: 0 0 15px 7px rgba(20, 20, 20, 0.1);
    color: rgb(20, 20, 20) !important;
    position: sticky;
    background-size: 4px 4px;

    .hover-block {
        background-color: rgb(220, 220, 220);
    }

    .el-menu-item {
        color: rgb(20, 20, 20) !important;
    }

    transition:all 0.3s;

}

@media screen and (min-width: 768px) {
    .topbar {
        padding: 0 48px 0 48px;
    }
}

@media screen and (min-width: 1200px) {
    .topbar {
        padding: 0 96px 0 96px;
    }
}
</style>
