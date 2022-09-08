<template>
  <Slider :collection="collection" />
  <!-- <TestLoading /> -->
  <div class="mt-8">
    <Thumbnail />
  </div>
  <Modal :title="title" :text="text" />
  <button @click="openModal">Open Modal</button>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Slider from '../components/Slider.vue';
import Thumbnail from '../components/Thumbnail.vue';
import Modal from '../components/Modal.vue';
import TestLoading from '../components/TestLoading.vue';
import { useStore } from 'vuex';

const store = useStore();
store.commit('resetLoadingList');

const title = ref('Hello, model');
const text = ref(
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, magnam dolores nobis, officiis excepturi nam id odit magni vel itaque architecto totam, ullam eaque quasi? Facilis in qui maiores accusamus numquam aspernatur minus iste impedit, maxime consequuntur! Pariatur aspernatur, temporibus culpa nulla natus quam cupiditate, sed repellat qui sequi quibusdam nihil maxime eaque at error quaerat illo sunt facere officiis excepturi earum nostrum ducimus minima aperiam? Similique soluta dolor porro odit laboriosam ullam iusto at, sunt necessitatibus dolorum perferendis aliquam fugiat, deserunt aspernatur saepe error libero reiciendis placeat sequi! Esse cupiditate dicta, animi iure obcaecati eius maiores tempora voluptates temporibus.'
);
const collection = [
  {
    title: 'Titl 1',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum officiis sint aliquam expedita illo facere! Doloremque odio impedit, quis quos, rerum, deleniti harum non dolorum veritatis eaque minus odit voluptas!',
    image: 'https://source.unsplash.com/1920x940/?food&sig=1',
  },
  {
    title: 'Titl 2',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum officiis sint aliquam expedita illo facere! Doloremque odio impedit, quis quos, rerum, deleniti harum non dolorum veritatis eaque minus odit voluptas!',
    image: 'https://source.unsplash.com/1920x940/?food&sig=2',
  },
  {
    title: 'Titl 3',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum officiis sint aliquam expedita illo facere! Doloremque odio impedit, quis quos, rerum, deleniti harum non dolorum veritatis eaque minus odit voluptas!',
    image: 'https://source.unsplash.com/1920x940/?food&sig=3',
  },
];

onMounted(() => {
  console.log('parent home page mounted');
});

const openModal = () => {
  //store.commit('openModal');
  store.commit('setModal', true);
};
</script>
