<template>
    <div class="son-container">
        son
        <div>obj.b.c={{ obj.b.c }}</div>
        <div>父组件传递的消息为{{ msg }}</div>
        <div>用toRef从obj里取出来的值：{{ objA }}</div>
        <button @click="changeMessage">
            更改msg为SonMessage
        </button>
        <button @click="obj.a++">
            obj.a+1
        </button>
        <button @click="emitFatherEvent">
            emit触发父组件事件
        </button>
        <button @click="obj.b.c++">
            obj.b.c+1
        </button>
    </div>
</template>
<script>
import { reactive, toRef, watch } from 'vue'
export default {
    emits: ['showMessage'],
    props: ['msg'],
    emits: ['update:msg'],
    setup(props, context) {
        let obj = reactive({
            a: 1,
            b: {
                c: 3
            }
        })
        console.log(props)
        function myFunc() {
            console.log("i'm son")
        }
        watch(obj, (newValue, oldValue) => {
            console.log(newValue, oldValue)
        })
        function emitFatherEvent() {
            context.emit('showMessage', '嘿嘿')
        }
        let changeMessage = () => context.emit('update:msg', 'SonMessage')
        return {
            emitFatherEvent,
            obj,
            changeMessage,
            objA: toRef(obj, 'a')
        }
    }
}
</script>
<style lang="less" scoped>
@black-color: #d8d8d8;

.son-container {
    background-color: @black-color;
}
</style>
