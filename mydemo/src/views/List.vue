<template>
  <div>
      <ul>
        <div v-if="isShow">
            <li v-for="(item,index) in pageLists" 
            :key="index"
            >{{item.title}}--{{item.content}}
            <button type="button" @click="detail()">查看详情</button>
            <button type="button" @click="deleted(index)">删除</button>
            </li>
        </div>
          
      </ul>
  </div>
</template>

<script>
import store from '@/store.js'
export default {
        name:"List",
        store,
        data () {
            return{
                isShow:true,
                
            }
        },
        methods:{
            detail () {
                // for(var i=0;i<this.pageLists.length;i++)
                //     if(i != index){
                //         this.pageLists[i].this.isShow = false;
                //     }
                console.log(this.isShow)
            },
            deleted (index) {
                this.pageLists.splice(index,1)
            }
        },
        computed:{
            pageLists () {
                return store.state.Lists
            }
        }
}

</script>
<style>
</style>