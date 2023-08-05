<template>
    <div class="works-container">
        <work-card v-for="work in works" :key="work.link" v-bind="work"></work-card>
    </div>
</template>
<script setup>
import workCard from './workCard.vue';
import { works } from '@/constant/constant.js'
</script>
<style>
.works-container {
    display: flex;
    flex-wrap: wrap;
}
</style>