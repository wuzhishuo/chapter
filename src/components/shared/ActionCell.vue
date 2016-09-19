<template>
  <div class="action-cell">
    <div class="cell-left" :class="icon"></div>
    <div class="cell-right"></div>
    <p class="cell-title" v-text="title"></p>
  </div>
</template>

<script>
  export default {
    props: {
      icon: String,
      title: String
    }
  }
</script>

<style lang="scss">
  .action-cell {
    height: 53px;
    line-height: 53px;
    background: #fff;

    & + & {
      border-top: 1px solid rgba(0,0,0,0.1);
    }

    .cell-title {
      margin: 0;
      font-size: 17px;
      font-weight: 200;
      color: rgba(0,0,0,0.9);
      margin: 0 63px;
    }

    .cell-left {
      float: left;
      width: 24px;
      height: 25px;
      margin-left: 18px;
      margin-top: 15px;
      background-size: 100%;
      background-repeat: no-repeat;
    }

    .cell-right {
      float: right;
      margin-right: 18px;

      &:after {
        content: '';
        display: inline-block;
        height: 10px;
        width: 10px;
        border-width: 2px 2px 0 0;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.4);
        transform: rotate(45deg);
      }
    }

    .icon-order {
      background-image: url('~assets/images/me_icon_order.png');
    }

    .icon-wallet {
      background-image: url('~assets/images/me_icon_wallet.png');
    }

    .icon-card {
      background-image: url('~assets/images/me_icon_card.png');
    }

    .icon-collect {
      background-image: url('~assets/images/me_icon_collect.png');
    }

    .icon-assess {
      background-image: url('~assets/images/me_icon_assess.png');
    }

    .icon-find {
      background-image: url('~assets/images/me_icon_find.png');
    }

    .icon-help {
      background-image: url('~assets/images/me_icon_help.png');
    }

    .icon-setting {
      background-image: url('~assets/images/me_icon_setting.png');
    }

    .icon-about {
      background-image: url('~assets/images/me_icon_about.png');
    }
  }
</style>