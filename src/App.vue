<template>
  <div class="bg-white m-auto w-fit">
    <Header />
  
  <div>
    <router-view />
  </div>
</div>
</template>

<script setup>
import Header from '@/components/Header.vue'
</script>
