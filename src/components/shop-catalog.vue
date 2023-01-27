<template>
  <div class="shop-catalog">
  <RouterLink :to="{name: 'cart', params: {cart_data:CART}}">
    <div class="shop-catalog__link_to_cart">Cart: {{ CART.length }}</div>
  </RouterLink>
    <h1>Catalog</h1>
    <div class="shop-catalog__list">
      <shopCatalogItem
        v-for="product in PRODUCTS"
        :key="product.id"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>
<script>
import shopCatalogItem from "./shop-catalog-item.vue";
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "shop-catalog",
  components: {
    shopCatalogItem,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
        'PRODUCTS',
        'CART'
    ]),
  },
  methods: {
    ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    .then((response) => {
        if (response.data) {
            console.log("Data arrived")
        }
    })
  }
};
</script>
<style lang="scss">
.shop-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link_to_cart {
    position: absolute;
    top:10px;
    right: 10px;
    padding: 16px;
    border: 1px solid gray;
  }
}
</style>
