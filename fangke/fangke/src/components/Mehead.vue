<template>
  <div>
    <header @click="cli(dat)">{{meheader}}</header>
  </div>

</template>

<script>
  export default{
      data(){
          return{
              dat:"传度"
          }
      },

    props: {
      meheader: {
        type: String,
        default: "头部"
      },
      cli: {
        type: Function,
      }
    }

  }


</script>
<style scoped lang="scss">
  div {
    width: 100%;
    height: 50px;
  }

  header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: blueviolet;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>




