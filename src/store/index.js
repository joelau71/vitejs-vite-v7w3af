import { createStore } from 'vuex';

export default createStore({
  state: {
    isOpen: false,
    token: localStorage.getItem('token') || null,
    isLogin: localStorage.getItem('token') ? true : false,
    isLoading: false,
    imagesIsLoading: false,
    loadingList: [],
    ImagesLoadingList: [],
  },
  mutations: {
    openModal() {
      this.state.isOpen = true;
    },
    closeModal() {
      this.state.isOpen = false;
    },
    setModal(state, payload) {
      state.isOpen = payload;
    },
    setToken(state, payload) {
      state.isLogin = true;
      state.token = payload;
      localStorage.setItem('token', JSON.stringify(payload));
    },
    logout(state) {
      state.isLogin = false;
      state.token = null;
      localStorage.removeItem('token');
    },
    resetLoadingList(state) {
      state.isLoading = false;
      state.loadingList = [];
    },
    addLoadingItem(state, payload) {
      state.loadingList[payload] = true;
      state.isLoading = true;
    },
    completedLoadingItem(state, payload) {
      state.loadingList[payload] = false;
      let status = false;
      for (const item in state.loadingList) {
        const test = state.loadingList[item];
        if (test) {
          status = true;
          break;
        }
      }
      state.isLoading = status;
    },

    // setImageIsLoading(state) {
    //   state.imagesIsLoading = true;
    // },

    // addImageLoadingItem(state, payload) {
    //   state.imagesLoadingList = payload;
    //   const images = state.imagesLoadingList.map((imageSrc) => {
    //     return new Promise((resolve, reject) => {
    //       const img = new Image();
    //       img.src = imageSrc;
    //       img.onload = resolve;
    //       img.onerror = reject;
    //     });
    //   });

    //   Promise.all(images)
    //     .then(() => {
    //       console.log('Images loaded!');
    //       state.imagesIsLoading = false;
    //     })
    //     .catch((error) => {
    //       console.error('Some image(s) failed loading!');
    //       console.error(error.message);
    //     });
    // },
  },
  //for sync function
  actions: {},
  modules: {},
});
