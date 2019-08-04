<template>
  <div class="wrap">
      <div class="imgwrap">
          <img :src="logo" alt="vue" />
      </div>
      <div class="btnwrap">
        <div class="text">欢迎来到V旅行~</div>
        <button class="btn" type="button" @click="add">点击添加行程</button>
      </div>
      
  </div>
</template>

<script>

export default {
    name:"User",
    data () {
        return{
            logo:require('../assets/logo.png'),
        }
    },
    methods:{
        add () {
            this.$router.push('/Add')

        }
    }
}

</script>
<style lang="scss" scoped>
.imgwrap{
    text-align: center;
    width:100%;
    margin-top:30px;
    padding-bottom: 10px;
}
.btnwrap{
    text-align: center;
    width: 100%;
}
.btnwrap .btn{
    width:30%;
    height: 40px;
    background-color: #42b983;
    border-radius: 10px;
    font-size: 18x;
    color: #ffffff;
    margin-top: 10px;
}
.btnwrap .text{
    font-size: 15px;
}


</style>