<template>
  <div>
    <Mehead :cli="cli" :meheader="head"></Mehead>
    <router-view>
    </router-view>
    <Mfooter></Mfooter>
  </div>

</template>

<script>
  import Mehead from '@/components/Mehead'
  import Mfooter from '@/components/Mfooter'
  import Tabone from '@/tablists/Tabone'
  import Tabtwo from '@/tablists/Tabtwo'
  import Tabthree from '@/tablists/Tabthree'
  import minxin from '@/Minxins/minxins'



  export default({
    data(){
      return {
        whosechose: "Mlist",
        head: "头部"

      }
    },

    mixins: [minxin],
    components: {
      Mehead,
      Mfooter,
      Tabone,
      Tabtwo,
      Tabthree
    },

    methods: {
      cli(d){
        let that = this;
        alert(d)
        that.head = '改变头部被'
      }

    },
    mounted(){
      let that = this;
      that.hello()
      that.$root.bus.$on("changepath", function (path) {
        that.$router.push(path)
      })
    }

  })


</script>
<style>
  div {
    width: 100%;
    height: 100%;
    background: yellow;
  }
</style>




