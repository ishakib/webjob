<template>
  <div class="max-w-6xl mx-auto p-6 bg-white shadow rounded-lg">
    <h1 class="text-3xl font-semibold mb-6 text-gray-800">📄 Job Deatils</h1>
    <EasyDataTable
        :headers="headers"
        :items="jobPosts"
        :loading="loading"
        :rows-per-page="5"
        alternating
        border-cell
        table-class="w-full text-sm text-left"
    />
    <p>{{route.params.id}}</p>
    <div v-if="error" class="text-red-500 text-center mt-4">
      {{ error }}
    </div>
  </div>
</template>

<script setup>


import {ref, onMounted} from 'vue';
import EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import {useRoute} from "vue-router";
const route = useRoute()
const loading = ref(true)
const error = ref(null)
const jobPosts = ref([])

const headers = [
  {text: 'Company', value: 'company_name', sortable: true},
  {text: 'Job ID', value: 'uid'},
  {text: 'Title', value: 'title', sortable: true},
  {text: 'Description', value: 'description'},
  {text: 'Views', value: 'view_count', sortable: true},
]

const fetchJobPosts = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/job-posts`)
    if (!response.ok) throw new Error('Network response was not ok')
    const data = await response.json()
    jobPosts.value = data.data.jobs
  } catch (err) {
    error.value = 'Failed to load job posts.'
  } finally {
    loading.value = false
  }
}

onMounted(async ()=>{
  await fetchJobPosts();
})
</script>
