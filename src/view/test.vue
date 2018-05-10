<template>
<div class="nav">
  <div class="toolbar"><!--工具条-->
    <div class="tool-container"></div><!--工具条居中-->
  </div>
  <div class="header"><!--页头-->
    <div class="header_mid"></div><!--页头居中-->
  </div>
  <div class="mainnav"><!--栏目-->
    <div class="mainnav_center"></div><!--栏目居中-->
  </div>
  <div class="banner"><!--海报-->
    <div class="banner_content"></div><!--海报内容-->
  </div>
  <div class="content_main">
    <div class="box">
      <div class="big_banner"></div>
      <div class="preload_box"></div>
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
  *{
    padding:0px;
    margin:0px;
  }
.nav{
  background-color: aliceblue;
  width:100%;
  height:1500px;
  margin:20px;
}
  .toolbar {
    background-color: antiquewhite;
    width: 100%;
    height: 90px;
    border: 2px solid red;
  }
.tool-container{
  width:1200px;
  height:90px;
  margin:0px auto;
  border: 2px solid blue;
}
  .header{
    background-color: antiquewhite;
    width:100%;
    height:200px;
    border:2px solid red;
  }
  .header_mid{
    width:1200px;
    height:200px;
    margin:0px auto;
    border: 2px solid blue;
  }
  .mainnav{
    background-color: antiquewhite;
    width:100%;
    height:80px;
    border:2px solid red;
  }
  .mainnav_center{
    width:1200px;
    height:80px;
    margin:0px auto;
    border: 2px solid blue;
  }
  .banner{
    background-color: antiquewhite;
    width:100%;
    height:500px;
    border:2px solid red;
  }
  .banner_content{
    width:1200px;
    height:500px;
    margin:0px auto;
    border: 2px solid blue;
  }
  .content_main{
    background-color: antiquewhite;
    width:100%;
    height:294px;
    border:2px solid red;
  }
  /*---*/
  .box{
    width:1200px;
    height:294px;
    margin:0px auto;
    border: 2px solid blue;
  }
  /***/
  .big_banner{
    float:left;
    width:230px;
    height:294px;
    border:2px solid blue;
  }
  .preload_box{
    float:right;
    width:960px;
    height:294px;
    border:2px solid #000000;
  }
</style>
