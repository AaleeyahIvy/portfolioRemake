
import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from "./views/HomeView.vue";
import ProjectsView from './views/ProjectsView.vue';
import ArtView from './views/ArtView.vue';
import BlogView from './views/BlogView.vue';
import ContactView from './views/ContactView.vue';
import ResumeView from './views/ResumeView.vue';
import NotFoundView from './views/NotFoundView.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView
  },
  {
    path: "/art",
    name: "art-gallery",
    component: ArtView
  },
  {
    path:"/blog",
    name: "blog",
    component: BlogView
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView
  },
  {
    path: "/resume",
    name: "resume",
    component: ResumeView
  },
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: NotFoundView
  }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router; 

