// Composables
import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView.vue";
import DownloadPage from "@/views/DownloadPage.vue";

const routes = [
  {path: '/', component: MainView},
  {path: '/download/:video', component: DownloadPage},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
