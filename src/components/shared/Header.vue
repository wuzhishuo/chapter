<template>
  <header class="top-header">
    <div class="header-button is-left">
      <slot name="left"></slot>
    </div>
    <div class="header-button is-right">
      <slot name="right"></slot>
    </div>
    <h1 class="header-title">
      <slot name="title"></slot>
    </h1>
  </header>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  .top-header {
    line-height: 57px;
    padding: 0 19px;
    background-color: #1e2f5e;
  }

  .header-button {
    line-height: 0;
    
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

  @mixin icon-background {
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 18px;
    outline: none;
  }

  .icon-back {
    @include icon-background;
    background-image: url('~assets/images/nav_icon_back.png');
  }

  .icon-map {
    @include icon-background;
    background-image: url('~assets/images/nav_icon_map.png');
  }

  .icon-share {
    @include icon-background;
    background-image: url('~assets/images/nav_icon_share.png');
  }
</style>