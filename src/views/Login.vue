<template>
  <h1 class="text-center font-bold text-3xl my-8">
    {{ $t('login') }}
  </h1>
  <LoginForm />
</template>

<script setup>
import LoginForm from '../components/LoginForm.vue';
</script>
