<template>
    <div class="card bg-white rounded-lg shadow-md p-4">
        <img
            :src="image_url"
            :alt="name"
            class="rounded-lg w-full object-cover"
        />
        <div class="mt-4">
            <p class="text-lg font-semibold text-black">{{ name }}</p>
            <p class="text-sm text-gray-500 mt-2">{{ description }}</p>
        </div>
        <div class="mt-4 flex items-center justify-between">
            <span class="text-lg font-bold text-black">от {{ price }} ₽</span>
            <button
                class="bg-rose-600 text-white px-4 py-2 rounded-lg transition hover:bg-pink-600"
            >
                В корзину
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    name: String,
    description: String,
    price: Number,
    image_url: String,
});
</script>

<style scoped>
.card {
    transition: transform 0.2s ease-in-out;
}
.card:hover {
    transform: scale(1.05);
}
</style>
