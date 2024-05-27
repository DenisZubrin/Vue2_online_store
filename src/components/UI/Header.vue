<template>
  <header class="header">
    <button class="header__link header__logo" @click="$router.push('/')">
      <img src="@/assets/logo.png" alt="logotype" />
    </button>
    <button
      class="header__link header__heart-icon"
      @click="$router.push('/wishlist')"
    >
      <img src="@/assets/heart-icon_filled.png" alt="wishlist" />
    </button>
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
  border-bottom: 1px solid #0a1e32;
  box-sizing: border-box;
}

.header__link {
  display: flex;
  align-self: center;
  border: none;
  background-color: inherit;
  padding: 0;
  box-sizing: border-box;
}

.header__link:hover {
  cursor: pointer;
}

.header__logo {
  margin: 0 0 8px 0;
}

.header__heart-icon {
  position: relative;
}

.header__heart-icon::after {
  position: absolute;
  content: '0';
  display: block;
  border-radius: 50%;
  color: white;
  background-color: #EB4C47;
  width: 16px;
  height: 16px;
  top: -2px;
  right: -8px;
  font-size: 12px;
  font-family: 'Ubuntu';
  text-align: center;
  line-height: 16px;
}
</style>
