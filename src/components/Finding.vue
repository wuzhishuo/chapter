<template>
  <div class="page-finding page-wrapper">
    <div class="finding-header">
      <Nav-Header>
        <button type="button" slot="left" class="icon-back"></button>
        <button type="button" slot="right" class="icon-map"></button>
        <button type="button" slot="title" v-text="location" class="location"></button>
      </Nav-Header>
      <div class="filters">
        <div class="filter-item">
          <a class="filter-action" href="javascript:void(0)">距离</a>
        </div>
        <div class="filter-item">
          <a class="filter-action" href="javascript:void(0)">筛选</a>
        </div>
        <div class="filter-item">
          <a class="filter-action" href="javascript:void(0)">排序</a>
        </div>
      </div>
    </div>
    <ul class="station-list">
      <li class="station-item"  v-for="station in stations">
        <Station-Cell :name="station.name" :address="station.address" :thumbnail-url="station.thumbnailUrl" :ACCount="station.ACCount" :DCCount="station.DCCount" :distance="station.distance"></Station-Cell>
      </li>
    </ul>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import NavHeader from 'components/shared/Header'
  import Tabbar from 'components/shared/Tabbar'
  import StationCell from 'components/shared/StationCell'

  export default {
    components: {
      NavHeader,
      Tabbar,
      StationCell
    },
    data () {
      return {
        location: '广州',
        stations: [{
          name: '中森渔人码头店充电站',
          address: '广州市天河区花城大道460号',
          thumbnailUrl: 'https://placeimg.com/80/80/any',
          ACCount: 10,
          DCCount: 5,
          distance: '3.5km'
        },
        {
          name: '维尼国际酒店',
          address: '广州市天河区林和西路169号',
          thumbnailUrl: 'https://placeimg.com/80/80/animals',
          ACCount: 8,
          DCCount: 3,
          distance: '1.8km'
        },
        {
          name: '中国市长大厦',
          address: '广州市天河区天河北路189号',
          thumbnailUrl: 'https://placeimg.com/80/80/tech',
          ACCount: 1,
          DCCount: 5,
          distance: '0.2km'
        },
        {
          name: '正佳广场地下停车场一区',
          address: '广州市天河区花城大道460号',
          thumbnailUrl: 'https://placeimg.com/80/80/people',
          ACCount: 10,
          DCCount: 5,
          distance: '5km'
        },
        {
          name: '中森渔人码头店充电站',
          address: '广州市天河区花城大道460号',
          thumbnailUrl: 'https://placeimg.com/80/80/nature',
          ACCount: 10,
          DCCount: 5,
          distance: '3km'
        }]
      }
    }
  }
</script>

<style lang="scss">
  .location {
    color: inherit;
    padding: 0;
    background-color: transparent;
    border: transparent;

    &:after {
      content: '';
      display: inline-block;
      margin-bottom: -2px;
      margin-left: 5px;
      border: 5px solid transparent;
      border-top-color: #fff;
    }
  }

  .filters {
    display: flex;
    background: #1e2f5e;
    /*It should remove when find out the reason*/
    margin-top: -1px;
  }

  .filter-item {
    flex: 1;
    text-align: center;
    margin: 3px 0;

    &:not(:first-child) {
      border-left: 1px solid #5c606b;
    }
  }

  .filter-action {
    display: inline-block;
    padding: 5px;
    color: #fff;
    font-size: 15px;
    font-weight: 200;

    &:after {
      content: '';
      display: inline-block;
      height: 6px;
      width: 6px;
      border-width: 2px 2px 0 0;
      border-color: #fff;
      border-style: solid;
      transform: rotate(135deg);
      margin-left: 5px;
      margin-bottom: 2px;
    }
  }

  .station-list {
    margin: 0;
    padding: 0;
    flex: 1;
    overflow-y: scroll;
  }

  .station-item {
    list-style: none;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    overflow: hidden;
  }
</style>