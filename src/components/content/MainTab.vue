<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:item-icon>
        <img src="../../assets/img/tabbaricon/home.svg" alt="" />
      </template>
      <template #item-icon-active>
        <img src="../../assets/img/tabbaricon/active_home.svg" alt="" />
      </template>
      <template #item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="red">
      <template v-slot:item-icon>
        <img src="../../assets/img/tabbaricon/category.svg" alt="" />
      </template>
      <template #item-icon-active>
        <img src="../../assets/img/tabbaricon/active_category.svg" alt="" />
      </template>
      <template #item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/shopcar" activeColor="red">
      <template v-slot:item-icon>
        <img src="../../assets/img/tabbaricon/shopcar.svg" alt="" />
      </template>
      <template #item-icon-active>
        <img src="../../assets/img/tabbaricon/active_shopcar.svg" alt="" />
      </template>
      <template #item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="red">
      <template v-slot:item-icon>
        <img src="../../assets/img/tabbaricon/mine.svg" alt="" />
      </template>
      <template #item-icon-active>
        <img src="../../assets/img/tabbaricon/active_mine.svg" alt="" />
      </template>
      <template #item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../common/tabbar/TabBar.vue";
import TabBarItem from "../common/tabbar/TabBarItem.vue";
export default {
  name: "MainTab",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>

