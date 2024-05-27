<template>
  <section class="products">
    <ProductCard
      v-for="product in productsList"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :price="product.price"
      :image="product.image"
      :description="product.description"
    />
  </section>
</template>

<script>
import ProductCard from '@/components/Product/ProductCard';

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      // productsList: [
      //   {
      //     id: 1,
      //     title: 'Сумка',
      //     price: 2300,
      //     image: '~@/assets/products-images/product_1.png',
      //   },
      //   {
      //     id: 2,
      //     title: 'Сумка',
      //     price: 2400,
      //     image: '@/assets/products-images/product_1.png',
      //   },
      //   {
      //     id: 3,
      //     title: 'Сумка',
      //     price: 2300,
      //     image: '../../assets/products-images/product_1.png',
      //   },
      //   {
      //     id: 4,
      //     title: 'Сумка',
      //     price: 2300,
      //     image: '../../assets/products-images/product_1.png',
      //   },
      //   {
      //     id: 5,
      //     title: 'Сумка',
      //     price: 2300,
      //     image: '../../assets/products-images/product_1.png',
      //   },
      //   {
      //     id: 6,
      //     title: 'Сумка',
      //     price: 2300,
      //     image: '../../assets/products-images/product_1.png',
      //   },
      //   {
      //     id: 7,
      //     title: 'Сумка',
      //     price: 2300,
      //     image: '../../assets/products-images/product_1.png',
      //   },
      //   {
      //     id: 8,
      //     title: 'Сумка',
      //     price: 2300,
      //     image: '../../assets/products-images/product_1.png',
      //   },
      //   {
      //     id: 9,
      //     title: 'Сумка',
      //     price: 2300,
      //     image: '../../assets/products-images/product_1.png',
      //   },
      // ],
      productsList: [],
    };
  },
  methods: {
    async fetchGoods() {
      const data = await fetch('https://fakestoreapi.com/products')
        .then((result) => result.text())
        .then((result) => JSON.parse(result));
      this.productsList = data;
    },
  },
  mounted() {
    this.fetchGoods();
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
