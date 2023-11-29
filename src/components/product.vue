<template>
<div>
  <div v-for="product in ProductStore.products" :key="product.id">
    <pro :id="product.id" :title="product.title"/>

  </div>

</div>
 </template> 
 <script setup lang="ts">
 import{useProductStore} from '../store/product'
import pro from './pro.vue';

  const ProductStore = useProductStore();
  defineProps<{ id: string ,title:string}>()
 </script>
 