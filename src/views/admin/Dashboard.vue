<template>
  <div>
    <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
    <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="p-5">
          <h3 class="text-lg font-medium text-gray-900">Recent Activity</h3>
          <div class="mt-4 space-y-2">
            <div class="flex items-center text-sm text-gray-600">
              <span class="mr-2">👤</span>
              <span>New user registered</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <span class="mr-2">📊</span>
              <span>Monthly report generated</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <span class="mr-2">⚙️</span>
              <span>System update completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
