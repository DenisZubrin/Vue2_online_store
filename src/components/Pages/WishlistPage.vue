<template lang="">
  <div class="wrapper">
    <Header />
    <Breadcrumbs />
    <main class="main">
      <section class="wishlist">
        <h1 class="wishlist__heading">Избранное</h1>
        <ProductCard />
        <span class="wishlist__empty-status">Список избранного пуст</span>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/UI/Header';
import Footer from '@/components/UI/Footer';
import Breadcrumbs from '@/components/UI/Breadcrumbs';
import ProductCard from '@/components/Product/ProductCard';

export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    ProductCard,
  },
};
</script>

<style lang="css" scoped>
.main {
  min-height: 100vh;
}

.wishlist {
  margin: 0 auto;
  max-width: 1400px;
}

.wishlist__heading {
  margin: 0 0 32px;
  font-size: 48px;
  color: #0A1E32;
  font-weight: 700;
}

.wishlist__empty-status {
  display: none;
  margin: 132px auto 0;
  text-align: center;
  font-size: 40px;
  color: #464C58;
  font-weight: 400;
}
</style>
