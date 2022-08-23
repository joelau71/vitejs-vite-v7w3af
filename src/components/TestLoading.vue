<template>
  <div>I holding here</div>
</template>

<script setup>
import { useStore } from 'vuex';
import { onMounted } from 'vue';

const store = useStore();
store.commit('addLoadingItem', 'testing');
setTimeout(() => {
  console.log('time out');
  store.commit('completedLoadingItem', 'testing');
}, 3000);

onMounted(() => {
  console.log('children test loading');
});
</script>
