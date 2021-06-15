import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from 'views/home/Home'
// import Category from 'views/category/Category'
// import ShopCar from 'views/shopcar/ShopCar'
// import Profile from 'views/profile/Profile'
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const ShopCar = () => import('views/shopcar/ShopCar')
const Profile = () => import('views/profile/Profile.vue')


// 安装插将
Vue.use(VueRouter)

// 创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home
  },{
    path: '/category',
    component: Category
  },{
    path: '/shopcar',
    component: ShopCar
  },{
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 防止重复点击报错
// const VueRouterPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (to) {
//   return VueRouterPush.call(this, to).catch(err => err)
// }

// 导出router
export default router
