<template>
  <Transition duration="600" name="modal">
    <div
      class="fixed inset-0 bg-black bg-opacity-50 z-50"
      v-if="isOpen"
      @click.self="closeModal"
    >
      <div
        class="
          absolute
          max-w-3xl
          w-full
          px-8
          flex
          justify-center
          top-6
          lg:top-1/4
          left-1/2
          -translate-x-1/2
          mx-auto
          inner
        "
      >
        <div class="bg-white rounded-2xl px-8 py-6">
          <h3 class="font-bold text-center text-3xl">
            {{ title }}
          </h3>
          <p class="mt-4">
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

const { title, text } = defineProps(['title', 'text']);
const store = useStore();
const isOpen = computed(() => store.state.isOpen);

const closeModal = () => {
  //store.commit('closeModal');
  store.commit('setModal', false);
};
</script>

<style scoped>
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .inner,
.modal-leave-to .inner {
  left: 50%;
  transform: translate(-50%, -100%);
  opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 300ms ease-in-out;
}
/* delay leave of parent element */
.modal-leave-active {
  transition-delay: 300ms;
}

.modal-enter-active .inner,
.modal-leave-active .inner {
  transition: all 300ms ease-in-out;
}
.modal-enter-active .inner {
  transition-delay: 300ms;
}
</style>
