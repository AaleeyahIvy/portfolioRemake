import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutComponent from "../views/AboutView.vue";
import MyProjectsComponent from "../views/MyProjectsView.vue";
import ContactComponent from "../views/ContactView.vue";
import MyArtGalleryComponent from "../views/MyArtGalleryView.vue";
import MyBlogComponent from "../views/MyBlogView.vue";
import MyResumeComponent from "../views/MyResumeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutComponent
  },
  {
    path: "/projects",
    name: "projects",
    component: MyProjectsComponent
  },
  {
    path: "/art",
    name: "art-gallery",
    component: MyArtGalleryComponent
  },
  {
    path:"/blog",
    name: "blog",
    component: MyBlogComponent
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactComponent
  },
  {
    path: "/resume",
    name: "resume",
    component: MyResumeComponent
  },
  {
    path: "*",
    redirect: { name: "home" }
  
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router; 

