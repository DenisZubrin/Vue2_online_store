<template>
  <header class="header">
    <a href="#" class="header__logo-link"
      ><img src="../../assets/logo.png" alt="logotype"
    /></a>
    <a href="#" class="header__wishlist-link"
      ><img src="../../assets/heart-icon_filled.png" alt="wishlist"
    /></a>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.header {
  display: flex;
  height: 76px;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
}

.header__wishlist-link {
  display: flex;
  align-self: center;
}
</style>
