<script setup lang="ts">
import { useCart } from "@/composables/useCart";
import { onMounted, ref } from "vue";

const { addToCart } = useCart();

const products = ref<Product[]>([]);
onMounted(() => {
  products.value = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
    },
  ];
});
</script>

<template>
  <div class="about">
    <h1>Products</h1>
    <ul>
      <li v-for="product in products">
        <div>
          <h3>{{ product.name }} ¥ {{ product.price }}</h3>
          <el-button @click="addToCart(product)">Add to cart</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
