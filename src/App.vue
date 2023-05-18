<template>
  <div class="container">
    <div class="left-part">
      <ISideBar></ISideBar>
    </div>
    <div class="main-part">
      <IMain></IMain>
    </div>
  </div>
</template>
<script>
import ISideBar from './components/SideBar.vue';
import IMain from './components/Main.vue';
export default{
    components: { ISideBar, IMain }
}
</script>
<style>
.container {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
}

.left-part {
  min-width: 300px;
}

.main-part {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}
</style>