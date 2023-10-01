<template>
  <div class="selector">
    <div class="primary-img">
      <img :src="currentImg.src" :alt="currentImg.alt" />

      <div class="controls">
        <button class="controls-prev" type="button" @click="prevImg">
          <i class="fa-solid fa-arrow-up"></i>
        </button>
        <button class="controls-next" type="button" @click="nextImg">
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </div>

    <ul class="selector-images">
      <li v-for="(image, index) in images" :key="index">
        <button @click="switchImg(index)">
          <img :src="image.src" :alt="image.alt" width="200" height="200" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: String, required: true },
  },
  data() {
    return {
      currentIndex: 0,
      images: [
        { src: "https://picsum.photos/seed/arst/600", alt: "Some alt text" },
        { src: "https://picsum.photos/seed/qwfp//600", alt: "Some alt text" },
        { src: "https://picsum.photos/seed/zxcd//600", alt: "Some alt text" },
        { src: "https://picsum.photos/seed/tsra//600", alt: "Some alt text" },
        { src: "https://picsum.photos/seed/pfqq//600", alt: "Some alt text" },
      ],
    };
  },
  computed: {
    currentImg() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    switchImg(newIndex) {
      this.currentIndex = newIndex;
    },
    prevImg() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    nextImg() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      }
    },
  },
};
</script>

<style lang="scss">
button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
}

li {
  list-style-type: none;
  margin: none;
}

ul {
  margin: 0;
  padding: 0;
}

.selector {
  display: flex;
  justify-content: center;
  gap: 1rem;

  &-images {
    max-height: 600px;
    overflow: hidden scroll;
  }
}

.primary-img {
  position: relative;
}

.controls {
  position: absolute;
  right: 8px;
  bottom: 12px;

  display: flex;
  flex-direction: column;

  &-next,
  &-prev {
    padding: 16px;
    background: #f3f3f3;
    border-radius: 50% 50% 0 0;
    transition: background 0.1s ease-in-out;

    &:hover {
      cursor: pointer;
      background: #d3d3d3;
    }
  }

  &-next {
    transform: rotate(180deg);
  }
}
</style>
