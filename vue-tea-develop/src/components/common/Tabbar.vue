<template>
  <div class="tabbar">
    <ul>
        <li
            v-for="(item,index) in routerList"
            :key="index"
            @click='mySwitch(item.path)'
        >
            <img :src="$route.path.includes(item.path) ? item.selected : item.active ">
            <span>{{item.title}}</span>
        </li>
        

    </ul>
  </div>
</template>
<script>
export default {
    data() {
        return {
            routerList: [
                {
                    title: '首页',
                    path: '/home',
                    active: '/images/home.png',
                    selected: '/images/home-select.png'
                },
                {
                    title: '分类',
                    path: '/list',
                    active: '/images/list.png',
                    selected: '/images/list-select.png'
                },
                {
                    title: '购物车',
                    path: '/cart',
                    active: '/images/cart.png',
                    selected: '/images/cart-select.png'
                },
                {
                    title: '我的',
                    path: '/my',
                    active: '/images/my.png',
                    selected: '/images/my-select.png'
                },
            ]
        }
    },
    methods: {
        mySwitch(path){
            if(this.$router.path == path) return
            
            this.$router.replace(path)
        }
    },
    
}
</script>
<style scoped>
    img{
        width: 0.7rem;
        height: 0.7rem;
    }
    .tabbar{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1.2rem;
        z-index: 999;
        background-color: white;
    }
    .tabbar ul{
        
        display: flex;
        justify-content: space-around;
    }
    span{
        font-size: 0.3rem;
    }
    .tabbar ul li{
        
        display: flex;
        flex-direction: column;
        align-items: center;
        /* flex: 1; */
    }
</style>
