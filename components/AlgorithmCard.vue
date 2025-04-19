<template>
    <NuxtLink :to="to" class="block p-6 bg-white rounded-lg shadow hover:shadow-md transition border border-gray-100">
      <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
      <p class="text-gray-600">{{ description }}</p>
    </NuxtLink>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    description: String,
    to: String
  })
  </script>
  