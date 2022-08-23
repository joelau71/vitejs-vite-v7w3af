<template>
  <div
    class="
      w-full
      h-full
      border
      px-3
      py-5
      rounded
      flex flex-col
      justify-between
      max-w-sm
      mx-auto
      opacity-0
      translate-y-full
      card
    "
  >
    <img
      class="block h-40 w-auto mb-4 mx-auto object-contain"
      :src="image"
      alt=""
    />
    <h3 class="text-center mb-4 font-bold flex-1">
      {{ title }}
    </h3>
    <router-link
      :to="{ name: 'Detail', params: { id: id } }"
      class="block text-center bg-blue-400 text-white py-2"
    >
      ${{ price.toFixed(2) }}
    </router-link>
  </div>
</template>

<script setup>
const { image, title, price, id } = defineProps([
  'image',
  'title',
  'price',
  'id',
]);
</script>
