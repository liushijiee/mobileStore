<template>
  <div class="search">
    
        <router-view></router-view>
    
    
    
  </div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'
import Header from '@/components/search/Header.vue'
import Like from "@/components/home/Like.vue";
// import BetterScroll from "better-scroll";

export default {
    components:{
        Tabbar,
        Header,
        Like
        
    },
    // mounted() {
    //     this.$nextTick(() => {
    //     new BetterScroll(".search", {
    //       movable: true,
    //       zoom: true,
    //     });
    //   });
    // },
}
</script>

<style scoped>
.search {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
</style>