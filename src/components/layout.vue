<template>
  <div class="container">
    <nav></nav>
    <!--<router-view></router-view>-->
    <router-view :key="key"></router-view>
  </div>
</template>

<script>
  import nav from '@/components/menu'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '导航菜单',
      navList: []
    }
  },
  components: {
    nav
  },
  methods: {
    hello () {
      console.log('dddddddddddddd')
    }
  },
  computed: {
    key () {
      return  this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
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
