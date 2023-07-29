<template>
    <section id="topbar" class="solid">
        <nav id="topbar-wrapper">
            <span id="topbar-container">
                <span id="topbar-logo"></span>
                <span id="topbar-text">
                    SHEYH.CN
                </span>
                <div class="banner-flex-grow"></div>
                <div id="topbar-right">
                    <i id="toggle-button" class="fa fa-bars" aria-hidden="true"></i>
                    <ul id="right-link">
                        <router-link class="topbar-link" v-for="item in menuItem" :key="item.index" :to="item.index">
                            <div>{{ item.title }}</div>
                        </router-link>
                    </ul>
                </div>
            </span>

        </nav>
    </section>
</template>
<script setup>
import { onMounted } from "vue"
import { menuList } from '@/constant/menu.js'
const menuItem = menuList
onMounted(() => {
    console.log(this)
})
</script>
<style lang="less" scoped>
.banner-flex-grow {
    flex: 1;
}

#topbar {
    color: white;
    width: 100%;
    position: absolute;
    z-index: 1000;

    &-wrapper {
        height: 65px;
    }

    &-container {

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 32px 0 32px;
        margin: auto;
        height: 100%;
    }

    &-text {
        font-size: 16px;
        font-weight: bolder;
        font-family: "Microsoft Yahei";

    }

    .topbar-link {
        margin-right: 40px;
        font-size: 15px;
        color: white
    }

    .topbar-link:hover,
    .topbar-link:active {
        color: #55b0ff;
    }

    &-logo {
        display: inline-block;
        background-image: url("../../../public/favicon.png");
        background-size: cover;
        height: 40px;
        width: 40px;
        margin-right: 12px;
        background-repeat: no-repeat;
    }
}

.solid {
    background-color: white;
    color: rgb(20, 20, 20) !important;

    .topbar-link {
        color: rgb(20, 20, 20) !important;
    }

    .topbar-link:hover,
    .topbar-link:active {
        color: #55b0ff;
    }
}

@media screen and (min-width: 1200px) {
    #topbar-container {
        padding: 0 96px 0 96px;
    }
}

@media screen and (min-width: 768px) {
    #topbar-container {
        padding: 0 96px 0 96px;
    }
}
</style>
