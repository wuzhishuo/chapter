<template>
  <div class="page-login">
    <top-header>
        <button type="button" slot="left" class="icon-back" @click="goBack"></button>
        <span slot="title">会员登录</span>
    </top-header>
    <div class="login-form-container">
      <form class="login-form" @submit.prevent="login">
        <div class="app-name">任我充</div>
        <div class="input-group">
          <span class="icon-before icon-phone"></span>
          <input type="tel" name="phone" id="phone" placeholder="请输入手机号">
          <span class="icon-after"></span>
        </div>
        <div class="input-group">
          <span class="icon-before icon-password"></span>
          <input type="password" name="passowrd" id="password" placeholder="请输入密码">
          <span class="icon-after"></span>
        </div>
        <button class="btn btn-primary btn-block btn-login">登录</button>
        <div class="login-methods">
          <div class="login-wechat">
            <span class="method-name">微信登录</span>
          </div>
          <div class="login-qq">
            <span class="method-name">QQ登录</span>
          </div>
        </div>
      </form>
      <div class="login-help">
        <a href="javascript:void(0)" class="forget-password">忘记密码？</a>
        <a href="javascript:void(0)" class="register">立即注册</a>
      </div>
    </div>
  </div>
</template>

<script>
  import TopHeader from 'components/shared/Header'
  export default {
    components: {
      TopHeader
    },
    methods: {
      goBack: function () {
        this.$router.go('/')
      },
      login: function () {
        this.$router.go('/charging')
      }
    }
  }
</script>

<style lang="scss">
  .login-form-container {
    position: absolute;
    top: 57px;
    right: 0;
    bottom: 0;
    left: 0;
    /*flex: 1;*/
    padding: 0 10%;
    background: linear-gradient(#317dcd,#1b2f4a);
    color: #fff;
    /*display: flex;*/
    /*flex-direction: column;*/
    overflow-y: scroll;
    

    .app-name {
      margin: 38px 0;
      font-size: 36px;
      text-align: center;
    }

    .login-form {
      flex: 1;
    }
  }

  .input-group {
    position: relative;
    margin-bottom: 23px;

    .icon-before,.icon-after {
      position: absolute;
      width: 18px;
      height: 18px;
      top: 10px;
    }

    .icon-before {
      margin-left: 13px;
      margin-right: 10px;
    }

    .icon-after {
      margin-left: 10px;
      margin-right: 13px;
    }

    .icon-phone {
      background: url('~assets/images/Login_icon_phone.png') no-repeat;
      background-size: contain;
    }

    .icon-password {
      background: url('~assets/images/Login_icon_password.png') no-repeat;
      background-size: contain;      
    }

    input[type="tel"],input[type="password"] {
      padding: 10px 41px;
      border: none;
      outline: none;
      border-radius: 5px;
      width: 100%;
      box-sizing: border-box;
    }


  }

  .login-methods {
    display: flex;
    height: 56px;
    margin-top: 44px;
  }

  .login-wechat,.login-qq {
    flex: 1;
    background-size: contain;

    .method-name {
      font-size: 12px;
      display: inline-block;
      width: 100%;
      margin-top: 63px;
      text-align: center;
    }
  }

  .login-wechat {
    background: url('~assets/images/Login_icon_wechat.png') no-repeat center;
    background-size: contain;  
  }

  .login-qq {
    background: url('~assets/images/Login_icon_qq.png') no-repeat center;
    background-size: contain;    
  }

  .login-help {
    margin-bottom: 49px;
    margin-top: 40px;
    display: flex;

    a {
      flex: 1;
      font-size: 15px;
      color: rgba(255,255,255,0.5);
    }

    .register {
      text-align: right;
      &:before {
        background: url('~assets/images/Login_icon_register.png') no-repeat;
      }
    }

    .forget-password {
      padding-left: 31px;

      &:before {
        background: url('~assets/images/Login_icon_forget.png') no-repeat;
      }
    }

    .register,.forget-password {
      &:before {
        content: '';
        position: absolute;
        width: 16px;
        height: 15px;
        margin-left: -30px;
        background-size: contain;
      }
    }
  }
</style>