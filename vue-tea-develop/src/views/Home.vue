<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Header />

    <div class="lyTab">
      <ly-tabs
        v-model="value"
        lineWidth="10"
        additionalX="50"
        activeColor="red"
      >
        <ly-tab-item name="1" title="推荐" />
        <ly-tab-item name="2" title="大红袍" />
        <ly-tab-item name="3" title="绿茶" />
        <ly-tab-item name="4" title="铁观音" />
        <ly-tab-item name="5" title="普洱" />
        <ly-tab-item name="6" title="茶具" />
        <ly-tab-item name="7" title="花茶" />
        <!-- <ly-tab-item name="8" title="绿茶" /> -->
      </ly-tabs>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <Swiper />
        <Icons class="icon" />
        <Recommend />
      </div>
    </div>
    <Tabbar />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Tabbar from "../components/common/Tabbar.vue";
import Header from "@/components/home/Header.vue";
import Swiper from "@/components/home/Swiper.vue";
import Icons from "@/components/home/Icons.vue";
import Recommend from "@/components/home/Recommend.vue";
import BetterScroll from 'better-scroll'
export default {
  data() {
    return {
      value: "1",
    };
  },
  name: "Home",
  components: {
    Tabbar,
    Header,
    Swiper,
    Icons,
    Recommend,
  },
  mounted() {
      new BetterScroll('.wrapper', {
        movable: true,
        zoom: true
      })
  },
};
</script>
<style>
.wrapper {
  height: calc(100%-3.4rem);
  overflow: hidden;
  /* margin-bottom: 1.2rem;
  margin-top: 2.2rem; */

}
.home {
  /* background-color: rgb(225, 227, 229); */
}
.ly-tabs__tab-list {
  
  width: 100%;
  height: 1.0rem !important;
}
.ly-tabs .ly-tab-item{
  font-size: 0.2rem;
}
.lyTab {
  width: 100%;
  position: fixed;
  top: 1.2rem;
  z-index: 999;
}
.content {
  width: 100%;
  margin-bottom: 1.2rem;
  margin-top: 2.2rem;
}
.icon {
  /* margin-top: 0.1rem */
  padding: 0.2rem 0;
}
</style>
