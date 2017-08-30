<template>
  <div>
    <!--参考http://blog.csdn.net/tanga842428/article/details/53052970-->
    <!-- 带查询参数，下面的结果为 /register?plan=private -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <router-link  :to="{ path: 'register', query: { plan: dt }}" >wwwwww</router-link>
    <!-- 命名的路由 -->
    <router-link :to="{ name: 'Tabone', params: { id: 'taboneRouteritems2' }}">User</router-link>

  </div>

</template>

<script>
  // window.baseUrl = "https://apigatewayqa.sgmlink.com:13101/service/visitormobile/"
  window.baseUrl = "/service/visitormobile/"
  import Vue from "vue"
  import { Swipe, SwipeItem } from 'mint-ui';

  export default{
      data(){
          return{
              dt:"null"
          }
      },
    mounted(){
      this.getsome();

    },


    methods: {
//          getsome(){
//            this.$http({
//              url:baseUrl + "api/admin/01/login",
//              params: {
//                "account":"apptest01"
//              },
//              method:"post"
//            })
//              .then(function(e){console.log(e)}, function(err){console.log(err)});
//          }


      getsome(){
        let that = this;
        that.$http.post(
          baseUrl + "api/admin/01/login",
          // 请求体重发送数据给服务端
          {
            "account": "apptest01"
          }, {
            'headers': {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            emulateJSON: true
          })
          .then(function (e) {
            // 成功回调
            window.token = e.body.data.token;
            window.id = e.body.data.id;
            window.userName = e.body.data.userName;
            window.deptname = e.body.data.deptname;
            return e
          })
          .then(function (t) {
            console.log(t)
        return that.$http.post(baseUrl + "api/branch/01/viewAll", {
              "token": window.token,
              "uid": window.id
            }, {emulateJSON: true})
              .then(function (e) {
                return e
              })
          }).then(function (y) {
          console.log(y)
          that.$http.post(baseUrl + "api/admin/01/searchChecker", {
            "token": window.token,
            "uid": window.id,
            "pageNumber": 1,
            "pageSize": 999
          }, {emulateJSON: true}).then(function (e) {
            console.log(e)
          })
        })

      }
    }
  }


</script>
<style scoped lang="scss">
  div {
    width: 100%;
    height: calc(100% - 100px);
  }

  ul {
    width: 100%;
    height: calc(100% - 100px);
    background: red;
    position: absolute;
    top: 50px;
    left: 0;
  }
</style>




