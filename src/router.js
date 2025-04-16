import {createRouter, createWebHistory} from "vue-router";
import Homepage from "@/pages/Homepage.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: Homepage},
        {path: '/job-details/:id', name: 'jobdetails', component: () => import("@/pages/JobDetails.vue")},
    ]
})