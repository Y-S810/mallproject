<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  create() {},
  methods: {},
};
</script>
<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
  }
  .left,.right {
    width: 60px;
    background-color: rgb(9, 190, 24);
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
  .center{
    width: 100%;
    background-color: rgb(223, 17, 17);
    text-align: center;
  }
</style>
