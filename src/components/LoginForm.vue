<template>
  <div
    class="
      container
      mx-auto mx-8
      px-8
      py-4
      text-center
      bg-red-600
      text-white
      rounded
    "
    v-if="errorMessage"
  >
    {{ errorMessage }}
  </div>
  <form @submit="onSubmit" class="container max-w-3xl px-8 mx-auto">
    <FormInputElement
      name="username"
      type="text"
      :label="$t('username')"
      validate="isRequired"
    />

    <FormInputElement
      name="password"
      type="password"
      :label="$t('password')"
      validate="isRequired"
    />

    <div class="flex justify-end mt-8">
      <button class="px-6 py-2 bg-amber-700 rounded text-white">
        {{ $t('send') }}
      </button>
    </div>
  </form>
</template>

<script setup>
import { useForm } from 'vee-validate';
import FormInputElement from '../atoms/FormInputElement.vue';
import { ref } from 'vue';
import i18n from '../i18n';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const { handleSubmit } = useForm();
const errorMessage = ref('');

const router = useRouter();

const login = async (username, password) => {
  try {
    let data = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    if (!data.ok) {
      throw Error('Login Error');
    }
    const json = await data.json();
    console.log(json);
    console.log(json.token);
    store.commit('setToken', json.token);
    router.push({ name: 'Dashboard' });
  } catch (error) {
    errorMessage.value = error.message;
  }
};

const onSubmit = handleSubmit((values) => {
  // username: 'mor_2314',
  // password: '83r5^_',
  const username = values.username;
  const password = values.password;
  console.log(username, password);
  store.commit('addLoadingItem', 'login');
  login(username, password);

  // fetch('https://fakestoreapi.com/auth/login', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     username,
  //     password,
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((json) => {
  //     console.log(json.token);
  //     store.commit('setToken', json.token);

  //   });
});
</script>
