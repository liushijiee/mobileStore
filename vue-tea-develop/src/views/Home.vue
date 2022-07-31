<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Header />

    <div class="lyTab">
      <ly-tabs
        v-model="value"
        :lineWidth="lineWidth"
        :additionalX="additionalX"
        activeColor="red"
        @change="changeTab"
      >
        <ly-tab-item
          v-for="(item, index) in topBar"
          :name="index"
          :key="index"
          :title="item.label"
        />
        <!-- <ly-tab-item name="2" title="大红袍" />
        <ly-tab-item name="3" title="绿茶" />
        <ly-tab-item name="4" title="铁观音" />
        <ly-tab-item name="5" title="普洱" />
        <ly-tab-item name="6" title="茶具" />
        <ly-tab-item name="7" title="花茶" /> -->
        <!-- <ly-tab-item name="8" title="绿茶" /> -->
      </ly-tabs>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div v-for="(item, index) in newData" :key="index">
          <Swiper v-if="item.type == 'swiperList'" :swiperList="item.data" />
          <Icons
            class="icon"
            v-if="item.type == 'iconList'"
            :iconList="item.data"
          />
          <Recommend
            v-if="item.type == 'recommendList'"
            :recommendList="item.data"
          />
          <Ad v-if="item.type == 'adList'" :adList="item.data" />
          <Like v-if="item.type == 'likeList'" :likeList="item.data" />
        </div>
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
import Like from "@/components/home/Like.vue";
import Ad from "@/components/home/Ad.vue";
import BetterScroll from "better-scroll";
import axios from "axios";
import { Indicator } from 'mint-ui';
import http from '../utils/api/request.js'

export default {
  data() {
    return {
      value: "1",
      lineWidth: 10,
      additionalX: 50,
      topBar: [],
      newData: [],
    };
  },
  name: "Home",
  components: {
    Tabbar,
    Header,
    Swiper,
    Icons,
    Recommend,
    Like,
    Ad,
  },
  mounted() {
    // new BetterScroll(".wrapper", {
    //   movable: true,
    //   zoom: true,
    // });
  },
  methods: {
    changeTab(index) {
      this.addData(index);
    },
    async getData() {

      // Indicator.open('加载中...');

      let res = await http.$axios({
        url: "/api/index_list/0/data/1",
      });
      console.log(res);
      this.topBar = res.topBar;
      this.newData = res.mainData;
      // Indicator.close();
      this.$nextTick(() => {
        new BetterScroll(".wrapper", {
          movable: true,
          zoom: true,
          click: true
        });
      });

      
    },
    async addData(index) {
      let res = await http.$axios({
        url: "/api/index_list/" + index + "/data/1",
      });
      if (res.constructor != Array) {
        this.newData = res.mainData;
      } else {
        console.log(res);
        this.newData = res;
      }
      this.$nextTick(() => {
        new BetterScroll(".wrapper", {
          movable: true,
          zoom: true,
          click: true
        });
      });
    },
  },
  created() {
    // axios({
    //   url:'/api/index_list/0/data/1'
    // }).then(res=>{
    //   console.log(res);
    // })
    this.getData();
  },
};
</script>
<style>
.wrapper {
  height: calc(100vh - 3.6rem);
  overflow: hidden;
  margin-bottom: 1.2rem;
  margin-top: 2.2rem;
}
.home {
  /* background-color: rgb(225, 227, 229); */
}
.ly-tabs__tab-list {
  width: 100%;
  height: 1rem !important;
}
.ly-tabs .ly-tab-item {
  font-size: 0.2rem !important;
}
.lyTab {
  width: 100%;
  position: fixed;
  top: 1.2rem;
  z-index: 999;
}
.content {
  width: 100%;
  /* margin-bottom: 1.2rem;
  margin-top: 2.2rem; */
}
.icon {
  /* margin-top: 0.1rem */
  padding: 0.2rem 0;
}
</style>
