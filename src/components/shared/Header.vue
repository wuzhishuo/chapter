<template>
  <header class="top-header">
    <div class="header-button is-left">
      <slot name="left"></slot>
    </div>
    <h1 class="header-title" v-text="title"></h1>
    <div class="header-button is-right">
      <slot name="right" class="right"></slot>
    </div>
  </header>
</template>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>

<style lang="scss">
  .top-header {
    height: 57px;
    line-height: 57px;
    padding: 0 19px;
    background-color: #1e2f5e;
  }

  .header-button {
    button {
      background-color: transparent;
      border: 0;
      box-shadow: none;
      color: inherit;
      display: inline-block;
      padding: 0;
      font-size: inherit;
      height: 21px;
      width: 18px;
    }

    &.is-left {
      float: left;
    }

    &.is-right {
      float: right;
    }

  }

  .header-title {
    margin: 0 50px;
    font-size: 18px;
    color: #fff;
    text-align: center;
    font-weight: normal;
  }

  .icon-back {
    background: url('~assets/images/nav_icon_back.png') no-repeat;
    background-size: contain;
    margin-top: 18px;
    outline: none;
  }
</style>