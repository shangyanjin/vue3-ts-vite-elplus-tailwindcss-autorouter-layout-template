<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-blue-600">
      <nav class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between items-center">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <h1 class="text-xl font-bold text-white">Merchant Portal</h1>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <a href="#" class="text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-medium">Orders</a>
            <a href="#" class="text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-medium">Products</a>
            <a href="#" class="text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-medium">Analytics</a>
            <div class="relative">
              <button class="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white">
                <span class="h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center text-white">M</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <!-- Stats -->
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-6">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="text-blue-600 text-2xl">💰</span>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Total Sales</dt>
                  <dd class="text-lg font-medium text-gray-900">$23,456</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="text-blue-600 text-2xl">📦</span>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Orders</dt>
                  <dd class="text-lg font-medium text-gray-900">156</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="text-blue-600 text-2xl">⭐</span>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Rating</dt>
                  <dd class="text-lg font-medium text-gray-900">4.8/5.0</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-white shadow mt-auto">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <p class="text-center text-sm text-gray-500">&copy; 2025 Merchant Portal. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>
