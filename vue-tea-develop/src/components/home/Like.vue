<template>
  <div class="like">
    <!-- <h6>火爆推荐</h6> -->
    <Card>
        <span class='title'>猜你喜欢</span>
    </Card>
    <ul>
        <li v-for="(item,index) in likeList" :key="index" @click='goDetail(item.id)'>
            <!-- <img :src="item.imgUrl" alt=""> -->
            <img v-lazy="item.imgUrl" alt="">
            <div class="bottom">
                <div class='title' style="font-size:0.3rem">
                    {{item.name}}
                </div>
                <div class="price">
                    <span>￥</span>
                    <span style="color:red">{{item.price}}</span>
                </div>
            </div>
           
            
        </li>
    </ul>
  </div>
</template>

<script>
import Card from './Card.vue'
import { Lazyload } from 'mint-ui';
export default {
    props:{
        likeList:{
            type:Array
        }
    },
    components:{
        Card
    },
    methods:{
		goDetail( id ){
			this.$router.push({
				// name: 'Detail',
                // params: {
                //     id
                // }
                path: '/detail',
                query:{
                    id
                }
			})
		}
	},
    data() {
        return {
            // likeList:[
            //     {
            //         id:1,
            //         name:'建盏茶具套装 红色芝麻毫 12件套',
            //         price:'299',
            //         imgUrl:'./images/like.jpeg'
            //     },
            //     {
            //         id:2,
            //         name:'建盏茶具套装 红色芝麻毫 12件套',
            //         price:'299',
            //         imgUrl:'./images/like.jpeg'
            //     },
            //     {
            //         id:3,
            //         name:'建盏茶具套装 红色芝麻毫 12件套',
            //         price:'299',
            //         imgUrl:'./images/like.jpeg'
            //     },
            // ]
        }
    },
}
</script>

<style scoped>
/* .title {
    flex: 1;
}
.price {
    flex: 1;
} */
.bottom {
    margin: 0.1rem 0;
    height: 1.1rem;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    align-items: center;
    
}
.price {
    /* height: 0.6rem !important; */
    font-size: 0.35rem;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
}
li {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    /* margin: 0.1rem; */
    /* padding-bottom: calc(50% - 0.2rem); */
    /* position: relative;
    overflow: hidden; */
}
div {
    width: 100%;
}
ul {
    display: flex;
    flex-wrap: wrap;
}
img{
    width: 4.69rem;
    height: 4.69rem;
}
</style>