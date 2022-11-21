<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <div>
      <table>
            <thead>
                <tr>
                    <th>reference</th>
                    <th>images</th>
                    <th>name</th>
                    <th>price</th>
                    <th>line</th>
                    <th>slug</th>
                    <th>stock</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-for="(product, i) in products"> -->
                <tr v-for="(product, key) in getAllProducts" :key="key">
                    <td>
                      {{ product.reference }}
                    </td>
                    <td>
                      {{ product.images.xsmall }}
                    </td>
                    <td>
                      {{ product.name }}
                    </td>
                    <td>
                      {{ product.price.base.formatted }}
                    </td>
                    <td>
                      {{ product.line }}
                    </td>
                    <td>
                      {{ product.slug }}
                    </td>
                    <td>
                      {{ product.qty }}
                    </td>
                    <td>
                      <button
                      @click="addToCart(product)">
                      Add To Cart
                      </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AllProducts',
  props: {
    msg: String,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'getAllProducts',
      'getCart',
    ]),
  },
  // Get all produts from store
  methods: mapActions([
    'addToCart', 'fetchAllProducts',
  ]),
  // Add the products selected by action to MyCart and reduce one from the stock
  created() {
    this.fetchAllProducts();
    // this.$store.dispatch('fetchAllProducts');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
// table style
table {
  width: 100%;
}
tr, td {
  border-bottom: 1px solid #ddd;
  height: 50px;
}
th {
  background-color: #04AA6D;
  color: white;
  height: 70px;
}
</style>
