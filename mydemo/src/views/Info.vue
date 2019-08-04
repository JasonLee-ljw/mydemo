<template>
  <div>
      <div class="wrap">
        <div class="user">
            <div class="title">用户名：</div>
            <input class="text" type="text" placeholder="请输入用户名" v-model="userName">
        </div>
        <div class="user">
            <div class="title center">密 码 : </div>
            <input  class="text" type="password" placeholder="请输入密码" v-model="password"> 
        </div>
        <div class="user">
            <div class="title">确认密码：</div>
            <input class="text" type="password" placeholder="请输入密码" v-model="repeat">
        </div>
      </div> 
      <ul class="btnWrap">
        <li><button class="btn" type="button" @click="comfirm">确认</button></li>
        <li><button class="btn" type="button" @click="quite">取消</button></li>
      </ul>
  </div>
      
</template>

<script>
export default {
    name:'Info',
    data () {
        return{
            userName:"",
            password:"",
            repeat:""
        }
    },
    methods: {
        comfirm () {
            if(this.password === this.repeat && this.userName != "" && this.password != "" && this.repeat != "")
            {alert("注册成功！")
            localStorage.setItem('name',this.userName)
            localStorage.setItem('password',this.password)
            this.$router.push('/')
            }
            else{
                alert("密码不一致，请重新输入！")
            }
        },
        quite () {
            this.$router.push('/')
        }
    }
}

</script>
<style  lang="scss" scoped>
.wrap{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    padding-top:30px; 
}
.user{
    float: right;
    padding:0 4em 0;
    margin-top: 20px;
}
.user .title{
    display: inline-block;
}
.user .text{
    width: 180px;
    height: 30px;
    padding-left: 5px;
}
.center{
    margin-right: 9px;
}
.btnWrap{
    width: 100%;
    height: 60px;
    line-height: 60px;
    position: fixed;
    left: 0;
    bottom: 5%;
    display: flex;
}

.btnWrap li{
    list-style: none;  
}

.btnWrap .btn{
    width: 200px;
    height: 40px;
    background-color: #42b983;
    border: none;
    border-right: 1px solid #ffffff;
    font-size: 15px;
    color: #ffffff
}
</style>