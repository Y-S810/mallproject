<template>
  <div id="app">
    <router-view></router-view>
    <main-tab></main-tab>
  </div>
</template>

<script>
import MainTab from "components/content/MainTab.vue";

export default {
  name: "App",
  components: {
    MainTab,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
