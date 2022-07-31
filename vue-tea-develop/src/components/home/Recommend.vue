<template>
  <div class="recommend">
    <!-- <h6>火爆推荐</h6> -->
    <Card>
        <span class='title'>火爆推荐</span>
    </Card>
    <ul>
        <li v-for="(item,index) in recommendList" :key="index">
            <div class="left">
                <img :src="item.imgUrl" alt="">
            </div>
            <div class="right">
                <div>
                    <span style="font-weight:bold">{{item.name}}</span><br>
                    <span>{{item.content}}</span>
                </div>
                <div class='price'>
                    <span style="font-weight:bold">￥</span>
                    <span style="font-weight:bold;color:red">{{item.price}}</span>
                </div>
                
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
    props:{
        recommendList:{
            type:Array
        }
    },
    components:{
        Card
    },
    data() {
        return {
            // recommendList:[
            //     {
            //         id:1,
            //         name:'龙井1号铁罐250g',
            //         content:'鲜爽甘醇 口粮首选',
            //         price:'68',
            //         imgUrl:'./images/recommend.jpeg'
            //     },
            //     {
            //         id:2,
            //         name:'龙井1号铁罐250g',
            //         content:'鲜爽甘醇 口粮首选',
            //         price:'68',
            //         imgUrl:'./images/recommend.jpeg'
            //     }
            // ]
        }
    },
}
</script>

<style scoped>
img {
    width: 100% !important;
    height: 4rem;
}
li {
    position: relative;
}
.right {
    position: absolute;
    top: 0.7rem;
    right: 1.5rem;
    width: 2.7rem;
    height: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 0.3rem;
}
/* .price {
    position: absolute;
    bottom: 0;
    right: 0.1rem;
} */
</style>