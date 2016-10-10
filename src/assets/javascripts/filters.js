import Vue from 'vue'

Vue.filter('showOrderStatusText', function (status) {
  switch (this.status) {
    case '1':
      return '已预约'
    case '2':
      return '待支付预约费用'
  }
})
