<template>
  <div class="icon">
    <ul>
        <li v-for="(item,index) in iconList" :key="index">
            <img :src="item.imgUrl" alt="">
            <span>{{item.title}}</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            iconList:[
                {
                    imgUrl:'./images/icons1.png',
                    title:'自饮茶'
                },
                {
                    imgUrl:'./images/icons2.png',
                    title:'茶具'
                },
                {
                    imgUrl:'./images/icons3.png',
                    title:'茶礼盒'
                },
                {
                    imgUrl:'./images/icons4.png',
                    title:'领福利'
                },
                {
                    imgUrl:'./images/icons5.png',
                    title:'官方验证'
                }
            ]
        }
    },
}
</script>

<style scoped>
.icon {
    background-color: white;
}
ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
span {
    font-size: 0.3rem;
    font-weight: bold;
}
</style>