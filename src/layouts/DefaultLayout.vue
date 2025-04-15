<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow">
      <nav class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between items-center">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <h1 class="text-xl font-bold text-gray-800">Default Layout</h1>
            </div>
          </div>
          <div class="flex items-center">
            <a href="#" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-white shadow mt-auto">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <p class="text-center text-sm text-gray-500">&copy; 2025 Default Layout. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>
