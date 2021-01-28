const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    remove(id) {
        this.cart = this.cart.splice(id, 1);
    }
  },
});
