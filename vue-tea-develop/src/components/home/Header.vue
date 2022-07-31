<template>
  <header>
    <div class="title">My Tea</div>
    <div class="search" @click="goSearch">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" class='input' style="width:100%;height:0.5rem;border-radius:0.3rem;text-indent:1em">
    </div>
    <div class='kefu'>
        <img src="@/assets/images/客服.png" alt="">
    </div>
  </header>
</template>

<script>
export default {

methods: {
    goSearch(){
        this.$router.push('/search')
    }
},
}
</script>

<style scoped>
/* div {
    width: 50rem
} */
img{
        width: 0.7rem;
        height: 0.7rem;
    }
header{
    position: fixed;
    top: 0;
    left: 0;
    background-color: #cf615b;
    display: flex;
    justify-content:space-between;
    align-items: center;
    height: 1.2rem;
    width: 100%;
    z-index: 9999;
}
.title {
    font-size:0.6rem;
    flex:2
}
.search {
    flex: 4;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
}
.input{
    
    border-radius: 0.3rem;
    text-indent: 0.8rem;
    height: 0.6rem;
    width: 100%;

}

.icon-sousuo {
    position: absolute;
    left: 0.2rem;
}

.input{
    display: flex;
    justify-content:center;
    align-items: center;
    }
.kefu{

    flex:1;
    display: flex;
    justify-content:center;
    align-items: center;
    
}

</style>