<template>
    <div class="home">
        <div class="home-container">
            <div class="home-background">
                <div class="home-background-filter">
                    <div class="welcome">欢迎访问.</div>
                    <span class="line"></span>
                    <div class="ouou">去码头整点薯条？</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style lang="less" scoped>
.home {
    height: 100%;

    &-background {
        background-image: url("/background.jpg");
        width: 100%;
        background-size: cover;
        height: 100%;
        position: fixed;
        background-position: center bottom;
        right: 0;
        bottom: 0;
        z-index: 2;
        background-repeat: no-repeat;

        &-filter {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: rgba(56, 55, 55, 30%);
        }

        .welcome {
            margin-bottom: 20px;

            font-weight: 400;
            font-size: 76px;
            color: #fff;
        }

        .line {
            height: 4px;
            width: 70px;
            background-color: #860000;
            margin-bottom: 25px;
        }

        .ouou {
            font-weight: 400;
            font-size: 15px;
            color: #fff;
        }
    }

}
</style>