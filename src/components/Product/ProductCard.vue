<template>
  <a href="#" class="card__wrapper-link">
    <article class="card">
      <img class="card__photo" src="../../assets/products-images/product_1.png" alt="product-photo">
      <h4 class="card__name">Сумка через плечо</h4>
      <span class="card__price">2300 руб.</span>
    </article>
  </a>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
  }
  .card__wrapper-link {
    text-decoration: none;
    color: inherit;
  }
  
</style>
