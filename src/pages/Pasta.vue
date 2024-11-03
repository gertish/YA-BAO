<template>
  <div>
    <div>
      <Gallery />
    </div>
    <div class="grid grid-cols-4 px-52 gap-4">
      <Card v-for="product in products" :key="product.id" v-bind="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchProducts } from '@/api/appwrite'
import type { Product } from '@/types/product'
import Card from '@/components/Card.vue'
import Gallery from '@/components/Gallery.vue'


const products = ref<Product[]>([])

onMounted(async () => {
  const allProducts = await fetchProducts()
  products.value = allProducts.filter(
    product => product.categories_id.$id === '6720cae10025601ece3b',
  )
  console.log('Паста', products.value)
})
</script>
