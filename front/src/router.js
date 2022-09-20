import { createRouter, createWebHashHistory } from 'vue-router';

const Home = () => import('./pages/Home.vue')
const Resume = () => import('./pages/Resume.vue')
const Works = () => import('./pages/Works.vue')
const Blog = () => import('./pages/Blog.vue')
const About = () => import('./pages/About.vue')
const Contact = () => import('./pages/Contact.vue')

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/works', name: 'works', component: Works },
    { path: '/blog', name: 'blog', component: Blog },
    { path: '/resume', name: 'resume', component: Resume },
    { path: '/contact', name: 'contact', component: Contact },
];

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes
})

export default router;
