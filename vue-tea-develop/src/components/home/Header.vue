<template>
  <header>
    <div class="title">My Tea</div>
    <div class="input">
        <input type="text" style="width:100%;height:0.5rem;border-radius:0.3rem;text-indent:1em">
    </div>
    <div class='kefu'>
        <img src="@/assets/images/客服.png" alt="">
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
/* div {
    width: 50rem
} */
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
.input{
    flex: 4

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