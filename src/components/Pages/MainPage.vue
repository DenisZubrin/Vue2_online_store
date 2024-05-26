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

<style lang="css" scoped>
.wrapper {
  margin: 0 auto;
}
.main {
  min-height: 100vh;
}

.slider {
  height: 505px;
  background-image: url("../../assets/main-slider-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-color: #000;
}

.products {
  max-width: 1400px;
  display: flex;
  margin: 112px auto;
  gap: 40px;
}
  
</style>
