<template>
  <div class="swiper">
    <swiper :options='swiperOption'>
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
        <img :src='item.imgUrl'>
        
      </swiper-slide>
      <!-- <swiper-slide>2</swiper-slide>
      <swiper-slide>3</swiper-slide>
      <swiper-slide>4</swiper-slide>
      <swiper-slide>5</swiper-slide>
      <swiper-slide>6</swiper-slide> -->
      
    </swiper>
    <div class='swiper-pagination'></div>
    <!-- <div class='swiper-scrollbar'></div> -->
    
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
  props:{
    swiperList:{
      type:Array
    }
  },
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      // swiperList:[
      //   {
      //     id:1,
      //     imgUrl:'./images/swiper1.jpeg'
      //   },
      //   {
      //     id:2,
      //     imgUrl:'./images/swiper2.jpeg'
      //   },
      //   {
      //     id:3,
      //     imgUrl:'./images/swiper3.jpeg'
      //   }
      // ],
        
      
      swiperOption:{
        loop : true,
        autoplay: {
            delay:2000,
            disableOnInteraction: false
        },
        pagination:{
          el:'.swiper-pagination',
          clickable:true
        }
      }
    }
  },
  // methods: {
  //   btn(){
  //     Indicator.open('加载中...')
  //     setTimeout(() => {
  //       Indicator.close()
  //     }, 1000);
  //   }
  // },
}
</script>

<style scoped>
    .swiper {
        width: 100%;
        height: 4.4rem;
        position: relative;
        /* background-color: green; */
        /* margin-top: 0.5rem; */
    }
    /* .swiper-main {
      width: 100%;
      height: 4.4rem;

    } */
    img{
      width: 100%;
      height: 4.4rem;
    }
    .swiper-pagination {
      width: 100%;
      position: absolute;
      bottom: 0px;
    }
    /deep/ .swiper-pagination-bullet {
      margin: 0 0.1rem !important;
    }
</style>