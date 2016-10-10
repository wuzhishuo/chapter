<template>
  <div class="info-cell">
    <div class="info-left">
     <slot name="info-left"></slot>
    </div>
    <div class="info-right">
      <slot name="info-right"></slot>
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="scss">
  @mixin cell {
    padding: 20px 15px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    font-size: 15px;
    color: rgba(0,0,0,0.9);
    font-weight: 200;
    line-height: 100%;
  }

  %clearfix {
    &:before,
    &:after {
      content: "";
      display: table;
      font: 0/0 a;
    }
    &:after {
      clear: both;
    }
  }

  .info-cell {
    @include cell;
    @extend %clearfix;

    .info-left {
      float: left;
    }

    .info-right {
      float: right;
    }

    .open-time {
      display: inline-block;
      margin-left: 15px;
      color: rgba(0,0,0,0.6);
    }

    .unit-price {
      color: rgba(0,0,0,0.6);
    }

    .price-number {
      font-family: Arial;
      font-size: 20px;
      color: #ef0d0d;
    }

    .port-order {
      color: #1e2f5e;
    }

    .port-available {
      color: #3ebc0f;
    }

    .port-order, .port-available {
      display: inline-block;
      margin-left: 5px;
    }

    .ports-info {
      display: inline-block;
    }

    .ports-info + .ports-info {
      margin-left: 30px;
    }

    /*站点评价*/
    .score-container {
      display: inline-block;
      margin-left: 20px;

      .score,.not-score {
        display: inline-block;
        width: 18px;
        height: 18px;
        margin-right: 5px;
        float: left;
        background-repeat: no-repeat;
        background-size: contain;
        vertical-align: middle;
      }

      .score {
        background-image: url('~assets/images/map_find_score01.png') ;
      }

      .not-score {
        background-image: url('~assets/images/map_find_score02.png');
      } 
    }

    .comment-count{
      color: #ed0d0d;
    }

    @mixin arrow {
      display: block;
      width: 16px;
      height: 16px;
      border-width: 2px 2px 0 0;
      border-style: solid;
      color: rgba(0,0,0,0.5);
    }

    .arrow-bottom {
      @include arrow;
      transform: rotate(135deg) scale(0.5);
    }

    .arrow-right {
      @include arrow;
      transform: rotate(45deg) scale(0.5);
    }
  }
</style>