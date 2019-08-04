<template>
  <div>
      <div class="wrap">
        <div class="titleList">
            <div class="title">标 题 :</div>
            <input class="textbox" type="text" placeholder="请输入标题" v-model="title">
        </div>
        <div class="titleList">
            <div class="title">内 容 :</div>
            <input class="textbox" type="textarea" placeholder="请输入内容" v-model="content">
        </div>
      </div>
      <ul class="btnWrap">
          <li><button class="btn" type="button" @click="add">确认</button></li>
          <li><button class="btn" type="button" @click="quite">取消</button></li>
      </ul>    
  </div>
</template>

<script>
import store from '@/store.js'
export default {
    name: 'Add',
    store,
    data () {
        return{
            title:"",
            content:""
        }
    },
    methods:{
        add() {
        store.commit('addItem', {
            title: this.title,
            content: this.content 
        }),
        alert("添加成功")
        this.title = '',
        this.content = ''
        this.$router.push('/Home/List')
        },
        quite () {
            this.$router.push('/Home/User')
        }
    }
    
}

</script>
<style lang="scss" scoped>
li{
    list-style: none;
}
.wrap{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    padding-top: 30px;
}
.titleList{
    float: right;
    padding:0 4em 0;
    margin-top: 20px;
}
.titleList .title{
    display: inline-block;
    margin-right: 9px;
    font-size: 16px;
}
.titleList .textbox{
    width: 180px;
    height: 30px;
}
.btnWrap{
    width: 100%;
    height: 60px;
    line-height: 60px;
    position: fixed;
    left: 0;
    bottom:10%;
    display: flex;
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