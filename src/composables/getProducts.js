import { ref } from 'vue';

const getProduct = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async (callback) => {
    try {
      let data = await fetch(`https://fakestoreapi.com/products`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!data.ok) {
        throw Error('Login Error');
      }
      posts.value = await data.json();
      if (callback) callback();
    } catch (error) {
      error.value = error.message;
    }
  };
  return { posts, error, load };
};

export default getProduct;
