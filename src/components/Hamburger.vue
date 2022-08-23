<template>
  <div class="menu-trigger">
    <div class="navbar-container container">
      <input type="checkbox" name="" @click="hamburgerHandler" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue';

let isOpen = ref(false);
const emit = defineEmits(['mobileHamburgerToggle']);

function hamburgerHandler() {
  isOpen.value = !isOpen.value;
  emit('mobileHamburgerToggle', isOpen.value);
}
</script>

<style scoped>
.menu-trigger .navbar-container {
  --menu-trigger-bar-color: white;
  --menu-trigger-line-height: 2px;
  --menu-trigger-width: 25px;
  --menu-trigger-height: 20px;
  display: block;
  position: relative;
  width: var(--menu-trigger-width);
  height: var(--menu-trigger-height);
}

.menu-trigger .navbar-container input[type='checkbox'] {
  position: absolute;
  display: block;
  height: 100%;
  width: 100%;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
}

.menu-trigger .navbar-container .hamburger-lines {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
}

.menu-trigger .navbar-container .hamburger-lines .line {
  position: absolute;
  display: block;
  height: var(--menu-trigger-line-height);
  width: 100%;
  border-radius: 10px;
  background: var(--menu-trigger-bar-color);
  transition: all 400ms;
}

.menu-trigger
  .navbar-container
  input[type='checkbox']:checked
  ~ .hamburger-lines
  .line1 {
  transform: rotate(45deg) translate(-50%, -50%);
  top: 50%;
  left: 50%;
}

.menu-trigger
  .navbar-container
  input[type='checkbox']:checked
  ~ .hamburger-lines
  .line2 {
  transform: translateY(-50%) translateX(100%);
  opacity: 0;
  visibility: hidden;
}

.menu-trigger
  .navbar-container
  input[type='checkbox']:checked
  ~ .hamburger-lines
  .line3 {
  transform: rotate(-45deg) translate(-50%, -50%);
  top: 50%;
  left: 50%;
}

.menu-trigger .navbar-container .hamburger-lines .line1 {
  top: 0;
  left: 0;
  transform-origin: 0% 0%;
  transition: all 0.3s ease-in-out;
}

.menu-trigger .navbar-container .hamburger-lines .line3 {
  top: calc(100% - var(--menu-trigger-line-height));
  left: 0;
  transform-origin: 0% 0%;
  transition: all 0.3s ease-in-out;
}

.menu-trigger .navbar-container .hamburger-lines .line2 {
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  transition: all 0.1s ease-in-out;
}
</style>
