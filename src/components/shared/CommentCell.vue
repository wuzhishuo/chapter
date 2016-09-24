<template>
  <div class="comment-cell">
    <img class="thumbnail" :src="user.thumbnail" alt="用户头像">
    <div class="comment-container">
      <p class="user-name" v-text="user.name"></p>
      <p class="score-container">
        <span class="score" v-for="n in score"></span>
        <span class="not-score" v-for="n in (5-score)"></span>
        <span class="comment-time" v-text="created"></span>
      </p>
      <p class="content" v-text="content"></p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      user: Object,
      score: Number,
      created: String,
      content: String
    }
  }
</script>

<style lang="scss">
  .comment-cell {
    padding: 30px 15px;
    font-size: 15px;
    color: rgba(0,0,0,0.9);
    font-weight: 200;
    border-bottom: 1px solid rgba(0,0,0,0.1);

    .thumbnail {
      float: left;
      width: 65px;
      height: 65px;
      border-radius: 50%;
    }

    .comment-container {
      margin-left: 85px;

      .user-name,.content {
        margin: 0;
      }

      .score-container {
        margin: 8px 0;
      }

      .comment-time {
        display: inline-block;
        margin-left: 15px;
        color: rgba(0,0,0,0.6);
        font-size: 13px;
      }

      .content {
        color: rgba(0,0,0,0.6);
        font-size: 13px;
        line-height: 1.5;
      }
    }

    .score,.not-score {
        display: inline-block;
        width: 18px;
        height: 18px;
        margin-left: 5px;
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
</style>