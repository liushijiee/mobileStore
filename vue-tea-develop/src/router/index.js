import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
      path: "/",
      redirect: '/home'
  },
  {
    path: '/home',
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cart.vue"),
  },
  {
    path: "/list",
    name: "List",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/List.vue"),
  },
  {
    path: "/my",
    name: "My",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/My.vue"),
  },
  {
    path:'/search',
    name:'Search',
    redirect:'/search/',
    children:[
      {
        path: "/",
        name: "index",
        component: () =>
          import("../views/search/Search-index.vue"),
      },
      {
        path: "table",
        name: "Table",
        component: () =>
          import("../views/search/Search-list.vue"),
      }
    ],
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Search.vue")
  },
  {
    path: "/detail",
    name: "Detail",
    component: () =>
      import("../views/Detail.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/login/Login.vue"),
  },
  {
    path: "/userLogin",
    name: "UserLogin",
    component: () =>
      import("../views/login/UserLogin.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import("../views/login/Register.vue"),
  },
  {
    path: "/recovery",
    name: "Recovery",
  	children:[
  		{
  			path: "/",
  			name: "index",
  			component: () =>
  			  import("../views/recovery/RecoveryIndex.vue"),
  		},
  		{
  			path: "btn",
  			name: "btn",
  			component: () =>
  			  import("../views/recovery/RecoveryBtn.vue"),
  		}
  	],
    component: () =>
      import("../views/Search.vue"),
  },
  {
    path: "/path",
    name: "Path",
    children:[
      {
        path: "/",
        name: "pathIndex",
        component: () =>
          import("../views/path/Path-Index.vue"),
      },
      {
        path: "path-list",
        name: "path-list",
        component: () =>
          import("../views/path/Path-List.vue"),
      },
    ],
    component: () =>
      import("../views/path/Path.vue"),
  },
  {
    path: "/order",
    name: "Order",
    component: () =>
      import("../views/Order.vue"),
  },
  {
    path: "/payment",
    name: "Payment",
    component: () =>
      import("../views/Payment.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to,from,next)=>{
    
  let nextRoute = ['Payment','Cart','Path','Order','pathIndex','path-list'];
  //是否是登录中
  let userInfo = JSON.parse( localStorage.getItem('teaUserInfo')  );
  
  //当前进入的页面，是不是需要验证哪些页面
  if(  nextRoute.indexOf( to.name ) >= 0  ){
      if( !userInfo ){
          router.push('/login');
      }else{
        next();
      }
      
  }else{
    next();
  }
  
  
})


export default router;
