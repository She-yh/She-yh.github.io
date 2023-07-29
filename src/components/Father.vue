<template>
    <div class="container">
        father
        {{ arr }}
        <div>父组件打算传递给子组件的消息为{{ msg }}</div>
        <button @click="click">Clcik</button>
        <Son v-model:msg="msg" @showMessage="showMessage" />

    </div>
</template>
<script>
import { reactive, ref, getCurrentInstance } from 'vue'
import Son from './Son.vue'
export default {
    components: {
        Son
    },
    setup() {
        let arr = [1, 2, 3, 4]
        let test = ref("s")
        let msg = ref("FatherMessage")
        let click = () => {
            arr[0] = 10
            console.log(test)
        }

        const showMessage = (msg) => {
            alert("子组件触发了showMessage----" + msg)
        }

        return { arr, test, obj, click, p, showMessage, msg }
    }

}

let obj = { a: 1, b: { c: 3 } }
const p = new Proxy(obj, {
    get(target, propName) {
        console.log(target, propName)
    },
    set(target, propName, value) {

    }
})
</script>
<style lang="less" scoped></style>
