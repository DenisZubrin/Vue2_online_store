<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <div class="slider"></div>
      <ProductsList :productsList="productsList" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/UI/Header';
import Footer from '@/components/UI/Footer';
import ProductsList from '@/components/Product/ProductsList';

export default {
  components: {
    Header,
    Footer,
    ProductsList,
  },
  name: 'MainPage',
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
.wrapper {
  margin: 0 auto;
}
.main {
  min-height: 100vh;
}

.slider {
  height: 505px;
  background-image: url('~@/assets/main-slider-bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-color: #000;
}
</style>
