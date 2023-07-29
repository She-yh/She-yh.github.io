<template>
    <div class="home">
        <div class="home-container">
            <div class="home-background">

                <div class="home-background-filter"></div>
            </div>
        </div>
    </div>
    <Menu v-if="false"></Menu>
</template>
<script setup>
import Menu from '@/components/Menu.vue';
</script>
<style lang="less" scoped>
.home {
    height: 100%;

    &-background {
        background-image: url("../../../public/background.jpg");
        width: 130%;
        background-size: cover;
        height: 100%;
        position: fixed;
        background-position: right 85%;
        right: 0;
        bottom: 0;
        z-index: 2;
        background-repeat: no-repeat;
        transform: scale(1.06);

        &-filter {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(56, 55, 55, 30%);
        }
    }

}
</style>