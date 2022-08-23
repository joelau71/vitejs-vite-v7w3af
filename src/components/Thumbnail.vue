<template>
  <Container>
    <div
      class="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        gap-5
        overflow-hidden
      "
    >
      <template v-for="item in collection" :key="item.id">
        <Card
          :image="item.image"
          :title="item.title"
          :price="item.price"
          :id="item.id"
        />
      </template>
    </div>
  </Container>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';
import Container from '../atoms/Container.vue';
import Card from '../atoms/Card.vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useStore } from 'vuex';
import getProducts from '../composables/getProducts.js';

gsap.registerPlugin(ScrollTrigger);

//const api = 'https://fakestoreapi.com/products';
let collection = ref([]);
const store = useStore();
const { posts, error, load } = getProducts();

store.commit('addLoadingItem', 'thumbnail');

async function init(res) {
  collection.value = res.value;
  await nextTick();
  ScrollTrigger.batch('.card', {
    start: 'top bottom',
    onEnter: (batch) => {
      console.log(batch);
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
      });
    },
    onLeaveBack: (batch) => {
      gsap.to(batch, {
        opacity: 0,
        y: '100%',
        stagger: 0.1,
        onComplete: () => {
          batch.style = '';
        },
      });
    },
  });
  store.commit('completedLoadingItem', 'thumbnail');
}

onMounted(() => {
  load(() => {
    init(posts);
  });
  //init(posts);
  // console.log('children thumbnail onMounted');
  // fetch(api)
  //   .then((res) => res.json())
  //   .then((res) => init(res));
});
</script>
