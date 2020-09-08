<template>
  <swiper
    class="swiper-demo"
  >
    <swiper-slide
      v-for="slide in slides"
      :key="slide"
    >{{ slide }}</swiper-slide>
  </swiper>
</template>
<script>
  import 'swiper/swiper-bundle.css'
  import { Swiper, SwiperSlide } from 'swiper/vue'

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },

    data() {
      // Create array with 10 slides
      const slides = Array.from({ length: 10 }).map((el, index) => `Slide ${index + 1}`);
      return {
        slides,
      };
    },
  };
</script>

<style scoped>
  .swiper-demo {
    margin: 0 auto;
    width: 300px;
    background: #eee;
    line-height: 150px;
  }
</style>