<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <div class="slider"></div>
      <section class="products">
        <ProductCard />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import ProductCard from '../Product/ProductCard';

export default {
  components: {
    Header,
    Footer,
    ProductCard,
  },
  name: 'MainPage',
  data() {
    return {};
  },
};
</script>

<style scoped></style>
