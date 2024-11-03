<template>
  <header class="bg-white shadow-sm py-4 w-3/4 m-auto">
    <div class="container mx-auto flex items-center justify-between px-4">
      <div class="flex items-center gap-4">
        <router-link to="/">
          <img src="../../icons/Logo.svg" alt="Logo" class="w-16 h-16" />
        </router-link>
        <div>
          <h1 class="text-4xl font-bold font-body">YA BAO</h1>
          <p class="text-sm font-body">Дух китайской еды</p>
        </div>
      </div>

      <div>
        <p class="text-lg font-semibold font-body">
          Доставка пасты <span class="text-red-500">Москва</span>
        </p>
        <p class="text-sm font-body">
          Время доставки <span class="text-softPink">•</span> от 31 мин
        </p>
      </div>

      <div class="flex items-center gap-4">
        <button
          class="px-7 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200"
        >
          <p class="text-gray-500 font-body font-bold">Заказать звонок</p>
        </button>
        <span class="text-lg font-bold text-pink-600 font-body">
          8 800 333-36-62
        </span>
      </div>
    </div>

    <nav class="container mx-auto mt-4 px-4">
      <ul
        class="flex items-center justify-between text-sm font-medium text-black"
      >
        <div class="flex items-center gap-5 ml-14">
          <li><router-link to="/Паста">Паста</router-link></li>
          <li><router-link to="/Пицца">Пицца</router-link></li>
          <li><router-link to="/Супы">Супы</router-link></li>
          <li><router-link to="/Салаты">Салаты</router-link></li>
          <li><router-link to="/Антипасто">Антипасто</router-link></li>
          <li><router-link to="/Напитки">Напитки</router-link></li>
          <li><router-link to="/Десерты">Десерты</router-link></li>
          <li>Акции</li>
          <li>Комбо</li>
          <li><router-link to="/Контакты">Контакты</router-link></li>
          <button
            class="flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-md transition hover:bg-pink-600 font-body"
          >
            Корзина
            <div class="w-px h-5 bg-white"></div>
            <span class="font-bold">1</span>
          </button>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
// const categories = [
//   { name: 'Паста' },
//   { name: 'Пицца' },
//   { name: 'Супы' },
//   { name: 'Салаты' },
//   { name: 'Антипасто' },
//   { name: 'Напитки' },
//   { name: 'Десерты' },
//   { name: 'Акции' },
//   { name: 'Комбо' },
//   { name: 'Контакты' },
// ]
</script>
