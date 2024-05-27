<template>
  <article class="card" @click="$router.push('/product')">
    <span class="card__action-btn"></span>
    <img
      class="card__photo"
      src="@/assets/products-images/product_1.png"
      alt="product-photo"
    />
    <h3 class="card__name">Сумка через плечо</h3>
    <span class="card__price">2300 руб.</span>
  </article>
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
  position: relative;
  padding: 16px 0;
  box-sizing: border-box;
}

.card:hover {
  cursor: pointer;
  box-shadow: 0 5px 25px rgb(30 31 33 / 24%);
  transition: 0.5s;
}

.card__name {
  font-size: 18px;
  font-weight: 400;
  color: #0A1E32;
}

.card__price {
  font-size: 24px;
  font-weight: 800;
  color: #464C58;
}

.card__action-btn {
  position: absolute;
  content: '';
  display: block;
  background-image: url('~@/assets/heart-icon_emptied.png');
  background-repeat: no-repeat;
  background-position: center;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
}
</style>
