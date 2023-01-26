<template>
  <div class="shop-main-wrapper">
    <shopCatalog />
    <shopCart />
  </div>
</template>

<script>
import shopCatalog from "./shop-catalog.vue";
import shopCart from "./shop-cart.vue";
export default {
  name: "shop-main-wrapper",
  components: {
    shopCatalog,
    shopCart,
  },
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.shop-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
