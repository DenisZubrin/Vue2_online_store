<template>
  <header class="header">
    <button class="header__link" @click="$router.push('/')"
      ><img src="@/assets/logo.png" alt="logotype"
    /></button>
    <button class="header__link" @click="$router.push('/wishlist')"
      ><img src="@/assets/heart-icon_filled.png" alt="wishlist"
    /></button>
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

.header__link {
  display: flex;
  align-self: center;
  border: none;
  background-color: inherit;
}

.header__link:hover {
  cursor: pointer;
}
</style>
