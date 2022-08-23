<template>
  <div class="bg-slate-500 text-white">
    <div class="container mx-auto px-8 flex justify-between items-center py-4">
      <div>
        <img class="w-6 h-6" src="../assets/vue.svg" alt="" />
      </div>
      <div class="gap-x-4 hidden md:flex">
        <div>
          <router-link :to="{ name: 'Home', params: { locale } }">
            {{ $t('home') }}
          </router-link>
        </div>
        <div>
          <router-link :to="{ name: 'About', params: { locale } }">
            {{ $t('about') }}
          </router-link>
        </div>
        <div>
          <router-link :to="{ name: 'Contact', params: { locale } }">
            {{ $t('contact') }}
          </router-link>
        </div>

        <div v-if="!store.state.isLogin">
          <router-link :to="{ name: 'Login', params: { locale } }">
            {{ $t('login') }}
          </router-link>
        </div>

        <div v-if="store.state.isLogin">
          <router-link :to="{ name: 'Dashboard', params: { locale } }">
            Dashboard
          </router-link>
        </div>

        <div v-if="store.state.isLogin">
          <router-link :to="{ name: 'Profile', params: { locale } }">
            Profile
          </router-link>
        </div>

        <div v-if="store.state.isLogin">
          <div @click="logout">Logout</div>
        </div>

        <div class="relative flex items-center">
          <button
            id="dropdownDefault"
            @click="toggleDropdown"
            data-dropdown-toggle="dropdown"
            type="button"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              ></path>
            </svg>
          </button>
          <div
            class="fixed top-0 left-0 w-full h-full"
            :class="!dropdownOpen && 'hidden'"
            @click="closeDropDown"
            style="z-index: 99"
          ></div>

          <!-- Dropdown menu -->
          <div
            id="dropdown"
            class="
              overflow-hidden
              absolute
              top-full
              z-10
              bg-white
              rounded
              shadow
              text-center
              left-1/2
              -translate-x-1/2
            "
            :class="!dropdownOpen && 'hidden'"
            style="z-index: 100"
          >
            <ul class="text-sm text-gray-700" aria-labelledby="dropdownDefault">
              <li
                class="
                  px-6
                  py-2
                  cursor-pointer
                  hover:bg-gray-700 hover:text-white
                  border border-b
                "
                v-show="i18n.global.locale != 'tc'"
                @click="changeLocale('tc')"
              >
                繁
              </li>
              <li
                class="
                  px-6
                  py-2
                  cursor-pointer
                  hover:bg-gray-700 hover:text-white
                  border-b
                "
                v-show="i18n.global.locale != 'sc'"
                @click="changeLocale('sc')"
              >
                簡
              </li>
              <li
                class="
                  px-6
                  py-2
                  cursor-pointer
                  hover:bg-gray-700 hover:text-white
                "
                v-show="i18n.global.locale != 'en'"
                @click="changeLocale('en')"
              >
                ENG
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="md:hidden relative z-20">
        <Hamburger @mobileHamburgerToggle="mobileHamburgerToggle" />
      </div>
    </div>
  </div>
  <div
    class="fixed inset-0 bg-black z-10 duration-300"
    :class="mobileMenuOpen ? 'bg-opacity-50 visible' : 'bg-opacity-0 invisible'"
    @click="closeMobileMenu"
  ></div>
  <div class="w-4/5 bg-white h-full top-0 left-0 overflow-y-auto"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import i18n from '../i18n';
import { useRouter } from 'vue-router';
import Hamburger from './Hamburger.vue';
import { useStore } from 'vuex';

let dropdownOpen = ref(false);
const locale = i18n.global.locale;
const router = useRouter();
const store = useStore();
let mobileMenuOpen = ref(false);

onMounted(() => {
  window.addEventListener('keyup', (evt) => {
    if (evt.keyCode == 27) {
      closeDropDown();
    }
  });
});

function mobileHamburgerToggle(isOpen) {
  console.log(isOpen);
  mobileMenuOpen.value = isOpen;
}

function closeDropDown() {
  dropdownOpen.value = false;
}

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
  return false;
}

function logout() {
  store.commit('logout');
  router.push('/' + locale);
}

function closeMobileMenu() {}

function changeLocale(locale) {
  i18n.global.locale = locale;
  router.push({
    name: router.currentRoute.value.name,
    params: {
      locale,
    },
  });
  closeDropDown();
}
</script>
