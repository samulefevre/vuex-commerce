<template>
  <div>
    <router-link to="/admin/product-add">add new book</router-link>
    <ProductList></ProductList>
  </div>
</template>

<script>
import ProductList from "@/components/admin/ProductList";

export default {
  components: {
    ProductList
  }
};
</script>

<style scoped></style>
