<script setup>
import Header from './components/Header.vue';
import Loading from './components/Loading.vue';
</script>

<template>
  <Header />
  <router-view />
  <Loading />
</template>
