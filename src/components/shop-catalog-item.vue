<template>
  <div class="shop-catalog-item">
    <img
      class="shop-catalog-item__img"
      :src="require('../assets/images/' + product_data.image)"
    />
    <p class="shop-catalog-item__name">{{ product_data.name }}</p>
    <p class="shop-catalog-item__price">Price:{{ product_data.price }} Р.</p>
    <button 
    class="shop-catalog-item__add_to_cart_btn btn" 
    @click="addToCart"
    >Add to cart
    </button>
  </div>
</template>
<script>
export default {
  name: "shop-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data);
    }
  },
};
</script>
<style lang="scss">
.shop-catalog-item {
  flex-basis: 25%;
  padding: 8px;
  margin-bottom: 8px;
  border: 2px solid gold;
  border-radius: 10px;
  &__img {
    width: 200px;
    height: 250px;
  }
}
</style>
