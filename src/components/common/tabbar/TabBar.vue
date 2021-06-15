<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return{
      message: '是我导航栏'
    }

  }
}
</script>

<style>
  #tab-bar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    background-color: #f3f3f3;
    box-shadow: 0 -2px 2px rgba(100, 100, 100, 0.2);
  }
</style>
