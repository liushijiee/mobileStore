<template>
  <div class="search-index">
    <Header />
    <section>
        <div class="search-history" v-if='searchArr.length'>
            <h2>
                
                <span><i class="iconfont icon-shijian"></i>历史搜索</span>
                <div @click="deleteStorage" style="font-size:0.32rem;font-weight: normal;border:1px solid black;padding:0.1rem">
                    清空搜索记录
                </div>
            </h2>
            <ul>
                <li 
						v-for='(item,index) in searchArr'
						:key='index'
                        @click='goSearchList(item)'
					>{{item}}</li>
            </ul>
        </div>
        <div v-else class="message">暂无搜索记录...</div>
        <div>
            <h1>推荐商品</h1>
            <Like />
        </div>
    </section>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'
import Header from '@/components/search/Header.vue'
import Like from "@/components/home/Like.vue";
import { MessageBox } from 'mint-ui';

export default {
    data() {
        return {
            searchArr:[]
        }
    },
    components:{
        Tabbar,
        Header,
        Like
        
    },
    created(){
		this.searchArr = JSON.parse( localStorage.getItem('searchList')) || [];
	},
	methods:{
		deleteStorage(){
			MessageBox({
			  title: '提示',
			  message: '确定执行此操作?',
			  showCancelButton: true
			}).then(res=>{
				if( res =='confirm' ){
					//删除本地存储
					localStorage.removeItem('searchList');
					//清除数据
					this.searchArr = [];
				}
			})
		},
        //点击历史搜索，进入搜索结果页面
		goSearchList( item ){
			this.$router.push({
				name:'Table',
				query:{
					key:item
				}
			})
		}
	}
}
</script>

<style scoped>
.message {
    margin: 1rem 0;
    font-size: 0.5rem;
    height: 1rem;
    
}
.search-index {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
section{
    
    flex:1;
    overflow: hidden;
    /* border: 1px solid blue; */
    /* background-color: aqua; */

}
.search-history {
    /* position: relative; */
}
.search-history h2{
    width: 93vw;
    font-weight: bold;
    font-size: 0.48rem;
    /* margin-top: 0.2rem; */
    /* position: absolute;
    left: 0.2rem; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    left: 0.3rem;
    top: 0.5rem;
}
.search-history h2 i{
    color: red;
   
    padding-right: 0.08rem;
    font-size: 0.48rem;
}
.search-history ul {
    margin: 0.8rem 0.4rem 0.8rem 0.4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    /* padding:  0 0.5333rem; */
}
.search-history ul li {
    border: 1px solid rgb(117, 113, 113);
    font-size: 0.3rem;
    padding: 0.04rem 0.13rem;
    margin:  0.2rem 0.1rem;
}
</style>