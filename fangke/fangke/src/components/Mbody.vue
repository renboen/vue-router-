<template>
  <div>

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
      changepath(e){
        document.querySelectorAll("li").forEach(function (item, index) {
          item.setAttribute("class", "")
        })
        e.target.setAttribute("class", "active")

      }
    }

  })


</script>
<style scoped lang="scss">
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




