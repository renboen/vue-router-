<template>
  <div>
    <h1 @click="changeCom('tabtwoRouteritems1')">tab1</h1>
    <h1 @click="changeCom('tabtwoRouteritems2')">tab2</h1>
    <div class="g">
      <compontent :is="currentCom"></compontent>

    </div>


  </div>

</template>

<script>
  import tabtwoRouteritems1 from '@/tablists/tabtwoRouteritems1'
  import tabtwoRouteritems2 from '@/tablists/tabtwoRouteritems2'
  export default{
    data(){
      return {
        currentCom: "tabtwoRouteritems1"
      }
    },

    components: {
      tabtwoRouteritems1,
      tabtwoRouteritems2
    },
    beforeRouteEnter (to, from, next) {
      console.log(to)
      next(true)
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当钩子执行前，组件实例还没被创建
    },
    methods: {
      changeCom(current){
        this.currentCom = current
      }
    }
  }


</script>
<style scoped lang="scss">
  div {
    width: 100%;
    height: calc(100% - 100px);
    box-sizing: border-box;
  }
sapn{
  color:white
}
  .g{
    height: calc(100% - 100px);
  }

</style>




