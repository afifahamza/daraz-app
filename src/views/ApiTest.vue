<template>
  <div>
    <div class="d-flex justify-center">
      <h1 style="margin-top: 10px">PRODUCTS</h1>

      <div class="mt-4 d-flex justify-end mr-3 ml-auto">
        <v-dialog v-model="dialog" width="700">
          <template v-slot:activator="{ on }">
            <v-btn
              color="deep-orange darken-1"
              class="white--text right-aligned-button ml-auto"
              v-on="on"
            >
              Add Product
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Products
            </v-card-title>
            <v-text-field
              label="Product Name"
              solo
              v-model="productToCreateName"
            ></v-text-field>
            <v-text-field
              label="Product Description"
              solo
              v-model="productToCreateDes"
            ></v-text-field>
            <v-card-actions>
              <v-btn
                color="deep-orange darken-1"
                text
                @click="
                  dialog = false;
                  addToCart();
                "
              >
                Add to Cart
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>

    <div class="d-flex flex-wrap justify-center">
      <v-card
        v-for="product in products"
        :key="product.id"
        width="250px"
        height="360px"
        class="ma-3"
      >
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <div class="text-truncate w-100 ml-2" v-on="on">
              {{ product.name }}
            </div>
          </template>
          <span>{{ product.name }}</span>
        </v-tooltip>

        <v-card-text class="pa-0 d-flex justify-center">
          <v-img :src="product.image" height="200" width="200px"></v-img>
        </v-card-text>

        <div class="d-flex align-start">
          <v-tooltip bottom max-width="250px">
            <template v-slot:activator="{ on }">
              <div
                class="text-caption ml-2 mt-1"
                v-on="on"
                style="max-width: 170px"
              >
                {{ product.description.slice(0, 90) + "..." }}
              </div>
            </template>
            <span>{{ product.description }}</span>
          </v-tooltip>
          <v-btn
            class="ml-auto mt-1 mr-2"
            min-width="45px"
            color="red"
            small
            outlined
            @click="deleteProduct(product.id)"
          >
            <v-icon size="20">mdi-trash-can</v-icon>
          </v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApiTesting",
  data() {
    return {
      products: [],
      productToCreateName: "",
      productToCreateDes: "",
      dialog: false,
    };
  },
  mounted() {
    this.fetchProducts();
  },

  methods: {
    addToCart() {
      let newProductToAdd = {
        name: this.productToCreateName,
        description: this.productToCreateDes,
      };

      this.$axios.post("/products", newProductToAdd).then(() => {
        this.fetchProducts();
      });
    },

    fetchProducts() {
      this.$axios.get("/products").then((resp) => {
        this.products = resp.data;
        console.log(resp.data);
      });
    },
    deleteProduct(id) {
      this.$axios.delete(`/products/${id}`).then(() => {
        this.fetchProducts();
      });
    },
  },

  components: {},
};
</script>
