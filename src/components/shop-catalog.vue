<template>
  <div class="shop-catalog">
    <h1>Catalog</h1>
    <div class="shop-catalog__list">
      <shopCatalogItem
        v-for="product in PRODUCTS"
        :key="product.id"
        :product_data="product"
        @sendId="showChildId"
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
        'PRODUCTS'
    ]),
  },
  methods: {
    ...mapActions([
        'GET_PRODUCTS_FROM_API'
    ]),
    showChildId(data) {
      console.log("id", data);
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
}
</style>
