<template>
  <div class="container">
    <menus class='test123'></menus>
    <!-- // 这是目前用的比较多的方式 -->
<keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import menus from '@/components/menu'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '导航菜单',
      navList: []
    }
  },
  components: {
    menus
  },
  methods: {
    hello () {
      console.log('dddddddddddddd')
    }
  },
  // computed: {
  //   key () {
  //     return  this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
  //   }
  // },
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
  .menu{
    position: relative;
    overflow: hidden;
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
