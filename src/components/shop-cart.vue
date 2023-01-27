<template>
  <div class="shop-cart">
    <RouterLink :to="{name: 'catalog'}">
    <div class="shop-catalog__link_to_cart">Back to Catalog</div>
  </RouterLink>
    <h1>Cart</h1>
    <shopCartItem
      v-for="(item, index) in cart_data"
      :key="item.id"
      :cart_item_data="item"
      @deletetFromCart="deletetFromCart(index)"
    />
  </div>
</template>
<script>
import shopCartItem from "./shop-cart-item.vue";
import { mapActions } from "vuex";

export default {
  name: "shop-cart",
  components: {
    shopCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),

    deletetFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>

<style lang="scss"></style>
