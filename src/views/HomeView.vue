<template>
  <div class="wrapper">
    <div class="home">
      <template v-for="card in cards" :key="card.id">
        <CardComponent :img="card.url" :id="card.id" :active="false" />
      </template>
    </div>
    <button
      @click="appendCards"
      class="load-btn"
      :class="{ 'load-btn--adding': adding }"
    >
      <span
        class="load-btn__content"
        :class="{ 'load-btn__content_default': !adding }"
      >
        I need more cuties!
      </span>
      <span
        class="load-btn__content"
        :class="{ 'load-btn__content_adding': adding }"
      >
        Let's see what I can do..
      </span>
    </button>
    <div
      class="overflow"
      :class="{
        overflow_active: loading,
      }"
    >
      Wait a bit..
      <p>Searching best kitties</p>
    </div>
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
      loading: true,
      adding: false,
    };
  },
  created() {
    this.getPictures().then((cards) => {
      this.cards.push(...cards);
      this.loading = false;
    });
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
      this.adding = true;
      setTimeout(
        () =>
          window.scrollTo(
            0,
            document.body.scrollHeight || document.documentElement.scrollHeight
          ),
        0
      );

      this.getPictures().then((cards) => {
        this.cards.push(...cards);
        this.adding = false;
      });
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

.load-btn {
  outline: none;
  border: none;
  background: none;

  // width: fit-content;
  margin: 0 20px 30px;

  padding: 10px 5%;

  box-sizing: border-box;

  cursor: pointer;

  background: #2196f3;
  color: #fafafa;
  font-size: calc(0.5vw + 1rem);

  transition: all 0.2s ease-in-out;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);

  &--adding {
    border-radius: 50px;
    padding: 10px 30%;
    pointer-events: none;
  }

  &:hover {
    background: #34a0ff;
  }

  &__content {
    position: absolute;
    opacity: 0;
    &_default {
      position: relative;
      opacity: 1;
    }
    &_adding {
      position: relative;
      transition: opacity 0.3s ease-in-out;
      opacity: 1;
    }
  }
}

.overflow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: #fff;

  color: rgba(0, 0, 0, 0.591);
  font-weight: 800;
  font-size: calc(1vw + 1rem);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 2vh;

  opacity: 0;

  transition: all 0.4s ease-in-out;

  pointer-events: none;

  &_active {
    z-index: 1;
    opacity: 1;
    pointer-events: all;
  }
}

@media screen and (max-width: 1280px) {
  .home {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (max-width: 960px) {
  .home {
    row-gap: 5vh;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .home {
    grid-template-columns: repeat(2, 1fr);
  }
  .load-btn {
    &--adding {
      border-radius: 50px;
      padding: 10px 15%;
      pointer-events: none;
    }
  }
}

@media screen and (max-width: 300px) {
  .home {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
