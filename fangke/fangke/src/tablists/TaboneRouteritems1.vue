<template>
  <div>
   <h1>{{tex}}</h1>
    <p @click="send">点我进行子组件向父组件发送消息</p>
  </div>

</template>

<script>
  export default{
      data(){
          return{
              xt:""
          }
      },
    props:{
      tex:{
          type:String
      }
    },

    methods:{
      send(){
          this.$emit('giveFather','通信成功')
      }
    }

  }


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




