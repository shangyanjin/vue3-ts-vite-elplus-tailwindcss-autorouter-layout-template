<template>
  <div class="bg-white shadow rounded-lg">
    <div class="px-4 py-5 sm:px-6 flex justify-between items-center">
      <h2 class="text-xl font-semibold text-gray-900">Products</h2>
      <button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Add Product
      </button>
    </div>
    <div class="border-t border-gray-200">
      <ul class="divide-y divide-gray-200">
        <li v-for="i in 3" :key="i" class="px-4 py-4 sm:px-6">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div class="h-12 w-12 bg-gray-200 rounded-md"></div>
              <div class="ml-4">
                <h3 class="text-sm font-medium text-gray-900">Product {{ i }}</h3>
                <p class="text-sm text-gray-500">$99.99</p>
              </div>
            </div>
            <div class="flex space-x-2">
              <button class="text-blue-600 hover:text-blue-800">Edit</button>
              <button class="text-red-600 hover:text-red-800">Delete</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
