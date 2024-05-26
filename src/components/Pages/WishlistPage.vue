<template lang="">
  <div class="wrapper">
    <Header />
    <Breadcrumbs />
    <main class="main">
      <section class="wishlist">
        <ProductCard />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import Breadcrumbs from '../UI/Breadcrumbs';
import ProductCard from '../Product/ProductCard';

export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    ProductCard,
  },
};
</script>

<style lang=""></style>
