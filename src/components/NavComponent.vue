<template>
  <nav class="nav">
    <router-link
      class="link"
      :class="$route.name === 'home' ? 'link_active' : ''"
      to="/"
      >Home</router-link
    >
    <router-link
      class="link"
      :class="$route.name === 'favourites' ? 'link_active' : ''"
      to="/favourites"
      >Favourites</router-link
    >
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

  data() {
    return {};
  },
};
</script>

<style lang="scss">
.nav {
  width: 100%;
  height: 64px;
  background: #2196f3;
  padding: 0 3%;
  display: flex;
  box-sizing: border-box;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);

  position: sticky;
  top: 0;
  z-index: 1;

  .link {
    padding: 0 3%;
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    transition: all 0.2s ease-in-out;

    &:hover {
      background: #34a0ff;
    }

    &_active {
      background: #1e88e5;
      &:hover {
        background: #1e88e5;
      }
    }
  }
}
</style>
