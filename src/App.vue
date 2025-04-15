<script setup>
import JobPost from "@/components/JobPost.vue";
</script>

<template>
  <div class="w-full h-screen bg-gray-50">
    <header class="bg-blue-600 p-4 text-white text-center">
      <h1 class="text-3xl font-bold">Job Listings</h1>
    </header>

    <main class="w-full p-6">
      <JobPost />
    </main>
  </div>
</template>

<style scoped>
/* Full-width and height for body and main content */
.w-full {
  width: 100%;
}

.h-screen {
  height: 100vh;
}

.bg-gray-50 {
  background-color: #f9fafb;
}

.bg-blue-600 {
  background-color: #2563eb;
}

.text-white {
  color: white;
}

.text-center {
  text-align: center;
}

.text-3xl {
  font-size: 2rem;
}

.font-bold {
  font-weight: 700;
}

/* Padding for content */
.p-6 {
  padding: 1.5rem;
}

header {
  padding: 1rem;
  background-color: #2563eb;
}

main {
  padding: 1.5rem;
}
</style>
