<template>
  <div class="home">
    <template v-for="card in cards" :key="card.id">
      <CardComponent :img="card.url" :id="card.id" />
    </template>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';

export default {
  name: 'HomeView',
  components: {
    CardComponent,
  },
  data() {
    return {
      num: 15,
      cards: [],
    };
  },
  created() {
    this.getPictures();
  },
  methods: {
    getPictures() {
      for (let i = 0; i < this.num; i++) {
        fetch('https://api.thecatapi.com/v1/images/search?mime_types=jpg,png')
          .then((response) => response.json())
          .then((data) => this.cards.push({ url: data[0].url, id: data[0].id }))
          .catch((err) => console.error(err));
      }
    },
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  box-sizing: border-box;
  padding: 3%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 1fr;
  gap: 2% 2%;
}
</style>
