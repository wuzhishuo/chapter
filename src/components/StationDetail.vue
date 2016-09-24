<template>
  <div class="page-station-detail">
    <top-header>
      <button type="button" slot="left" class="icon-back" @click="goBack"></button>
      <button type="button" slot="right" class="icon-share"></button>
      <span slot="title" v-text="name"></span>
    </top-header>
    <img class="station-img" :src="thumbnailUrl">
    <div class="info-group">
      <info-cell>
        <div slot="info-left">
          <span class="open-day" v-text="openDay"></span>
          <span class="open-time" v-text="openTime"></span>
        </div>
        <div slot="info-right">
          <span class="unit-price">￥
            <span class="price-number" v-text="unitPrice"></span>/kwh
          </span>
        </div>
      </info-cell>
      <info-cell>
        <span slot="info-left" v-text="address"></span>
        <span slot="info-right" v-text="distance"></span>
      </info-cell>
    </div>
    <div class="info-group">
      <info-cell>
        <div slot="info-left">
          <span class="ports-info">
            可预约充电口
            <span class="port-order">2</span>
          </span>
          <span class="ports-info">
            空闲充电口
            <span class="port-available">1</span>
          </span>
        </div>
        <div slot="info-right">
          <span class="arrow-bottom"></span>
        </div>
      </info-cell>
      <charger-cell v-for="charger in chargers" :name="charger.name" :power-type="charger.powerType" :ports="charger.ports"></charger-cell>
    </div>
    <div class="info-group">
      <info-cell>
        <div slot="info-left">
          站点评价
          <span class="score-container">
            <span class="score" v-for="n in score"></span>
            <span class="not-score" v-for="n in (5-score)"></span>
          </span>
        </div>
      </info-cell>
      <comment-cell :score="lastComment.score" :content="lastComment.content" :created="lastComment.created" :user="lastComment.user"></comment-cell>
      <info-cell>
        <div slot="info-left">
          查看所有<span class="comment-count" v-text="commentCount"></span>评价
        </div>
        <div slot="info-right">
          <span class="arrow-right"></span>
        </div>
      </info-cell>
    </div>
    <div class="info-group">
      <key-value-cell>
        <span slot="key">
          预约费用
        </span>
        <div slot="value">
          <span v-text="bookingCost.toFixed(2)"></span>元/分钟
          <p class="help-inline">(预约时间段内启动返回预约费用)</p>
        </div>
      </key-value-cell>
       <key-value-cell>
        <span slot="key">
          功能区
        </span>
        <div slot="value">
          地铁沿线+交通枢纽
        </div>
      </key-value-cell>
      <key-value-cell>
        <span slot="key">
          便利设施
        </span>
        <div slot="value">
          WiFi、便利店
        </div>
      </key-value-cell>
      <key-value-cell>
        <span slot="key">
          运营商
        </span>
        <div slot="value">
          国家电网
          <button type="button" class="btn phone"></button>
        </div>
      </key-value-cell>
      <key-value-cell align-mode="top">
        <span slot="key">
          站点描述
        </span>
        <div slot="value">
          潭村公交场充电站是珠三角首个大型纯电公交充电站，项目地址位于潭村公交站内，站内将配200个充电桩
        </div>
      </key-value-cell>
    </div>
    <div class="actions">
      <button class="btn btn-default">预约充电</button>
      <button class="btn btn-primary btn-nav">导航</button>
    </div>
  </div>
</template>

<script>
  import TopHeader from 'components/shared/Header'
  import InfoCell from 'components/shared/InfoCell'
  import ChargerCell from 'components/shared/ChargerCell'
  import CommentCell from 'components/shared/CommentCell'
  import KeyValueCell from 'components/shared/KeyValueCell'

  export default {
    components: {
      TopHeader,
      InfoCell,
      ChargerCell,
      CommentCell,
      KeyValueCell
    },
    data () {
      return {
        id: 'c1',
        name: '中森渔人码头店充电站',
        thumbnailUrl: 'https://placeimg.com/500/180/any',
        ACCount: 10,
        DCCount: 5,
        distance: '3.5km',
        score: 4,
        commentCount: 2898,
        address: '广州市天河区广州大道中356号',
        unitPrice: 0.6,
        openTime: '8:00-22:00',
        openDay: '仅限工作日',
        bookingCost: 0.5,
        chargers: [{
          name: '1号桩',
          powerType: 'AC',
          ports: [{
            port: 'A',
            status: '1'
          },
          {
            port: 'B',
            status: '2'
          },
          {
            port: 'C',
            status: '3'
          },
          {
            port: 'D',
            status: '4'
          }
          ]
        },
        {
          name: '2号桩',
          powerType: 'DC',
          ports: [{
            port: 'A',
            status: '1'
          },
          {
            port: 'B',
            status: '3'
          },
          {
            port: 'C',
            status: '4'
          }
          ]
        }
        ],
        lastComment: {
          score: 3,
          content: '真的很不错，站点便捷快速，充电时长算挺快的，大家可以去试试',
          created: '2016-9-23',
          user: {
            name: '梦想蜗牛',
            thumbnail: 'https://placeimg.com/65/65/people'
          }
        }
      }
    },
    methods: {
      goBack: function () {
        this.$router.go('/finding')
      }
    }
  }
</script>

<style lang="scss">
  .page-station-detail {
    background: rgba(0,0,0,0.08);
    overflow-y: scroll;

    .actions {
      margin: 20px 15px;
      font-size: 0;

      .btn {
        font-size: 15px;
        padding: 8px;
        width: 45%;
      }

      .btn-nav {
        float: right;
      }
    }
  }

  .info-group {
    background: #fff;

    & + & {
      margin-top: 10px;
    }
  }

  .station-img {
    height: 180px;
  }
</style>

