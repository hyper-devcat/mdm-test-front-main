import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  getters: {
    getAllProducts(state) {
      return state.products;
    },
    getCart(state) {
      return state.cart;
    },
  },
  actions: {
    async fetchAllProducts({ commit }) {
      const config = {
        headers: {
          Accept: 'application/json',
        },
      };
      const res = await axios.get('http://localhost:3000/products', config);
      commit('setProducts', res);
    },
    addToCart({ commit }, product) {
      commit('addProductToCart', product);
    },
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload.data;
    },
    addProductToCart(state, payload) {
      state.cart.push(payload);
    },
  },
  strict: debug,
});
