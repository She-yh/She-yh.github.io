<template>
    <div class="about">
        <div style="white-space: pre-wrap;" class="aboutMe" v-html="intro">
        </div>
        <div class="introCard-container">
            <div class="introCard">
                <div v-for="(value, key) in tabConst" :key="key">
                    <h4>{{ key }}</h4>
                    <div class="tab-container">
                        <tabs v-for="(name, index) in value" :key="index" :tabName="name">{{ name }}</tabs>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { aboutMe, tabConst } from '@/constant/constant.js'
import tabs from './tabs.vue';
let intro = aboutMe
intro.match(/\*\*(.)+?\*\*/gm).map(keyWord => {
    const replaced = "<span class = 'keyWord'>" + keyWord.slice(2, -2) + "</span>"
    intro = intro.replace(keyWord, replaced)
})
</script>

<style lang="less" scoped>
.about {
    display: flex;


    .aboutMe {
        width: 50%;
    }

    .introCard-container {
        font-size: small;
        position: fixed;
        height: calc(100vh - 90px);
        width: 100%;
        left: 0;
        padding: 40px;
        padding-right: 20px;
        box-sizing: border-box;

        .introCard {
            padding: 24px;
            background-color: #fff;
            width: 50%;
            border-radius: 8px;
            height: 100%;
            box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
            float: right;
            box-sizing: border-box;
            overflow: auto;

            .tab-container {
                display: flex;
                flex-wrap: wrap;
            }
        }
    }
}
</style>
<style>
.keyWord {
    padding: 0 15px;
    border-radius: 3px;
    color: rgb(106, 186, 255);
    background-color: rgba(20, 20, 20, 5%);
}

.dot {
    font-size: 30px;
}
</style>