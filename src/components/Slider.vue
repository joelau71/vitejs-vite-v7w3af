<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="(item, idx) in collection" :key="idx">
      <div class="relative flex overflow-hidden">
        <img
          class="relative left-1/2 -translate-x-1/2"
          style="min-width: 40rem"
          :src="item.image"
          alt=""
        />
        <div
          class="
            absolute
            container
            px-8
            left-1/2
            -translate-x-1/2
            top-1/2
            -translate-y-1/2
            text-white text-center
          "
        >
          <div class="text-5xl shadow-md">
            {{ item.title }}
          </div>
          <div class="hidden md:block">
            {{ item.text }}
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const { collection } = defineProps(['collection']);
const modules = [Navigation, Pagination, Scrollbar, A11y];
console.log(collection);
</script>
