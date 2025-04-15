<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Welcome to Our Platform</h1>
        <p class="text-xl text-gray-600">Choose your destination</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Admin Section -->
        <router-link to="/admin" class="transform hover:scale-105 transition-transform duration-200">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="p-6">
              <div class="flex items-center justify-center mb-4">
                <font-awesome-icon icon="user-shield" class="text-4xl text-purple-500" />
              </div>
              <h2 class="text-2xl font-semibold text-center mb-2">Admin</h2>
              <p class="text-gray-600 text-center">Manage your dashboard and settings</p>
            </div>
          </div>
        </router-link>

        <!-- Merchant Section -->
        <router-link to="/merchant" class="transform hover:scale-105 transition-transform duration-200">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="p-6">
              <div class="flex items-center justify-center mb-4">
                <font-awesome-icon icon="store" class="text-4xl text-green-500" />
              </div>
              <h2 class="text-2xl font-semibold text-center mb-2">Merchant</h2>
              <p class="text-gray-600 text-center">Manage your products and sales</p>
            </div>
          </div>
        </router-link>

        <!-- About Section -->
        <router-link to="/about" class="transform hover:scale-105 transition-transform duration-200">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="p-6">
              <div class="flex items-center justify-center mb-4">
                <font-awesome-icon icon="info-circle" class="text-4xl text-yellow-500" />
              </div>
              <h2 class="text-2xl font-semibold text-center mb-2">About</h2>
              <p class="text-gray-600 text-center">Learn more about our platform</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>
