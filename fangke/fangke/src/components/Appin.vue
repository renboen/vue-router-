<template>
  <div>
    <Mehead></Mehead>
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




  export default({
    data(){
      return {
        whosechose: "Mlist"
      }
    },
    components: {
      Mehead,
      Mfooter,
      Tabone,
      Tabtwo,
      Tabthree
    },
    mounted(){
        let that=this;
      that.$root.bus.$on("changepath",function (path) {
          that.$router.push(path)
    })
    }

  })


</script>
<style>
 div{
    width: 100%;
    height: 100%;
    background: yellow;
  }
</style>




