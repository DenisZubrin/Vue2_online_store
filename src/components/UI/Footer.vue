<template>
  <footer class="footer">
    <div class="footer__content">
      <a href="#" class="footer__link">Избранное</a>
      <a href="#" class="footer__link">8 800 888 00 88</a>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {};
  },
}
</script>
<style lang="css" scoped>
  .footer {
    background-color: #0A1E32;
  }

  .footer__content {
    max-width: 1400px;
    height: 96px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer__link {
    display: block;
    text-decoration: none;
    color: white;
  }
</style>