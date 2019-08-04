<template>
  <div>
    <ul class="footer">
      <li class="icons"><router-link :to="{name:'List'}">我的日志</router-link></li>
      <li class="icons"><router-link :to="{name:'User'}">个人中心</router-link></li>
    </ul>
    <router-view />
  </div>
  
</template>

<script>
export default {
    name:"Home",
}

</script>
<style lang="scss" scoped>
li{
    list-style: none;
}
.footer{
    width: 100%;
    position:fixed;
    display: flex;
    height: 50px;
    line-height: 50px;
    left: 0;
    bottom: 0;
    flex-flow: row nowrap;
    justify-content: space-around;
    
}

.icons{
    font-size: 16px;
    flex:1;
    text-align: center;
    border-top: 1px solid #42b983
    
}
a{
        color: #42b983;
        display: block; 
        text-decoration: none;      
}
a.active{
    color: #ffffff;
    background: #42b983;
}

</style>