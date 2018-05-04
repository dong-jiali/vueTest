<template>
  <div class="menu">
    <!--<h1>{{ msg }}</h1>-->
    <h2>Essential Links</h2>
    <nav>
      <ul>
        <li class="test" v-for="menu in navList">
          <router-link :to="menu.path"> {{ menu.name }} </router-link>
        </li>
      </ul>
    </nav>
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
