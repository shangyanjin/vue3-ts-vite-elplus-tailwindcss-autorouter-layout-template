<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="fixed inset-y-0 left-0 w-64 bg-gray-800">
      <div class="flex h-16 items-center justify-center">
        <h1 class="text-xl font-bold text-white">Admin Panel</h1>
      </div>
      <nav class="mt-5 px-2">
        <a href="#" class="group flex items-center px-2 py-2 text-base font-medium rounded-md text-white hover:bg-gray-700">
          Dashboard
        </a>
        <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white">
          Users
        </a>
        <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white">
          Settings
        </a>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="pl-64">
      <!-- Top Header -->
      <header class="bg-white shadow">
        <div class="flex h-16 items-center justify-end px-4">
          <div class="flex items-center">
            <button class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white">
              <span class="sr-only">View notifications</span>
              <!-- Notification Icon -->
              <div class="h-6 w-6 flex items-center justify-center">
                <span class="text-sm">🔔</span>
              </div>
            </button>
            <div class="ml-3">
              <button class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm">
                <span class="sr-only">Open user menu</span>
                <span class="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center text-white">A</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="py-6 px-4 sm:px-6 lg:px-8">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
