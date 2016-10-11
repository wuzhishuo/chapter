<template>
  <div class="order-cell">
    <div class="cell-header">
      <span class="header-left" :class="statusClass">
        <span class="icon"></span>
      <span class="order-status" v-text="status | showOrderStatusText"></span>
      <span class="time-remaining" v-if="timeRemaining>0" v-text="timeRemaining | convertSeconds"></span>
      </span>
      <span class="header-right" v-text="createdTime"></span>
    </div>
    <div class="cell-content">
      <div class="content-item">
        <span class="item-key">交易单号</span>
        <span class="item-value" v-text="orderNumber"><span>
      </div>
      <div class="content-item">
        <span class="item-key">站点名称</span>
        <span class="item-value" v-text="station.name"><span>
      </div>
      <div class="content-item">
        <span class="item-key">预约电桩</span>
        <span class="item-value">{{station.chargerOrdered}}号桩 枪{{station.portOrdered}}<span>
      </div>
      <div class="content-item">
        <span class="item-key">预约时段</span>
        <span class="item-value" v-text="chargingTime"><span>
      </div>
      <div class="content-item">
        <span class="item-key">预约费用</span>
        <span class="item-value">
          <span class="momey" v-text="bookingMomey"></span>元<span>
      </div>
      <button v-if="status == '1'" type="button" class="btn btn-default btn-block">导航</button>
      <template v-if="status == '2'">
        <button type="button" class="btn btn-primary btn-block" @click="pay">支付预约费</button>
        <p class="booking-tips">（请你在规定时间内完成预约费用的支付！）</p>
      </template>
      
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      status: {
        type: String,
        required: true
      },
      createdTime: {
        type: String,
        required: true
      },
      orderNumber: {
        type: String,
        required: true
      },
      station: {
        type: Object,
        required: true
      },
      chargingTime: {
        type: String,
        required: true
      },
      bookingMomey: {
        type: Number,
        required: true
      },
      timeRemaining: Number

    },
    computed: {
      statusClass: function () {
        switch (this.status) {
          case '1':
            return 'status-booking'
          case '2':
            return 'status-paying'
          case '3':
            return 'status-overdue'
        }
      }
    },
    methods: {
      countDown: function () {
        var me = this
        if (me.timeRemaining > 0) {
          setTimeout(function () {
            me.timeRemaining -= 1

            if (me.timeRemaining <= 0) {
              me.status = '3'
            }

            me.countDown()
          }, 1000)
        }
      },
      pay: function () {
        this.status = '1'
        this.timeRemaining = 0
      }
    },
    ready: function () {
      this.countDown()
    }
  }
</script>

<style lang="scss">
  .order-cell {
    padding: 16px 14px;
    background: #fff;
    font-size: 15px;
    font-weight: 200;
    color: rgba(0,0,0,0.9);

    .cell-header {
      padding-bottom: 16px;
      overflow: hidden;
      border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .header-left {
      float: left;
      
      .icon {
        display:inline-block;
        width: 18px;
        height: 18px;
        background-repeat: no-repeat;
        background-size: contain;
        vertical-align: middle;
        margin-right: 7px;
      }

      .order-status, .time-remaining {
        margin-right: 8px;
      }

      &.status-booking {
        .icon {
          background-image: url('~assets/images/me_order_phone.png');
        }
      }

      &.status-paying {
        color: rgb(231, 57, 57);
        .icon {
          background-image: url('~assets/images/me_order_time.png');
        }
      }

      &.status-overdue {
        .icon {
          background-image: url('~assets/images/me_order_overdue.png');
        }
      }
    }

    .header-right {
      float: right;
      color: rgba(0,0,0,0.6);
    }

    .cell-content {
      margin-top: 24px;
      
      .content-item + .content-item {
        margin-top: 20px;
      }

      .content-item {
        overflow: hidden;
      }

      .item-key {
        float: left;
        color: rgba(0,0,0,0.6);
      }

      .item-value {
        float: right;
      }

      .momey {
        display: inline-block;
        margin-right: 5px;
        color: rgb(231, 57, 57);
      }

      .btn {
        margin-top: 24px;
      }

      .booking-tips {
        margin: 8px 0 0 0;
        text-align: center;
        font-size: 12px;
        color: rgba(0,0,0,0.6);
      }
    }
  }
</style>