<template>
  <div class="menu">
    <!--<h1>{{ msg }}</h1>-->
    <!-- <h2>Essential MENUS</h2> -->
    <nav>
      <ul>
        <li class="test" :key=index v-for="(menu, index) in navList">
          <router-link :key="menu.path" :to="menu.path"> {{ menu.name }} </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'menu',
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
    console.log('menu')
    this.navList = this.$router.options.routes
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu{
    position: relative;
    overflow: hidden;
    width: 100%;
    height:30px;
    background: #eee;
  }
  .menu nav{
    width: 900px;
    text-align: left;
    margin:0 auto;
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
  text-decoration: none;
  color: #42b983;
}
a:hover{
  color:red;
}
</style>
