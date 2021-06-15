<template>
  <div>
    <h2>首页</h2>
    <nav-bar><h3 slot="center">购物车</h3></nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
export default {
  components: { NavBar },
  name: 'Home',
  data() {
    return {};
  },
  create() {},
  methods: {},
};
</script>
<style scoped>
</style>
