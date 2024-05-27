<template>
  <article class="card" @click="$router.push('/product')">
    <span class="card__action-btn"></span>
    <img class="card__photo" :src="image" alt="product-photo" />
    <h3 class="card__name">{{ title }}</h3>
    <span class="card__price">{{
      (price * 100).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ')
    }}</span>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="css" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  position: relative;
  padding: 40px 16px 16px;
  box-sizing: border-box;
}

.card:hover {
  cursor: pointer;
  box-shadow: 0 5px 25px rgb(30 31 33 / 24%);
  transition: 0.5s;
}
.card__photo {
  width: 100%;
  height: 336px;
}
.card__name {
  font-size: 18px;
  font-weight: 400;
  color: #0a1e32;
  text-align: center;
}

.card__price {
  font-size: 24px;
  font-weight: 800;
  color: #464c58;
}

.card__price::after {
  display: inline-block;
  content: 'руб.';
  margin: 0 0 0 6px;
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
