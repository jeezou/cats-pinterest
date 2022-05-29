<template>
  <div class="favourites">
    <template v-for="card in favs" :key="card.id">
      <CardComponent
        :img="card.img"
        :id="card.id"
        :isActive="true"
        @rerender="reRender"
      />
    </template>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';

export default {
  name: 'FavouritesView',
  components: {
    CardComponent,
  },
  data() {
    return {
      favs: this.getFavs(),
    };
  },
  beforeRouteEnter() {
    if (this) {
      const favs = this.getFavs();
      if (this.favs.length !== favs.length) this.favs = favs;
    }
  },
  mounted() {
    const favs = this.getFavs();
    if (favs.length !== this.favs.length) this.favs = favs;
  },
  methods: {
    getFavs() {
      return JSON.parse(localStorage.getItem('favs') || '[]');
    },
    reRender(e) {
      this.favs = e;
    },
  },
};
</script>

<style lang="scss">
.favourites {
  width: 100%;
  box-sizing: border-box;
  padding: 50px 3%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3.3vw;
}
</style>
