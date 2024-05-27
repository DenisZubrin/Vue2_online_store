<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
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
