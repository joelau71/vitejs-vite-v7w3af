import { createRouter, createWebHistory } from 'vue-router';
import { RouterView } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import PageNotFound from '../views/PageNotFound.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Profile from '../views/Profile.vue';
import Detail from '../views/product/Detail.vue';
import i18n from '../i18n';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: {
      name: 'Home',
      params: {
        locale: i18n.global.locale,
      },
    },
  },
  {
    path: '/:locale(en|tc|sc)',
    component: RouterView,
    children: [
      {
        path: '',
        name: 'index',
        redirect: {
          name: 'Home',
        },
      },
      {
        path: 'home',
        name: 'Home',
        component: Home,
      },
      {
        path: 'about',
        name: 'About',
        component: About,
      },
      {
        path: 'contact',
        name: 'Contact',
        component: Contact,
      },
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
      {
        path: 'product',
        children: [
          {
            path: ':id',
            name: 'Detail',
            props: true,
            component: Detail,
          },
        ],
      },
      {
        path: 'user',
        meta: {
          isAuth: true,
        },
        children: [
          {
            path: 'dashboard',
            name: 'Dashboard',
            component: Dashboard,
          },
          {
            path: 'profile',
            name: 'Profile',
            component: Profile,
          },
        ],
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const locale = to.params.locale;
  i18n.global.locale = locale;
  store.commit('resetLoadingList');
  next();
});

router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    if (store.state.isLogin) {
      next();
    } else {
      next('/' + i18n.global.locale + '/login');
    }
  } else {
    next();
  }
});

export default router;
