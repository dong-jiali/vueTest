<template>
<div class="nav">
  <div class="login">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm2.age"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
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
     const checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      msg: '导航菜单',
      navList: [],
      ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
    }
  },
  methods: {
    hello () {
      console.log('dddddddddddddd')
    },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
}
  .toolbar {
    background-color: antiquewhite;
    width: 100%;
    height: 90px;
    /* border: 2px solid red; */
  }
.tool-container{
  width:1200px;
  height:90px;
  margin:0px auto;
  /* border: 2px solid blue; */
}
  .header{
    background-color: antiquewhite;
    width:100%;
    height:200px;
    /* border:2px solid red; */
  }
  .header_mid{
    width:1200px;
    height:200px;
    margin:0px auto;
    /* border: 2px solid blue; */
  }
  .mainnav{
    background-color: antiquewhite;
    width:100%;
    height:80px;
    /* border:2px solid red; */
  }
  .mainnav_center{
    width:1200px;
    height:80px;
    margin:0px auto;
    /* border: 2px solid blue; */
  }
  .banner{
    background-color: antiquewhite;
    width:100%;
    height:500px;
    /* border:2px solid red; */
  }
  .banner_content{
    width:1200px;
    height:500px;
    margin:0px auto;
    /* border: 2px solid blue; */
  }
  .content_main{
    background-color: antiquewhite;
    width:100%;
    height:294px;
    /* border:2px solid red; */
  }
  /*---*/
  .box{
    width:1200px;
    height:294px;
    margin:0px auto;
    /* border: 2px solid blue; */
  }
  /***/
  .big_banner{
    float:left;
    width:230px;
    height:294px;
    /* border:2px solid blue; */
  }
  .preload_box{
    float:right;
    width:960px;
    height:294px;
    /* border:2px solid #000000; */
  }

</style>
