<template>
  <div class="page-wrapper page-me">
    <div class="me-header">
      <div class="info-left">
        <img src="~assets/images/nav_me_icon_head.png" class="avatar" alt="头像">
        <span class="user-name" v-text="userName"></span>
      </div>
      <div class="info-right">
        <span class="messages"></span>
        <span class="log-off"></span>
      </div>
    </div>
    <div class="nav-list">
      <div class="action-group">
        <Action-Cell icon="icon-order" title="我的订单" @click="actionClick"></Action-Cell>
        <Action-Cell icon="icon-wallet" title="我的钱包"></Action-Cell>
        <Action-Cell icon="icon-card" title="我的充电卡"></Action-Cell>
        <Action-Cell icon="icon-collect" title="我的收藏"></Action-Cell>
        <Action-Cell icon="icon-assess" title="我的评价"></Action-Cell>
      </div>
      <div class="action-group">
        <Action-Cell icon="icon-find" title="发现充电桩"></Action-Cell>
      </div>
      <div class="action-group">
        <Action-Cell icon="icon-help" title="帮助与反馈"></Action-Cell>
        <Action-Cell icon="icon-setting" title="我的设置"></Action-Cell>
        <Action-Cell icon="icon-about" title="关于任我充"></Action-Cell>
      </div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import Tabbar from 'components/shared/Tabbar'
  import ActionCell from 'components/shared/ActionCell'

  export default {
    data () {
      return {
        userName: 'Wilbur'
      }
    },
    components: {
      Tabbar,
      ActionCell
    },
    methods: {
      actionClick: function () {
        console.log(1)
      }
    }
  }
</script>

<style lang="scss">
  .nav-list {
    overflow-y: scroll;
  }

  .action-group + .action-group {
    padding-top: 10px;
    background: rgba(0,0,0,0.08);
  }

  .me-header {
    background-color: #1e2f5e;
    height: 83px;
    padding: 16px 18px;
    color: #fff;
    box-sizing: border-box;

    .avatar {
      height: 51px;
      width: 51px;
      vertical-align: middle;
    }

    .user-name {
      display: inline-block;
      vertical-align: middle;
      margin-left: 19px;
      font-size: 21px;
    }

    .info-left {
      float: left;
    }

    .info-right {
      float: right;
      margin-top: 10px;
    }

    .messages {
      background: url('~assets/images/nav_me_icon_message.png') no-repeat;
      margin-right: 35px;
    }

    .log-off {
      background: url('~assets/images/nav_me_icon_log-off.png') no-repeat;
    }

    .messages,.log-off {
      height: 31px;
      width: 31px;
      display: inline-block;
      background-size: contain;
    }
  }

  .nav-list {
    flex: 1;
  }
</style>