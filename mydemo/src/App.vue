<template>
  <div id="app">
    <div class="nav">
        <router-link to="/"></router-link>
    </div>
    <router-view/>
    <!-- <ul>
      <li v-for="(item,index) in  list" 
      :key="index"
      @click="Choose(index)"
      :class="{AddColor:current == index &&current !== ''}"
      >{{item}}
      </li>
    </ul> 
    <ul>
      <button @click="AddNumbers" >Add</button>
      <li v-for="(newitem,index) in newlist" 
      :key="index"
      >{{newitem}}
      <button @click="DeleteNumbers(index)">x</button>
      </li>
    </ul> -->
  </div>
</template>


<script>
// export default {
//   // name:"App",
//   // data(){
//   //   return{
//   //     list:[1,2,3,4,5,6,7,8,9],
//   //     newlist:[],
//   //     current:''
      
//   //   }
//   },
//   methods:{
//     AddNumbers () {
//       if(this.current == '')
//       {return}
//       this.newlist.push(this.list[this.current])
//       // this.current == ''
//     },
//     Choose (index) {
//       this.current = index
      
//     },
//     DeleteNumbers (index) {
//       this.newlist.splice(this.newlist[this.index],1)
//     }
//   }
// }
</script>


<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
</style>
