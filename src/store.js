import Vue from "vue";
import Vuex from "vuex";
import productService from "./services/productService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    errors: []
  },
  mutations: {
    GET_PRODUCTS(state, products) {
      state.products = products;
    },
    CREATE_PRODUCT(state, product) {
      state.products = [product, ...state.products];
    },
    GET_PRODUCTS_ERROR(state, error) {
      state.errors = [error, ...state.errors];
    }
  },
  actions: {
    getProducts({ commit }) {
      productService.getProducts().then(res => {
        commit("GET_PRODUCTS", res.data);
      })
        .catch(err => {
          const error = {
            date: new Date(),
            message: `failed to retrieve products: ${err.message}`
          }
          commit("GET_PRODUCTS_ERROR", error);
        });
    },
    createProduct({ commit }, product) {
      productService.createProduct(product).then(res => {
        commit("CREATE_PRODUCT", product);
      })
        .catch(err => console.log(err.message));
    }
  }
});
