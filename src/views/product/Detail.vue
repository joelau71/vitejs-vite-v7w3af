<template>
  <div v-if="post" class="container px-8 mx-auto mt-8">
    <div class="flex flex-wrap items-center max-w-4xl mx-auto">
      <div class="w-full lg:w-1/3">
        <img class="w-full max-w-md mx-auto" :src="post.image" alt="" />
      </div>
      <div class="w-full lg:w-2/3 pt-8 lg:pl-8 lg:pt-0">
        <h2 class="text-2xl font-bold">{{ post.title }}</h2>
        <p>{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import getProduct from '../../composables/getProduct.js';
import { useStore } from 'vuex';

const store = useStore();

store.commit('addLoadingItem', 'detail');

const { id } = defineProps(['id']);
const { post, error, load } = getProduct();
load(id, () => {
  store.commit('completedLoadingItem', 'detail');
});
</script>
