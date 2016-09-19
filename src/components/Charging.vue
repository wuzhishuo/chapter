<template>
  <div class="page-wrapper page-charging">
    <div class="charging-content">
      <div class="charger-title" v-text="chargerTitle"></div>
      <div class="charging-details">
        <div class="charging-status">
          <!--<div class="charging-light"></div>-->
          <div class="fulled-power" v-text="fulledPower"></div>
          <div class="mode-container">
            <span class="mode-name" v-text="modeName"></span>
          </div>
        </div>
        <div class="charger-info">
          <div class="info-item">
            <div class="info-data info-data-power-type"></div>
            <div class="info-name" v-text="charger.powerType=='AC'?'交流电':'直流电'"></div>
          </div>
          <div class="info-item">
            <div class="info-data"  v-text="charger.voltage"></div>
            <div class="info-name">电压（V）</div>
          </div>
          <div class="info-item">
            <div class="info-data" v-text="charger.current"></div>
            <div class="info-name">电流（A）</div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary btn-block btn-stop">停止充电</button>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import Tabbar from 'components/shared/Tabbar'

  export default {
    data () {
      return {
        charger: {
          shopName: '杨浦创智天地',
          name: '2号桩',
          port: 'A',
          powerType: 'AC',
          voltage: 220,
          current: 3.30,
          unitPrice: 12
        },
        mode: 'power',
        chargingTime: 0,
        fulledPower: 10.37
      }
    },
    computed: {
      chargerTitle: function () {
        return this.charger.shopName + '（' + this.charger.name + '.枪' + this.charger.port + '）'
      },
      modeName: function () {
        switch (this.mode) {
          case 'power':
            return '按电量充电'
          case 'time':
            return '按时间充电'
          case 'price':
            return '按价格充电'
          default:
            return ''
        }
      }
    },
    components: {
      Tabbar
    }
  }
</script>

<style lang="scss">
  .page-charging {
    color: #fff;
  }

  .charging-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 10%;
    background: radial-gradient(circle at right top,#317dcd,#1b2f4a);
  }

  .charger-title {
    height: 57px;
    font-size: 18px;
    line-height: 57px;
    margin: 0 -10%;
    box-shadow: 0px 5px 6px -6px #fff;
    text-align: center;
    font-weight: normal;
  }

  .charging-status {
    margin: 0 auto;
    width: 275px;
    height: 275px;
    position: relative;
    /*background: url('~assets/images/charging_process_texture.png');*/
    background-size: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .charging-light {
    position: absolute;
    width: 183px;
    height: 70px;
    /*background: url('~assets/images/charging_sprite.png') 0 0;*/
    top: 185px;
    left: 45px;
    /*animation: light-animation steps(60) 5s infinite;*/
  }

  .fulled-power {
    font-size: 85px;
    text-align: center;
    font-weight: 200;
  }

  .mode-container {
    text-align: center;
    font-size: 13px;
    color: #00a8ff;
  }

  .mode-name {
    display: inline-block;
    padding-left: 29px;
    position: relative;
    
    &:before {
      content: '';
      position: absolute;
      width: 24px;
      height: 100%;
      background: url('~assets/images/charging_icon_battery.png') no-repeat;
      background-size: contain;
      margin-left: -29px;
    }
  }

  .charging-details {
    flex: 1;
  }

  .charger-info {
    display: flex;
    text-align: center;

    .info-item {
      flex: 1;

      &:not(:first-child) {
        box-shadow: -5px 0px 6px -6px #fff;
      }
    }

    .info-data {
      font-size: 30px;
      font-weight: 200;
      height: 34px;
      line-height: 34px;
    }

    .info-name {
      margin-top: 10px;
      color: #00a8ff;
      font-size: 13px;
    }

    .info-data-power-type {
      width: 28px;
      height: 34px;
      margin: auto;
      background: url('~assets/images/charging_type_zhuang.png') no-repeat;
      background-size: contain;
    }
  }

  .btn-stop {
    margin-bottom: 63px;
  }

  @keyframes light-animation {
    to {
      background-position: -24360px 0;
    }
  }
</style>