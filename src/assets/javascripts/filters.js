import Vue from 'vue'

Vue.filter('showOrderStatusText', function (status) {
  switch (this.status) {
    case '1':
      return '已预约'
    case '2':
      return '待支付预约费用'
    case '3':
      return '已取消'
  }
})

Vue.filter('convertSeconds', function (seconds) {
  var minutes = parseInt(seconds / 60)

  if (minutes < 10) {
    minutes = '0' + minutes
  }

  seconds = seconds % 60

  if (seconds < 10) {
    seconds = '0' + seconds
  }

  return minutes + ':' + seconds + 's'
})

