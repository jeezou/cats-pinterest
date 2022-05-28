<template>
  <nav class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/favourites">Favourites</router-link>
  </nav>
  <router-view v-slot="{ Component }">
    <keep-alive include="FavouritesView,HomeView">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
export default {
  name: 'NavComponent',
};
</script>

<style></style>
