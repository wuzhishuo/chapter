<template>
  <div class="page-wrapper page-me">
    <Top-Header :title="userName">
      <button type="button" slot="left" class="icon-back"></button>
    </Top-Header>
  </div>
</template>

<script>
  import TopHeader from 'components/shared/Header'

  export default {
    data () {
      return {
        userName: '充电币明细'
      }
    },
    components: {
      TopHeader
    }
  }
</script>