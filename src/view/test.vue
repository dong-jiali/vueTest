<template>
<div class="nav">
  <div class="login">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="name">
    <el-input v-model="ruleForm2.name"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="数值" prop="userid">
    <el-input v-model.number="ruleForm2.userid"></el-input>
  </el-form-item>
    <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm2.age"></el-input>
  </el-form-item>
    <el-form-item label="状态" prop="status">
      <el-switch
  v-model="ruleForm2.status"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
    <!-- <el-input v-model="ruleForm2.status"></el-input> -->
  </el-form-item>
   <el-form-item label="描述">
    <el-input type="textarea" v-model="ruleForm2.description"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
  <div class="toolbar"><!--工具条-->
    <div class="tool-container">

      </div><!--工具条居中-->
  </div>
  <div class="header"><!--页头-->
    <div class="header_mid"></div><!--页头居中-->
  </div>
  <div class="mainnav"><!--栏目-->
    <div class="mainnav_center">
          <el-button type="primary" @click="getDataList()">数据列表</el-button>
      </div><!--栏目居中-->
          <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="_id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="userid"
        label="姓名"
        width="180">
      </el-table-column>
          <el-table-column
      label="操作"
      width="100">
      <template slot-scope="scope">
        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
                  <el-button type="primary" @click="openDetail(scope.row)">查看详情</el-button>
        <!-- <el-button type="text" size="small">编辑</el-button> -->
      </template>
    </el-table-column>
    </el-table>
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
import axios from 'axios'

/**
 * 
 * const userSchema = new Schema({
	name: String,
	age: Number,
	userid: String,
	pass: String,
	status: Boolean,
	description: String
})
 * */
export default {
  name: 'testAxios',
  data () {
     const checkUserid = (rule, value, callback) => {
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
      tableData: [],
      ruleForm2: {
        name: '',
        age: 0,
          pass: '123456',
          checkPass: '123456',
          userid: '',
          status: false,
          description: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          userid: [
            { validator: checkUserid, trigger: 'blur' }
          ]
        }
    }
  },
  methods: {
    hello () {
      console.log('dddddddddddddd')
    },
    openDetail(data) {
      // const url = 'api/user/' + data._id
      const id = data._id;
      const schema = `{user (_id: "${id}" ){name, age, userid}}`;
      const url = 'api/graphql?query=' + schema
      // const url = 'api/userGraphql?query=' + schema
      axios.get(url)
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
    },
    getDataList() {
      const url = 'api/user'
      axios.get(url)
      .then(result => {
        console.log(result)
        this.tableData = result.data
      })
      .catch(err => {
        console.log(err)
      })
    },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            const url = "/api/testForm"
            console.log('ruleForm2=======', this.ruleForm2)
            axios.post(url, this.ruleForm2)
              .then(result => {
                console.log(result)
              })
              .catch(err => {
                console.log(err)
              })
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
