<template>
  <div>
    <div class="mt-2 d-flex justify-end mr-3">
      <v-dialog v-model="dialog" width="700">
        <template v-slot:activator="{ on }">
          <v-btn
            color="deep-orange darken-1"
            class="white--text right-aligned-button"
            v-on="on"
          >
            Add Product
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2"> Products </v-card-title>
          <v-select
            class="mx-5"
            :items="['Pen', 'mug', 'TV', 'perfume']"
            label="Product*"
            required
            v-model="productToCreateName"
          ></v-select>
          <v-select
            class="mx-5"
            :items="[1, 2, 3, 4]"
            label="Count*"
            required
            v-model="productToCreateCount"
          ></v-select>

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
    <div class="d-flex align-center justify-center">
      <v-card
        v-for="(product, index) in products"
        :key="index"
        width="250px"
        class="ma-2"
      >
        <v-card-title>{{ product.name }}</v-card-title>
        <v-card-text>
          <v-img :src="product.image" height="200" width=""></v-img>
        </v-card-text>
        <v-card-actions>
          <v-btn
            class="ml-auto"
            style="margin-right: 8px"
            color="red"
            small
            outlined
            @click="deleteCart(index)"
          >
            <v-icon size="20">mdi-trash-can</v-icon>
          </v-btn>
        </v-card-actions>
        <div class="d-flex">
          <div class="ml-5 mb-3">
            {{ product.count }}
          </div>
          <v-btn
            x-small
            text
            style="margin-top: 4px"
            class="ml-auto"
            @click="plusCount(index)"
          >
            <v-icon small>mdi-plus</v-icon>
          </v-btn>
          <v-btn
            x-small
            text
            style="margin-top: 4px"
            class="mr-2"
            @click="minusCount(index)"
          >
            <v-icon small>mdi-minus</v-icon>
          </v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productToCreateName: "",
      productToCreateCount: "",

      dialog: false,
      products: [
        {
          name: "pants",
          description: "skinny jeans for men",
          price: 150,
          count: 1,
          total: 150,
          image: require("../assets/skinny-jeans.jpg"),
        },
        {
          name: "Tshirt",
          description: "relaxed fit Tshirt for men, premium quality",
          price: 130,
          count: 1,
          total: 130,
          image: require("../assets/tshirt.jpg"),
        },
        {
          name: "sneakers",
          description: "original Nike sneakers in Pakistan",
          price: 25000,
          count: 1,
          total: 25000,
          image: require("../assets/sneakers.png"),
        },
        {
          name: "jacket",
          description:
            "1st copy Dolce and Gabbana Jacket for men. Relaxed fit. Denim fabric",
          price: 3000,
          count: 1,
          total: 3000,
          image: require("../assets/jacket.jpg"),
        },
        {
          name: "watch",
          description:
            "classic chain watch with butterflyclip, original citizen",
          price: 50000,
          count: 1,
          total: 50000,
          image: require("../assets/watch.jpg"),
        },
      ],
    };
  },
  methods: {
    deleteCart(index) {
      this.products.splice(index, 1);

      // let x = [1,2,3]
      // let y = [...x, 4]
      // y ===> [1,2,3,4]
      // y.slice(0,1) ===> [1]
      // y.slice(2) ===> [3,4]
      // let z = [...y.slice(0,1), 0, ...y.slice(2)]
      // z ===> [1,0,3,4]

      // let x = {a:1, b:2, c:3}
      // let y = {...x, c: 4}
      // y ===> {a:1, b:2, c:4}

      // let products = [{a:1}, {a:2}, {a:3}, {a:4}]
      // let newProducts = [...products.slice(0, 1), { ...products[1], b:2 }, ...products.slice(2)]
      // newProducts ===> [{a:1}, {a:2, b:2}, {a:3}, {a:4}]
    },
    plusCount(index) {
      let newProduct = {
        ...this.products[index],
        count: this.products[index].count + 1,
      };
      this.products.splice(index, 1, newProduct);
    },
    minusCount(index) {
      console.log("lol");
      let newProduct = {
        ...this.products[index],
        count: this.products[index].count - 1,
      };
      if (newProduct.count == 0) {
        this.deleteCart(index);
      } else this.products.splice(index, 1, newProduct);
    },
    totalCount(index) {
      this.products[index].count;
    },
    addToCart() {
      let newProductToAdd = {
        name: this.productToCreateName,
        count: this.productToCreateCount,
      };

      if (this.productToCreateName == "Pen") {
        newProductToAdd.image = require("../assets/pen.jpg");
      }
      this.products = [...this.products, newProductToAdd];
    },
  },
};
</script>
