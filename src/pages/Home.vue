<template>
  <div>
    <div>
    <Gallery />
  </div>
  <div class="flex justify-center">
    <Reviews />
  </div>
  <div class="grid grid-cols-4 px-52 gap-4">
    <Card
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        :image_url="product.image_url"
    />
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Card from '@/components/Card.vue'
import Gallery from '@/components/Gallery.vue'
import Reviews from '@/components/Reviews.vue'
import { fetchProducts } from '@/api/appwrite.ts'
import type { Product } from '@/types/product'

const products = ref<Product[]>([])

onMounted(async () => {
  products.value = await fetchProducts()
  console.log(products.value)
})
</script>

<style scoped>



</style>

