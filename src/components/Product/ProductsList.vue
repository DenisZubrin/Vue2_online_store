<template>
  <section class="products">
    <ProductCard
      v-for="product in productsList"
      :key="product.id"
      :title="product.title"
      :price="product.price"
      :image="product.image"
    />
  </section>
</template>

<script>
import ProductCard from '@/components/Product/ProductCard';

export default {
  components: {
    ProductCard,
  },
  props: {
    productsList: {
      type: Array,
      // required: true
    },
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
