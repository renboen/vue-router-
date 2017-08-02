<template>
  <div>
    <ul>
      <li @click="changepath($event,'Tabone/taboneRouteritems1')" class="active">tabone</li>
      <li @click="changepath($event,'Tabtwo')">tabtwo</li>
      <li @click="changepath($event,'Tabthree')">tabthree</li>
    </ul>
  </div>

</template>

<script>
  export default({
    data(){
      return {
        isActive: true
      }
    },
    methods: {
      changepath(e,path){
          let that=this
        document.querySelectorAll("li").forEach(function (item, index) {
          item.setAttribute("class", "")
        })
        e.target.setAttribute("class", "active");
          alert(path)
        that.$root.bus.$emit("changepath","/Appin/"+path)

      }
    }

  })


</script>
<style scoped lang="scss">
  div{
    width: 100%;
    height: 50px;
  }
  ul {
    width: 100%;
    height: 50px;
    background: blueviolet;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    & > li {
      flex: 1;
      text-align: center;
      height: 50px;
      line-height: 50px;
    }

  }

  .active {
    background: yellow;
  }
</style>




