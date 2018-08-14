<template>
  <div class="responsive">
      <div class="bar">
        <ul>
          <li>menu1</li>
          <li>menu2</li>
          <li>menu3</li>
          <li>menu4</li>
          <li>menu5</li>
        </ul>
      </div>
      <div class="main">
        <p>
            <picture>
            <source srcset="/static/image/min.png" media="(min-width:400px)">
            <source srcset="/static/image/mid.jpg" media="(min-width:800px)">
            <source srcset="/static/image/max.png" media="(min-width:1200px)">
            </picture>
        </p>
        <ul>
          <li>
              main
            </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'responsive',
  data () {
    return {
      msg: 'Responsive',
      navList: []
    }
  },
  methods: {
    hello () {
      console.log('responsive')
    }
  },
  mounted () {
    this.hello()
    // this.navList = this.$router.options.routes
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  ul li{
    list-style: none;
    float: left;
  }
  .responsive{
    position: relative;
    overflow: hidden;
  }
</style>
