<template>
  <div class="header">
    <div class="search-return" @click="goBack">
        <i class="iconfont icon-fanhui"></i>
    </div>
    <div class="search-main">
        <i class="iconfont icon-sousuo"></i>
        <form action="" onsubmit="return false" class='form' @keyup.enter="goSearchList">
            <input type="search" v-model='searchVal' class="input" placeholder="请输入搜索内容">
        </form>
        
    </div>
    <div class="search-btn" @click='goSearchList'>搜索</div>
    
  </div>
</template>

<script>
export default {
    // props:{
    //     searchVal:{
    //         type:String
    //     }
    // },
    data() {
        return {
            searchVal:this.$route.query.key || '',
            searchArr:[]
        }
    },
methods:{
    goBack(){
        this.$router.push('/home')
    },
    goSearchList(){
        //如果搜索的关键字是没有的，那就直接return
			if( !this.searchVal ) return;
			//判断之前有没有搜索的本地存储
			if( !localStorage.getItem('searchList')  ){
				//没有
				localStorage.setItem('searchList','[]');
			}else{
				//之前有
				this.searchArr = JSON.parse(  localStorage.getItem('searchList')  );
			}
			//增加数据
			this.searchArr.unshift( this.searchVal );
			//ES6去重
			let newArr = new Set(this.searchArr);
			//给本地存储赋值
			localStorage.setItem('searchList',JSON.stringify(Array.from(newArr)));
				
			//跳转页面
            if(this.searchVal == this.$route.query.key) return
                this.$router.push({
				path:'/search/table',
                query:{
                    key:this.searchVal
                }
			})
            
			
			
		}
}
}
</script>

<style scoped>
.form {
    width: 100%;
}
.header {
    width: 100%;
    height: 1.173rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #e0473f ;
}
.search-return {
    display: flex;
    justify-content: center;
    align-items: center;
}
.search-main {
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
}

.search-btn{
    font-size: 0.4rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
}
.input {
    border-radius: 0.3rem;
    text-indent: 0.8rem;
    height: 0.6rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.icon-sousuo {
    position: absolute;
    left: 0.2rem;
}

</style>