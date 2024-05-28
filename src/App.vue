<template>
  <div id="app">
    <router-view :wishlist="wishlist" :productsList="productsList" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      wishlist: [],
      // wishlist: [
      //   {
      //     id: 1,
      //     title: 'Сумка',
      //     price: 2300,
      //     image: '~@/assets/products-images/product_1.png',
      //   },
      //   {
      //     id: 2,
      //     title: 'Сумка',
      //     price: 2400,
      //     image: '@/assets/products-images/product_1.png',
      //   },
      //   {
      //     id: 3,
      //     title: 'Сумка',
      //     price: 2300,
      //     image: '../../assets/products-images/product_1.png',
      //   },
      // ],
      productsList: [],
    };
  },
  methods: {
    async fetchGoods() {
      const data = await fetch('https://fakestoreapi.com/products')
        .then((result) => result.text())
        .then((result) => JSON.parse(result));
      this.productsList = data;
    },

    updateWishlist(id) {
      if (this.wishlist.find((product) => product.id === id)) {
        // Удаляем cуществующий в списке продукт
        this.wishlist = this.wishlist.filter((product) => product.id !== id);
      } else {
        this.wishlist.push(this.productsList[id]);
      }
    },
  },
  mounted() {
    this.fetchGoods();
  },
};
</script>

<style>
@font-face {
  font-family: 'Ubuntu';
  src: local('Ubuntu'), url('~@/assets/fonts/Ubuntu/Ubuntu-Regular.ttf');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Ubuntu';
  src: local('Ubuntu'), url('~@/assets/fonts/Ubuntu/Ubuntu-Bold.ttf');
  font-weight: 700;
  font-style: normal;
}

body {
  margin: 0;
  height: 100%;
  font-family: 'Ubuntu';
}
</style>
