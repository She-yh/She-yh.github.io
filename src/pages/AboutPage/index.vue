<template>
    <div class="about">
        <div style="white-space: pre-wrap;" class="aboutMe" v-html="intro">
        </div>
        <div class="introCard-container">
            <div id="introCard" ref="introCardRef">
                <template v-for="(value, key) in tabConst" :key="key">
                    <h4>{{ key }}</h4>
                    <div class="tab-container" @mousemove="outermouse">
                        <tabs v-for="(name, index) in value" :key="index" :tabName="name"></tabs>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { aboutMe, tabConst } from '@/constant/constant.js'
import tabs from './tabs.vue';
let intro = aboutMe;
let mouseOver = ref(true);
let randomShine;
let introCardRef = ref();

intro.match(/\*\*(.)+?\*\*/gm).map(keyWord => {
    const replaced = "<span class = 'keyWord'>" + keyWord.slice(2, -2) + "</span>"
    intro = intro.replace(keyWord, replaced)
})
let outermouse = (event) => {
    if (event.target.className != 'tab') {
        mouseOver.value = true;
    } else {
        mouseOver.value = false;
        randomShine && randomShine.tabsRecord && randomShine.tabsRecord.classList.remove('tab-hover')
    }
}
onMounted(() => {
    class Shine {
        intervalFlag = null;
        tabEls = introCardRef.value.getElementsByClassName('tab');
        tabsRecord = null;
        startShine = () => {
            this.intervalFlag = setInterval(() => {
                if (mouseOver.value) {
                    let randomSelect = Math.floor(Math.random() * 34)
                    if (this.tabsRecord) {
                        this.tabsRecord.classList.remove('tab-hover')
                    }
                    this.tabEls[randomSelect].classList.add('tab-hover')
                    this.tabsRecord = this.tabEls[randomSelect]
                }
            }, 800);
        }
        stopShine = () => {
            clearInterval(this.intervalFlag)
        }
    }
    console.log(introCardRef.value)
    randomShine = new Shine();
    randomShine.startShine();
})
onUnmounted(() => {
    randomShine.stopShine();
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

        #introCard {
            padding: 24px;
            background-color: #fff;
            width: 50%;
            border-radius: 8px;
            height: 100%;
            box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
            float: right;
            box-sizing: border-box;
            overflow: auto;

            &::-webkit-scrollbar {
                position: fixed;
                left: 0;
                width: 5px;
            }

            &::-webkit-scrollbar-thumb {
                border-radius: 5px;
                background: rgba(0, 0, 0, 0.2);
            }

            &::-webkit-scrollbar-track {
                border-radius: 0;
                background: transparent;
            }

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