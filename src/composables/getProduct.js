import { ref } from 'vue';

const getProduct = () => {
  const post = ref(null);
  const error = ref(null);

  const load = async (id, callback) => {
    try {
      let data = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!data.ok) {
        throw Error('Login Error');
      }
      post.value = await data.json();
      if (callback) callback();
    } catch (error) {
      error.value = error.message;
    }
  };
  return { post, error, load };
};

export default getProduct;
