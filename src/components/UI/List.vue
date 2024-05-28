<template>
  <section class="products">
    <ProductCard
      v-for="product in list"
      :key="product.id"
      :product="product"
      :wishlist="wishlist"
      @sendIDToList="sendIDToPage"
    />
  </section>
</template>

<script>
import ProductCard from '@/components/UI/ProductCard';

export default {
  components: {
    ProductCard,
  },
  props: {
    wishlist: {
      type: Array
    },
    list: {
      type: Array
    }
  },
  methods: {
    sendIDToPage(id) {
      console.log(id);
      this.$emit('sendIDToPage', id);
    }
  },
  
};
</script>

<style lang="css" scoped>
.products {
  max-width: 1400px;
  display: flex;
  margin: 112px auto;
  flex-wrap: wrap;
  gap: 40px;
}
</style>
