<template>
    <div class="tab">
        {{ tabName }}
    </div>
</template>
<script setup>
defineProps({
    tabName: {
        type: String,
        required: true,
    },
})
</script>
<style lang="less" scoped>
.tab {
    margin: 3px 3px;
    padding: 8px 15px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, .05);
    color: rgba(0, 0, 0, 0.8);
    transition: .25s;
}

.tab-hover {
    background-color: #cbcbcb;
    color: black;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.tab:hover {
    background-color: #cbcbcb;
    color: black;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
</style>
