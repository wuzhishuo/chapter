<template>
  <router-view></router-view>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  html,body,#app {
    height: 100%;
  }

  body {
    font-family: 'Helvetica Neue','Helvetica','PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
  }

  .page-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .btn {
    border: none;
    outline: none;
    padding: 12px;
    border-radius: 5px;
    background: transparent;
    color: #fff;
    font-size: 20px;

    &.btn-block {
      width: 100%;
    }

    &.btn-primary {
      background-color: #ee2441;
    }

    &.btn-default {
      background-color: #1e2f5e;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

</style>
