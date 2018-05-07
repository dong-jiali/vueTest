<template>
<div class="nav">
  <div class="container">
    <div class="fl">
      <span>首页</span>
    </div>
    <div class="fr">
      <span>四川旅游</span>
      <span>西藏旅游</span>
      <span>长江三峡</span>
      <span>省外旅游</span>
      <span>酒店住宿</span>
      <span>旅游新闻</span>
      <span>四川特色</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '导航菜单',
      navList: []
    }
  },
  methods: {
    hello () {
      console.log('dddddddddddddd')
    }
  },
  mounted () {
    console.log(this.$store)
    console.log(this.$router)
    console.log(this.$route)
    this.navList = this.$router.options.routes
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  max-width:1920px;
}
</style>
