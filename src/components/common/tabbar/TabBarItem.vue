<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'rgb(8, 113, 233)',
    }
  },
  data() {
    return {
      // isActive: false,
      scolor: 'red'
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive? {color: this.activeColor}: {}
    }
  },
  methods: {
    itemclick() {
      if(!this.isActive) {
        this.$router.replace(this.path);
      }

    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width: 30px;
  height: 30px;
}
.active {
  color: rgb(8, 113, 233);
}
</style>
