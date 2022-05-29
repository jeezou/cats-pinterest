<template>
  <div class="home">
    <template v-for="card in cards" :key="card.id">
      <CardComponent :img="card.url" :id="card.id" :active="false" />
    </template>
    <button @click="appendCards">Load More</button>
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
      reloaded: true,
    };
  },
  created() {
    this.appendCards();
  },
  methods: {
    async getPictures() {
      const cards = [];
      for (let i = 0; i < this.num; i++) {
        const res = await fetch(
          'https://api.thecatapi.com/v1/images/search?mime_types=jpg,png'
        );
        const data = await res.json();
        cards.push({ url: data[0].url, id: data[0].id });
      }
      return cards;
    },
    appendCards() {
      this.getPictures().then((cards) => this.cards.push(...cards));
    },
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  box-sizing: border-box;
  padding: 50px 3%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3.3vw;
}
</style>
