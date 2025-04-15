<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Welcome to Our Platform</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <router-link to="/" class="transform hover:scale-105 transition-transform duration-200">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <div class="text-2xl mb-4">🏠</div>
              <h2 class="text-xl font-semibold text-gray-900 mb-2">Default Portal</h2>
              <p class="text-gray-600">Access the main website and general information</p>
            </div>
          </router-link>
          
          <router-link to="/admin" class="transform hover:scale-105 transition-transform duration-200">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <div class="text-2xl mb-4">⚙️</div>
              <h2 class="text-xl font-semibold text-gray-900 mb-2">Admin Portal</h2>
              <p class="text-gray-600">Manage system settings and users</p>
            </div>
          </router-link>
          
          <router-link to="/merchant" class="transform hover:scale-105 transition-transform duration-200">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <div class="text-2xl mb-4">💼</div>
              <h2 class="text-xl font-semibold text-gray-900 mb-2">Merchant Portal</h2>
              <p class="text-gray-600">Manage your products and orders</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
