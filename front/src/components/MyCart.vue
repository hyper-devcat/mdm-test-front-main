<template>
    <div class="hello">
        <table v-if="getCart.length > 0">
            <thead>
                <tr>
                  <th>reference</th>
                  <th>images</th>
                  <th>name</th>
                  <th>price</th>
                  <th>line</th>
                  <th>slug</th>
                  <th>stock</th>
                  <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, key) in getCart" :key="key">
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
                    <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total price</td>
                  <td></td>
                </tr>
                <tr class="none">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <button @click="checkout(products)">Checkout</button>
                    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
                  </td>
                </tr>
            </tbody>
        </table>
    </div>
  </template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Cart',
  computed: {
    ...mapGetters([
      'getCart',
    ]),
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
