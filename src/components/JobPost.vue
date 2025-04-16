<template>
  <div class="max-w-6xl mx-auto p-6 bg-white shadow rounded-lg">
    <h1 class="text-3xl font-semibold mb-6 text-gray-800">📄 Job Listings</h1>
    <EasyDataTable
        theme-color="#1d90ff"
        table-class-name="customize-table"
        header-text-direction="center"
        body-text-direction="center"
        :headers="headers"
        :items="jobPosts"
        :loading="loading"
        :rows-per-page="5"
        alternating
        border-cell
        table-class="w-full text-sm text-left"
    />

    <button @click="clickHnadler('asdasdasd')"></button>
    <div v-if="error" class="text-red-500 text-center mt-4">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import {useRouter} from "vue-router";
const router = useRouter();

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
const clickHnadler = (id) =>{
  router.push(`/job-details/${id}`)
}
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
<style>
.customize-table {
  --easy-table-border: 1px solid #445269;
  --easy-table-row-border: 1px solid #445269;

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: #c1cad4;
  --easy-table-header-background-color: #2d3a4f;

  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-even-row-font-color: #fff;
  --easy-table-body-even-row-background-color: #4c5d7a;

  --easy-table-body-row-font-color: #c0c7d2;
  --easy-table-body-row-background-color: #2d3a4f;
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #2d3a4f;
  --easy-table-body-row-hover-background-color: #eee;

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-footer-background-color: #2d3a4f;
  --easy-table-footer-font-color: #c0c7d2;
  --easy-table-footer-font-size: 14px;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 50px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;


  --easy-table-scrollbar-track-color: #2d3a4f;
  --easy-table-scrollbar-color: #2d3a4f;
  --easy-table-scrollbar-thumb-color: #4c5d7a;;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #2d3a4f;
}
</style>