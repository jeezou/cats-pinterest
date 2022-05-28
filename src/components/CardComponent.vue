<template>
  <div class="card">
    <img class="card__img" :src="img" />
    <div class="card__like-wrapper">
      <img :src="require('../assets/like.svg')" alt="" class="card__like" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    img: String,
    id: String,
  },
};
</script>

<style lang="scss">
.card {
  position: relative;
  aspect-ratio: 1;

  &__img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &__like-wrapper {
    position: absolute;
    width: 40px;
    right: 5%;
    bottom: 5%;
  }

  &__like {
    width: 100%;
  }
}
</style>
