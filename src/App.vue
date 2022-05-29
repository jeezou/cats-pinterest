<template>
  <div id="app">
    <NavComponent></NavComponent>
  </div>
</template>

<script>
import NavComponent from '@/components/NavComponent.vue';

export default {
  name: 'App',
  components: {
    NavComponent,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import '@/styles/reset.css';

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  width: 100vw;
  max-width: 100%;
}

html {
  height: 100%;
  overflow: auto;
  scroll-behavior: smooth;
}
body {
  height: 100%;
}
</style>
