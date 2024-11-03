<template>
  <div class="bg-white m-auto w-fit w-[1555px]">
    <Header />
  
  <div>
    <router-view />
  </div>
</div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>
