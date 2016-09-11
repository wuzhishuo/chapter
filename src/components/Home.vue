<template>
    <div class="home-page">
        <div class="picture-show">
            <img src="https://placeimg.com/500/200/nature" alt="image holder">
        </div>
        <div class="scan-area">
            <p class="app-name">任我充</p>
            <div class="scan"></div>
            <p class="tips">扫码充电</p>
        </div>
        <div class="tabbar"></div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .home-page {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: #1b274a;

        img {
            max-width: 100%;
        }
    }
    .picture-show {
        height: 146px;
        overflow: hidden;
        max-width: 100%;
    }

    .scan-area {
        background: url('../assets/images/bg.png') no-repeat;
        background-size: 100%;
        flex: 1;
        color: #fff;

        .app-name {
            margin-top: 38px;
            font-size: 36px;
            text-align: center;
        }

        .scan {
            height: 200px;
            width: 200px;
            background: url('../assets/images/scan.gif') no-repeat;
            background-size: 100%;
            margin: 65px auto 19px; 
        }

        .tips {
            font-size: 19px;
            text-align: center;
            margin: 0;
        }
    }

    .tabbar {
        height: 57px;
        background: #fff;
    }
</style>