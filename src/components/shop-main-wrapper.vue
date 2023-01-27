<template>
  <div class="shop-main-wrapper">
    <RouterView></RouterView>
    <!-- <shopCatalog />
    <shopCart 
      v-if="CART.length"
      :cart_data="CART"
      
     /> -->
  </div>
</template>

<script>
// import shopCatalog from "./shop-catalog.vue";
// import shopCart from "./shop-cart.vue";
import { mapGetters } from "vuex";


export default {
  name: "shop-main-wrapper",
  // components: {
  //   shopCatalog,
  //   shopCart,
  // },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  }
};
</script>

<style scoped lang="scss">
.shop-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
