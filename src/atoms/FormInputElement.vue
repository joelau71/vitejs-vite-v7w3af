<script setup>
import { toRef } from 'vue';
import { useField } from 'vee-validate';
import i18n from '../i18n';

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  validate: {
    type: String,
    default: undefined,
  },
});

const name = toRef(props, 'name');
const { t } = i18n.global;

const fx = {
  isEmail: (value) => {
    // if the field is empty
    if (!value) {
      return t('validation.this_field_is_required');
    }
    // if the field is not a valid email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) {
      return t('validation.email_is_invalid');
    }
    // All is good
    return true;
  },

  isRequired: (value) => {
    if (!value) {
      return t('validation.this_field_is_required');
    }
    return true;
  },
};

const test = fx[props.validate];

const {
  value: inputValue,
  errorMessage,
  handleChange,
} = useField(props.name, test, {
  validateOnValueUpdate: false,
});
</script>

<template>
  <div class="mt-8">
    <div>
      <label class="font-bold" :for="name">{{ label }}</label>
    </div>
    <div class="mt-2">
      <template v-if="type == 'textarea'">
        <textarea
          class="border-b w-full focus:border-transparent focus:ring-0"
          :name="name"
          :id="name"
          :type="type"
          :value="inputValue"
          @blur="handleChange"
        ></textarea>
      </template>
      <template v-else>
        <input
          class="border-b w-full focus:border-transparent focus:ring-0"
          :name="name"
          :id="name"
          :type="type"
          :value="inputValue"
          @blur="handleChange"
        />
      </template>
    </div>

    <div v-if="errorMessage" class="text-red-400 mt-2">{{ errorMessage }}</div>
  </div>
</template>
