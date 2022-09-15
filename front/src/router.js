import { createRouter, createWebHashHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Resume from './pages/Resume.vue';
import Works from './pages/Works.vue';
import Blog from './pages/Blog.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';

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
