<template>
  <div class="container">
    <div class="left">
      <ISideBar></ISideBar>
    </div>
    <div class="right"></div>
  </div>
</template>
<script>
import ISideBar from './components/SideBar.vue';
export default{
    components: { ISideBar }
}
</script>
<style>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.left {
  width: 30%;
  height: 100%;
}

.right {
  width: 80%;
  height: 100%;
}
</style>