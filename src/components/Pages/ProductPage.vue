<template lang="">
  <div class="wrapper">
    <Header />
    <Breadcrumbs />
    <main class="main">
      <section class="product"></section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import Breadcrumbs from '../UI/Breadcrumbs';

export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
  },
};
</script>

<style lang=""></style>
