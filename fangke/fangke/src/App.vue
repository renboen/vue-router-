<template>
  <div id="app">
    <router-view>
    </router-view>
  </div>
</template>
<script>
  import Appin from '@/components/Appin';
  export default {
    name: 'app',
    components:{
      Appin
    }
  }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  html,body{
    height:100%;
    width:100%;
  }
  input {
    -webkit-user-select: auto;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
  }
</style>
