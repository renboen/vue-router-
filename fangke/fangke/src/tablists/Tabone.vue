<template>
  <div>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <span @click="checker('taboneRouteritems1')">组件1</span>
      <span @click="checker('taboneRouteritems2')">组件2</span>
      <component :is="$route.params.id"></component>

    </ul>
  </div>

</template>

<script>
  import taboneRouteritems1 from '@/tablists/taboneRouteritems1'
  import taboneRouteritems2 from '@/tablists/taboneRouteritems2'


  export default{
    components: {
      taboneRouteritems1,
      taboneRouteritems2
    },
    beforeRouteEnter (to, from, next) {
        console.log(to)
       next(true)
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当钩子执行前，组件实例还没被创建
    },
    methods:{
      checker(path){
       this.$router.push(path)
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




