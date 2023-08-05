<template>
    <div class="work-card">
        <span class="title">{{ title }}</span>
        <span class="intro" v-html="intro"></span>
        <a :href="link" class="link" v-if='link'>链接
            <svg viewBox="0 0 1024 1024" class='arrow' xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                <path fill="currentColor"
                    d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z">
                </path>
            </svg>
        </a>
    </div>
</template>
<script setup>
defineProps(['title',
    'intro',
    'link']
)
</script>
<style lang="less" scoped>
.work-card {
    width: 300px;
    padding: 24px;
    margin: 16px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    .title {
        font-weight: bolder;
        font-size: 24px;
        margin-bottom: 16px;
    }

    .intro {
        white-space: pre-line;
        word-break: break-all;
    }

    .link {
        margin-top: 16px;
        padding: 12px;
        color: #fff;
        background-color: rgb(55, 55, 55);

        // box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all 0.3s;
    }

    .arrow {
        width: 16px;
        height: 16px;
    }

    .link:hover {
        background-color: #fff;
        color: black
    }
}
</style>
