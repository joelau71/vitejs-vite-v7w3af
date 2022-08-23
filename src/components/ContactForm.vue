<template>
  <form @submit="onSubmit" class="container max-w-3xl px-8 mx-auto">
    <FormInputElement
      name="email"
      type="email"
      :label="$t('email') + ':'"
      validate="isEmail"
    />

    <FormInputElement name="name" type="text" :label="$t('name') + ':'" />

    <FormInputElement
      name="content"
      type="textarea"
      :label="$t('content') + ':'"
      validate="isRequired"
    />

    <div class="flex justify-end mt-8">
      <button class="px-6 py-2 bg-amber-700 rounded text-white">Send</button>
    </div>
  </form>
</template>

<script setup>
import { useForm } from 'vee-validate';
import FormInputElement from '../atoms/FormInputElement.vue';

const { handleSubmit } = useForm();

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>
