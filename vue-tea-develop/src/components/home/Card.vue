<template>
  <div class="card">
    <slot>
        <!-- <span class="title">火爆推荐</span> -->
    </slot>
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* padding: 0.5rem 0; */
    position: relative;
    height: 1.5rem;
    margin-bottom: 0.15rem;
}
.title {
    font-size: 0.5rem;
    font-weight: bold;
    
}
.card::after{
    background-color:darkgray;
    width: 0.2rem;
    height: 0.2rem;
    content: '';
    position: absolute;
    border-radius: 50%;
    top: 0.75rem;
    right: 35%;
}
.card::before{
    background-color:darkgray;
    width: 0.2rem;
    height: 0.2rem;
    content: '';
    position: absolute;
    border-radius: 50%;
    top: 0.75rem;
    left: 35%;
}
</style>