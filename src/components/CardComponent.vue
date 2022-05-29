<template>
  <div class="card">
    <img class="card__img" :src="img" />
    <div
      class="card__like-wrapper"
      :class="{ 'card__like-wrapper_active': active }"
      @click="handleLike"
    >
      <svg
        width="40"
        height="37"
        viewBox="0 0 40 37"
        fill="#F24E1E"
        xmlns="http://www.w3.org/2000/svg"
        class="empty"
      >
        <path
          d="M29 0C25.52 0 22.18 1.62 20 4.18C17.82 1.62 14.48 0 11 0C4.84 0 0 4.84 0 11C0 18.56 6.8 24.72 17.1 34.08L20 36.7L22.9 34.06C33.2 24.72 40 18.56 40 11C40 4.84 35.16 0 29 0ZM20.2 31.1L20 31.3L19.8 31.1C10.28 22.48 4 16.78 4 11C4 7 7 4 11 4C14.08 4 17.08 5.98 18.14 8.72H21.88C22.92 5.98 25.92 4 29 4C33 4 36 7 36 11C36 16.78 29.72 22.48 20.2 31.1Z"
          fill="#F24E1E"
        />
      </svg>

      <svg
        width="40"
        height="37"
        viewBox="0 0 40 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="solid"
      >
        <path
          d="M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z"
          fill="#F24E1E"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    img: String,
    id: String,
    isActive: Boolean,
  },
  data() {
    return {
      active: this.isActive,
    };
  },
  methods: {
    handleLike() {
      let favs = JSON.parse(localStorage.getItem('favs') || '[]');
      let inFavs = false;
      favs.forEach((el) => {
        if (el.id === this.id) inFavs = true;
      });
      if (!inFavs) {
        favs.push({ img: this.img, id: this.id });
        this.active = true;
      } else {
        favs = favs.filter((el) => el.id != this.id);
      }
      this.$emit('rerender', favs);
      localStorage.setItem('favs', JSON.stringify(favs));
    },
  },
};
</script>

<style lang="scss">
.card {
  position: relative;
  aspect-ratio: 1;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.24),
      0px 9px 18px rgba(0, 0, 0, 0.18);
    transform: scale(1.05);

    .card__like-wrapper {
      opacity: 1;
      transform: scale(1);
    }
  }

  &__img {
    height: 101%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  &__like-wrapper {
    position: absolute;
    width: 40px;
    height: 40px;
    right: 5%;
    bottom: 5%;

    opacity: 0;
    transform: scale(0.5);
    transition: all 0.3s ease-in-out;

    &_active {
      .empty {
        opacity: 0 !important;
        pointer-events: none !important;
      }

      .solid {
        opacity: 1 !important;
        pointer-events: all !important;
        path {
          fill: #ff3a00 !important;
        }
      }
    }

    .empty,
    .solid {
      width: 100%;

      position: absolute;
      top: 0;
      left: 0;

      transition: all 0.2s ease-in-out;
    }

    .solid {
      opacity: 0;
      pointer-events: none;
      z-index: 2;
    }

    .empty {
      z-index: 1;
      &:hover {
        opacity: 0;
        & ~ .solid {
          opacity: 1;
        }
      }
    }
  }
}
</style>
