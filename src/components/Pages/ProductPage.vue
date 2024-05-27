<template>
  <div class="wrapper">
    <Header />
    <Breadcrumbs />
    <main class="main">
      <section class="product">
        <img
          src="@/assets/products-images/product_1_front.png"
          alt="product__full-image"
          class="product__full-image"
        />
        <div class="product__text">
          <h1 class="product__name">Женская сумка</h1>
          <p class="product__description">
            Сумочка-тоут среднего размера идеально держит форму, выполнена из
            экокожи черного цвета и черного меха. Имеет одно просторное
            отделение с карманом перегородкой и внутренним карманом на молнии.
          </p>
          <span class="product__price">2 300 руб.</span>
          <button class="product__btn">Избранное</button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/UI/Header';
import Footer from '@/components//UI/Footer';
import Breadcrumbs from '@/components/UI/Breadcrumbs';

export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
  },
};
</script>

<style lang="css" scoped>
.main {
  max-width: 1400px;
  margin: 0 auto;
}

.product {
  display: flex;
  margin: 0 0 112px;
}

.product__full-image {
  height: 715px;
  outline: 0.5px solid #e5e5e5;
  margin: 0 40px 0 0;
}

.product__text {
  max-width: 560px;
  width: 100%;
}

.product__name {
  margin: 0 0 24px;
  font-size: 48px;
  color: #0A1E32;
  font-weight: 500;
}

.product__description {
  margin: 0 0 24px;
  font-size: 16px;
  line-height: 1.5;
  color: #464C58;
}

.product__price {
  display: block;
  margin: 0 0 24px;
  font-size: 48px;
  color: #0A1E32;
  font-weight: 700;
}

.product__btn {
  border: 1px solid #0A1E32;
  border-radius: 4px;
  padding: 8px 32px 8px 64px;
  box-sizing: border-box;
  position: relative;
  text-align: right;
  background-color: #fff;
  color: #0A1E32;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.05px;
  text-transform: uppercase;
}

.product__btn:hover {
  cursor: pointer;
}

.product__btn::before {
  position: absolute;
  content: '';
  display: block;
  left: 37px;
  top: 15px;
  width: 20px;
  height: 18px;
  background-image: url('~@/assets/heart-icon_emptied.png');
  background-repeat: no-repeat;
  background-position: center;
}

.product__btn:hover::before {
  position: absolute;
  content: '';
  display: block;
  left: 37px;
  top: 15px;
  width: 20px;
  height: 18px;
  background-image: url('~@/assets/heart-icon_filled.png');
  background-repeat: no-repeat;
  background-position: center;
}
</style>
