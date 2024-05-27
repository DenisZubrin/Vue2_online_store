<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <div class="slider"></div>
      <ProductsList />
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
