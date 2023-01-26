<template>
  <div id="app">
  <ShopMainWrapper/>
  </div>
</template>

<script>
import ShopMainWrapper from './components/shop-main-wrapper.vue';



export default {
    name: "App",
    components: { ShopMainWrapper }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
