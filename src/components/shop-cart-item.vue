<template>
  <div class="shop-cart-item">
    <img
      class="shop-cart-item__img"
      :src="require('../assets/images/' + cart_item_data.image)"
      alt=""
    />
    <div class="shop-cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }} Р.</p>
    </div>
    <div class="shop-cart-item__items">
    <p>Кол:</p>{{ cart_item_data.quantity }}</div>
    <button class="shop-cart-item__btn" @click="deletetFromCart">Delete</button>
  </div>
</template>
<script>
export default {
  name: "shop-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    deletetFromCart() {
        this.$emit('deletetFromCart')
    }
  },
  mounted() {
    
  }
};
</script>
<style lang="scss">
.shop-cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  padding: 8px;
  margin: 8px;
  border: 1px solid black;
  &__img {
    max-width: 50px;
  }
  &__btn {
    width: 100px;
    height: 40px;
    background-color: rgb(0, 0, 0);
    border-radius: 15px;
    color: white;
  }
}
</style>
