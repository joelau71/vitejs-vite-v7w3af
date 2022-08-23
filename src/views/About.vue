<template></template>

<script setup>
// fetch('http://127.0.0.1:8000/api/v1/users', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
//   .then((res) => res.json())
//   .then((json) => {
//     console.log(json);
//   });

fetch('https://fakestoreapi.com/users/1')
  .then((res) => res.json())
  .then((json) => console.log(json));
</script>
