<template>
    <div class="menu">
        <h2>目录</h2>
        <h3>特别鸣谢<span v-if="!theme">胡宇</span><span v-if="theme">刘喆嘉</span>提供的摄影作品</h3>
        <div class="menu-list">
            <router-link class="menu-list-item" v-for='item in menuItem' :key='item.index' :to="item.index">
                {{ `${item.title[0]} &nbsp; ${item.title[1]}` }}
            </router-link>
        </div>
    </div>
</template>
<script setup>
import { menuList } from '@/constant/menu.js'
const menuItem = menuList
</script>
<style lang="less" scoped>
.menu {
    position: absolute;
    top: 32%;
    z-index: 1000;
    right: 18%;

    &-list {
        display: flex;
        flex-direction: row;

        &-item {
            writing-mode: tb-rl;
            color: white;
            font-size: 18px;
            margin-right: 50px;
            font-weight: bold;
            transition: all 0.5s;
        }

        &-item:hover {
            transform: translateY(10px);
        }
    }

    h2 {
        color: white;
        font-size: 24px;
        margin-bottom: 55px;
        font-weight: bold;
    }

    h2:after {
        content: "";
        margin-left: 20px;
        border-right: rgb(158, 0, 0) solid 8px;
        transform: scaleY(0.5);
    }

    h3 {
        font-weight: lighter;
        color: white;
        font-size: 14px;
        margin-bottom: 65px;
    }
}
</style>
