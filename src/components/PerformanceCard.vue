<template>
    <el-collapse-transition>
        <el-card class="box-card" shadow="hover" v-if="cardVisible">
            <template #header>
                <div class="card-header">
                    <span>指标</span>
                    <el-button class="button" text @click="destroyCard">关闭</el-button>
                </div>
            </template>
            以下内容摘自<a href="https://web.dev/fcp/">谷歌</a>和<a href="https://developer.mozilla.org/zh-CN/">MDN</a>
            <div class="demo-collapse">
                <el-collapse accordion>
                    <el-collapse-item v-for="(vital, key) in vitals" :key='key'
                        :title="`${vital.short}: ${vital.value ? vital.value.toFixed(2) + 'ms' : '加载中……'}`">
                        <div>
                            {{ vital.content }}
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </el-card>
    </el-collapse-transition>
</template>
<script setup = "props">
import { ref, reactive } from 'vue'
let cardVisible = ref(true)
let vitals = reactive({
    "first-paint": {
        short: 'FP',
        value: null,
        content: "首次绘制，浏览器从开始加载到渲染任何的第一个像素的时间，如背景颜色。"
    },
    "first-contentful-paint": {
        short: "FCP",
        value: null,
        content: "首次内容绘制，测量页面从开始加载到页面内容（文本、图片、非空白 Canvas 或 SVG ）的任何部分在屏幕上完成渲染的时间。"
    },
    "largest-contentful-paint": {
        short: 'LCP',
        value: null,
        content: "最大内容绘制，测量页面从开始加载到最大文本块或图像元素在屏幕上完成渲染的时间。此指标更适合用于评估性能"
    },
    "DOMContentLoaded": {
        short: 'DCL',
        value: null,
        content: "当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载。"
    },
    "Loaded": {
        short: 'Loaded',
        value: null,
        content: "在整个页面及所有依赖资源如样式表和图片都已完成加载时触发。它与 DOMContentLoaded 不同，后者只要页面 DOM 加载完成就触发，无需等待依赖资源的加载。"
    }
})

if (!!PerformanceObserver) {
    try {
        var observe = new PerformanceObserver((entryList) => {
            var entries = entryList.getEntries();
            for (var i = 0; i < entries.length; i++) {
                let cur = entries[i];
                if (cur instanceof PerformanceNavigationTiming) {
                    vitals.DOMContentLoaded.value = cur.domContentLoadedEventEnd
                    vitals.Loaded.value = cur.loadEventEnd
                    console.log(cur)
                }
                else {
                    vitals[cur.name ? cur.name : cur.entryType].value = cur.startTime;
                    console.log(vitals[cur.name ? cur.name : cur.entryType].short, cur.startTime)
                }
            }
        }).observe({
            entryTypes: ['paint', 'largest-contentful-paint', 'navigation']
        });
    } catch (e) {
        console.warn('[monitor] PerformanceObserver error:', (e || {}).message ? e.message : e);
    }
}
let destroyCard = () => {
    console.log('[monitor] observe disconnected')
    observe.disconnect()
    cardVisible.value = false;
}
</script>
<style lang="less" scoped>
.box-card {
    position: fixed;
    z-index: 10;
    width: 360px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .el-collapse {
        border: none;
    }

    a {
        color: #409eff;
    }
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
