<template>
  <div class="key-value-cell">
    <div class="key-container" :class="alignMode=='top'?'mode-align-top':'mode-align-middle'">
      <slot name="key"></slot>
    </div>
    <div class="value-container">
      <slot name="value"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      alignMode: String
    }
  }
</script>

<style lang="scss">
  .key-value-cell {
    padding: 20px 15px;
    font-size: 15px;
    font-weight: 200;
    border-bottom: 1px solid rgba(0,0,0,0.1);

    .key-container {
      display: table-cell;
      padding-right: 20px;
      color: rgba(0,0,0,0.9);
      width: 60px;
      text-align: right;
      
      &.mode-align-middle {
        vertical-align: middle;
      }

      &.mode-align-top {
        vertical-align: top;
      }
    }

    .value-container {
      display: table-cell;
      color: rgba(0,0,0,0.6);

      .help-inline {
        font-size: 12px;
        margin: 5px 0 0 0;
      }

      .phone {
        display: inline-block;
        width: 30px;
        height: 30px;
        margin-left: 15px;
        background: url('~assets/images/map_button_phone.png') no-repeat;
        background-size: contain;
        vertical-align: middle;
      }
    }

  }
</style>