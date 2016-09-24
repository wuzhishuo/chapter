<template>
    <div class="page-wrapper page-charge">
        <div class="picture-show">
            <img src="https://placeimg.com/500/200/nature" alt="image holder">
        </div>
        <div class="scan-area">
            <p class="app-name">任我充</p>
            <div class="scan" @click="goToLogin"></div>
            <p class="tips">扫码充电</p>
        </div>
        <tabbar></tabbar>
    </div>
</template>

<script>
    import Tabbar from './shared/Tabbar'

    export default {
      components: {
        Tabbar
      },
      methods: {
        goToLogin: function () {
          this.$router.go('./login')
        }
      },
      data () {
        return {
          pageTitle: '任我充'
        }
      }
    }
</script>

<style lang="scss">
    .page-charge {
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
        background: linear-gradient(#317dcd,#1b2f4a);
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
</style>