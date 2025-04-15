<template>
  <div class="container mx-auto px-4 py-8">
    <header class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Welcome to Our Platform</h1>
      <p class="text-gray-600">Discover the latest updates and articles</p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <article v-for="(article, index) in articles" :key="index" class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="relative">
          <img :src="article.image" :alt="article.title" class="w-full h-48 object-cover">
          <div class="absolute top-4 right-4">
            <font-awesome-icon icon="bookmark" class="text-white text-xl hover:text-yellow-500 cursor-pointer" />
          </div>
        </div>
        <div class="p-6">
          <div class="flex items-center mb-2">
            <font-awesome-icon :icon="article.icon" class="text-blue-500 mr-2" />
            <span class="text-sm text-gray-500">{{ article.category }}</span>
          </div>
          <h2 class="text-xl font-semibold mb-2">{{ article.title }}</h2>
          <p class="text-gray-600 mb-4">{{ article.excerpt }}</p>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <img :src="article.author.avatar" :alt="article.author.name" class="w-8 h-8 rounded-full mr-2">
              <span class="text-sm text-gray-500">{{ article.author.name }}</span>
            </div>
            <span class="text-sm text-gray-400">{{ article.date }}</span>
          </div>
        </div>
      </article>
    </div>

    <div class="mt-8 flex justify-center">
      <button class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 flex items-center">
        <font-awesome-icon icon="sync" class="mr-2" />
        Load More
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const articles = ref([
  {
    title: 'Getting Started with Vue 3',
    excerpt: 'Learn how to build modern web applications with Vue 3 and TypeScript',
    image: 'https://picsum.photos/800/400?random=1',
    category: 'Development',
    icon: 'code',
    author: {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    date: 'Apr 15, 2025'
  },
  {
    title: 'Mastering Tailwind CSS',
    excerpt: 'Discover the power of utility-first CSS framework',
    image: 'https://picsum.photos/800/400?random=2',
    category: 'Design',
    icon: 'paint-brush',
    author: {
      name: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    date: 'Apr 14, 2025'
  },
  {
    title: 'TypeScript Best Practices',
    excerpt: 'Write better code with TypeScript tips and tricks',
    image: 'https://picsum.photos/800/400?random=3',
    category: 'Programming',
    icon: 'laptop-code',
    author: {
      name: 'Mike Johnson',
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    date: 'Apr 13, 2025'
  }
])
</script>
