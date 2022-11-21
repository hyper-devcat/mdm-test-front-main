<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">All Products</router-link> |
      <router-link to="/cart">My Cart ()</router-link> |
      <router-link to="/about">Need Help?</router-link>
      <AllProducts msg="Products List"/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import AllProducts from './components/AllProducts.vue';

export default {
  components: { AllProducts },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: orange;
    }
  }
}
</style>
