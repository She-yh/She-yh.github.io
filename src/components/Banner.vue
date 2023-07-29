<template>
    <section id="topbar">
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
                        <router-link class="topbar-link" v-for="item in menuItem" :key="item.index" :to="item.index">{{
                            item.title }}</router-link>
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
    width: 100%;
    position: absolute;
    z-index: 1000;

    &-wrapper {
        margin: 8px;
        height: 65px;
    }

    &-container {

        box-shadow: 0 0 18px 5px rgba(83, 83, 83, 0.2);
        background-color: rgba(214, 237, 255, 0.2);
        backdrop-filter: saturate(180%) blur(20px);
        border-radius: 10px;
        margin: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 15px 0 15px;
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
    }

    .topbar-link:hover,
    .topbar-link:active {
        color: #23527c;
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

@media screen and (min-width: 1200px) {
    #topbar-container {
        padding: 0 45px 0 45px;
    }
}

@media screen and (min-width: 768px) {
    #topbar-container {
        padding: 0 45px 0 45px;
    }
}
</style>
