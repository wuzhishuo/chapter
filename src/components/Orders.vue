<template>
  <div class="page-orders page-wrapper">
    <top-header>
      <button type="button" slot="left" class="icon-back" @click="goBack"></button>
      <span slot="title">我的订单</span>
    </top-header>
    <div class="order-list">
      <order-list-cell v-for="order in orders" :order-number="order.id" :status="order.status" :created-time="order.createdTime" :charging-time="order.chargingTime" :booking-momey="order.bookingMomey" :time-remaining="order.timeRemaining" :station="order.station"></order-list-cell>
    </div>
  </div>
</template>

<script>
  import TopHeader from 'components/shared/Header'
  import OrderListCell from 'components/shared/OrderListCell'

  export default {
    components: {
      TopHeader,
      OrderListCell
    },
    data: function () {
      return {
        orders: [
          {
            id: '2016101008112',
            status: '1',
            createdTime: '2016/10/10 10:26',
            chargingTime: '2016/10/10 12:00 - 14:00',
            bookingMomey: 12.5,
            station: {
              name: '中森渔人码头充电站',
              chargerOrdered: '2',
              portOrdered: 'A'
            }
          },
          {
            id: '2016101008113',
            status: '2',
            createdTime: '2016/10/09 10:26',
            chargingTime: '2016/10/10 12:00 - 14:00',
            bookingMomey: 22.5,
            timeRemaining: 1 * 60,
            station: {
              name: '华普广场地下停车场一区',
              chargerOrdered: '1',
              portOrdered: 'A'
            }
          }
        ]
      }
    },
    methods: {
      goBack: function () {
        this.$router.go('/me')
      }
    }
  }
</script>

<style lang="scss">
  .page-orders {
    background: rgba(0, 0, 0, 0.08);

    .order-list {
      flex: 1;
      padding: 4.83%;
      overflow-y: scroll;

      .order-cell + .order-cell {
        margin-top: 20px;
      }
    }
  }
</style>