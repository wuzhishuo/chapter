<template>
  <div class="summary-container">
    <img :src="thumbnailUrl" alt="" class="station-thumbnail">
    <div class="info-container">
      <h2 class="station-name" v-text="name"></h2>
      <p class="address" v-text="address"></p>
      <div class="charger-info">
        <div class="charger-ac">
          <span class="ac-name">交流可用</span>
          <span class="available-count" v-text="ACCount"></span>
        </div>
        <div class="charger-dc">
          <span class="dc-name">直流可用</span>
          <span class="available-count" v-text="DCCount"></span>
        </div>
      </div>
    </div>
    <span class="distance" v-text="distance"></span>
    <a href="javascript:void(0)" class="map-nav"></a>
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      address: String,
      thumbnailUrl: String,
      ACCount: Number,
      DCCount: Number,
      distance: String
    }
  }
</script>

<style lang="scss">
  @mixin text-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
  }

  .summary-container {
    margin: 6% 4%;
    position: relative;
    height: 70px;
  }

  .info-container {
    margin-left: 88px;
    margin-right: 40px;
  }

  .station-thumbnail {
    position: absolute;
    border-radius: 5px;
    width: 70px;
    height: 100%;
  }

  .station-name {
    margin: 0;
    font-size: 18px;
    color: rgba(0,0,0,0.9);
    @include text-ellipsis;
  }

  .address {
    margin: 10px 0 0px 0;
    @include text-ellipsis;
  }

  .address,.charger-info {
    font-size: 13px;
    color: rgba(0,0,0,0.6);
  }

  .charger-info {
    position: absolute;
    bottom: 0;
  }

 .charger-dc {
   margin-left: 15px;
  }

  .ac-name,.dc-name {
   &:before {
     content: '';
     display: inline-block;
     width: 18px;
     height: 18px;
     background-repeat: no-repeat;
     background-size: contain;
     vertical-align: text-bottom;
     margin-right: 5px;
     background-position: center center;
   }
  }

  .ac-name {
    &:before {
     background-image: url('~assets/images/map_icon_jiaoliu.png');      
    }
  }

  .dc-name {
    &:before {
     background-image: url('~assets/images/map_icon_zhiliu.png');      
    }
  }

  @media screen and (max-width: 320px) {
    .ac-name,.dc-name {
      &:before {
        display: none;
      }
    }
  }

  .available-count {
    display: inline-block;
    padding: 1px 0;
    border: 1px solid #ef0d0d;
    border-radius: 4px;
    font-size: 13px;
    color: #ef0d0d;
    width: 20px;
    text-align: center;
  }

.distance {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 13px;
}

.map-nav {
    position: absolute;
    width: 24px;
    height: 24px;
    bottom: 0;
    right: 0;
    background: url('~assets/images/map_button_navigation.png') no-repeat;
    background-size: contain;
}
</style>