<template>
  <div>
   <h1>我是Tabone的三级路由的第二个</h1>
  </div>

</template>

<script>
  export default({
    mounted(){
      console.log(this.$route.params)

    },
  })


</script>
<style scoped lang="scss">
  div{
    width: 100%;
    height:calc(100% - 100px);
  }
  ul{
    width: 100%;
    height:calc(100% - 100px);
    background: red;
    position: absolute;
    top: 50px;
    left:0;
  }
</style>




