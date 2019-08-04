<template>
    <div>
        <div class="logoWrap">
            <div><img :src="logo" alt="vue"></div>
            <h2> V 旅 行</h2>
        </div>
        <div class="wrap">
            <div class="user">
                <div class="title">用户名：</div>
                <input class="text" type="text" placeholder="请输入用户名" v-model="name" >
                <div><img :src="smlogo" alt="logo"/></div>
            </div>
            <div class="user">
                <div class="title bottom"><p>密</p><p>码 :</p></div>
                <input  class="text" type="password" placeholder="请输入密码" v-model="password"> 
            </div>
            <div class="user password">
                <input class="checkbox" type="checkbox"><span>记住密码</span> 
                <div class="fogetPassword"><a href="#" >忘记密码？</a></div>
            </div>
            
        </div>
        <ul class="btnWrap">
            <li><button class="btn" type="button" @click="login" >登   录</button></li>
            <li><button class="btn" type="button" @click="reg" >注   册</button></li>  
        </ul>
    </div>
  
</template>

<script>
export default {
    name:"Login",
    data () {
        return {
            name:'',
            password:'',
            logo:require('../assets/logo.png'),
            smlogo:require('../assets/smlogo.jpg')   
        }
    },
    methods:{
        login () {
            if(this.name === "" || this.password === "")
            {
                alert('请输入用户名及密码！')
            }
            else if(localStorage.getItem("password") !== this.password)
            {
                alert('密码不正确！')
            }
            else if(localStorage.getItem("name") === this.name && localStorage.getItem("password") === this.password)
            {alert('登录成功！')
            this.$router.push('/Home/List')
            }
            else{
                return;
            }     
        },
        reg () {
            this.$router.push('/Info')
        }
    }
}

</script>
<style lang="scss" scoped>
.logoWrap{
    width: 100%;
    height: 20%;
    text-align: center;
}
.logoWrap img{
    width:20%;
    height: 25%;
    display: inline-block;
    margin-top: 35px;
}
h2{
    display: inline-block;
    color: #42b983;
    text-shadow: 2px 2px 5px #000;
}
.wrap{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    padding-top:20px; 
}
.user{
    float: right;
    padding:0 4em 0;
    margin-top: 20px;
    left: -20px;
    position: relative;
}
.user img{
    width: 25px;
    height: 25px;
    position: absolute;
    top:10px;
    right: 70px;
}
.user .title{
    display: inline-block;
    }

.user .text{
    width: 180px;
    height: 30px;
    padding-left: 5px;
}
.user p{
    display: inline-block;
}

.bottom{
    margin-right: 9px;
}
.password{
    float: left;
    left: 80px;
    top: -15px;
    font-size: 13px;
}
.fogetPassword{
    display: inline-block;
    margin-left: 30px;
}
.password span{
    margin-left: 5px;
    padding-top: -3px;
}

.btnWrap{
    width: 100%;
    height: 60px;
    line-height: 60px;
    position: fixed;
    left: 0;
    bottom:5%;
    display: flex;
}

li{
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