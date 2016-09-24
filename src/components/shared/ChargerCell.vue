<template>
  <div class="charger-cell">
    <div class="charger-info-container">
      <p class="name" v-text="name"></p>
      <p class="power-type" v-text="powerType=='AC'?'(交流桩)':'(直流桩)'"></p>
    </div>
    <div class="ports-status-container">
      <div class="port-item" v-for="port in ports">
        <div class="port-status" :class="getStatusStyle(port.status)"></div>
        <div class="port-name">枪<span v-text="port.port"></span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      powerType: String,
      ports: Array
    },
    methods: {
      getStatusStyle: function (status) {
        switch (status) {
          case '1':
            return 'status-order'
          case '2':
            return 'status-charging'
          case '3':
            return 'status-free'
          case '4':
            return 'status-fault'
        }
      }
    }
  }
</script>

<style lang="scss">
  .charger-cell {
    padding: 6px 15px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    font-size: 15px;
    color: rgba(0,0,0,0.9);
    font-weight: 200;

    .ports-status-container {
      display: table-cell;

      .port-name {
        font-size: 12px;
        color: rgba(0,0,0,0.6);
        text-align: center;
        margin-top: 2px;
      }
    }

    .charger-info-container {
      display: table-cell;
      padding-right: 40px;
      vertical-align: middle;

      p {
        margin: 0;
      }

      .power-type {
        font-size: 12px;
        color: rgba(0,0,0,0.6);
      }
    }

    .port-status {
      width: 34px;
      height: 34px;
      background-repeat: no-repeat;
      background-size: contain;
      
    }

    .port-item {
      float: left;
    }

    .port-item + .port-item {
      margin-left: 20px;
    }


    .status-order {
      background-image: url('~assets/images/map_find_icon_order.png');
    }

    .status-charging {
      background-image: url('~assets/images/map_find_icon_charging.png');
    }

    .status-free {
      background-image: url('~assets/images/map_find_icon_free.png');
    }

    .status-fault {
      background-image: url('~assets/images/map_find_icon_fault.png');
    }
  }
</style>