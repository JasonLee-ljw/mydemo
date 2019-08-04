<!--<template>-->
<!-- // //   <div>
// //     <div class="worp">
// //       <div class="title"> 欢迎来到学生信息录入系统 </div>
// //       <form>
// //       <label>姓名 : </label>
// //       <input type="text" placeholder="请输入用户名" v-model="newUsers.name"><br><br>
// //       <label>年龄 : </label>
// //       <input type="text" placeholder="0" v-model="newUsers.age"><br><br>
// //       <label>性别 : </label>
// //       <select name="sex" v-model="newUsers.sex">
// //         <option value="女">女</option>
// //         <option value="男">男</option>
// //       </select><br><br>
// //       <label>手机号 : </label>
// //       <input type="text" placeholder="请输入手机号" v-model="newUsers.number"><br><br> 
// //       </form>
// //      <button class="btn" @click="createdUser" >创建新用户</button>
// //     </div>
// //     <div>
// //         <table class="table">
// //           <body>
// //             <tr>
// //               <th>姓名</th>
// //               <th>年龄</th>
// //               <th>性别</th>
// //               <th>手机号</th>
// //               <th>删除</th>
// //             </tr>
// //             <tr v-for="(p,index) in Users" :key="index">
// //               <td>{{p.name}}</td>
// //               <td>{{p.age}}</td>
// //               <td>{{p.sex}}</td>
// //               <td>{{p.number}}</td>
// //               <td><button @click="deleteUser(index)">删除</button></td>
// //             </tr>
// //           </body>
// //         </table>
// //     </div>
    
// //   </div>
// // </template>

// // <script> -->
<!-- // // import { constants } from 'crypto';
// export default {
//     name:'StudentsList',
//     data(){
//       return{
//         Users:[
//           {
//             name:'张三',age:20,sex:"男",number:13031034503
//           },
//           {
//             name:'李四',age:22,sex:"男",number:17492928922
//           },
//           {
//             name:'小包',age:18,sex:"女",number:19892992737
//           }
//         ],
//         newUsers:[
//           {
//             name:"",
//             age:'',
//             sex:'女',
//             number:''
//           }
//         ]
//       }
//     },
//     methods:{
//       createdUser () {
//         if(this.newUsers.name == "" || this.newUsers.age == '' || this.newUsers.number == '')
//         { alert("姓名、年龄、手机号不能为空！")
//         return}
//         this.Users.push(this.newUsers)
//         console.log(this.Users)
//         this.newUsers = {
//           name:"",
//           age:'',
//           sex:'女',
//           number:''
//         }
//       },
//       deleteUser (index) {
//         this.Users.splice(index,1)
//       }
//     }
// }

// </script>
// <style scoped>
// .worp{
//   border: 1px solid darkorange;
//   padding:30px 0 10px 10px;
//   margin-top: 15px
// }
// .worp .title{
//   font-family: 'Microsolt YaHei';
//   font-size: 15px;
//   float: left;
//   margin-top: -40px;
//   background-color: #ffffff;
// }
// .btn{
//   background-color: darkorange;
//   width: 90px;
//   height:40px;
//   text-align: center;
//   font-size: 13px;
//   color: #ffffff;
// }

// .table{
//   border: 1px solid darkorange;
//   margin-top: 15px;
//   padding:-10px;
// }
// .table th{
//   background-color: darkorange;
//   color: #ffffff;
//   font-size: 15px;
// }
// </style> -->