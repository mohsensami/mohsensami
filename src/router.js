import { createRouter, createWebHashHistory } from 'vue-router';

const Test = () => import('./pages/Test.vue')
const Home = () => import('./pages/Home.vue')
const Resume = () => import('./pages/Resume.vue')
const Blog = () => import('./pages/Blog.vue')
const About = () => import('./pages/About.vue')
const Contact = () => import('./pages/Contact.vue')
const Works = () => import('./pages/Works.vue')
const Django = () => import('./pages/works/Django.vue')
const Vue = () => import('./pages/works/Vue.vue')

const routes = [
    { path: '/test', name: 'test', component: Test },
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/blog', name: 'blog', component: Blog },
    { path: '/resume', name: 'resume', component: Resume },
    { path: '/contact', name: 'contact', component: Contact },
    {   
        path: '/works', 
        name: 'works', 
        component: Works,
        children: [
        {
            path: 'django', 
            name: 'django', 
            component: Django,
        },
        {
            path: 'vue', 
            name: 'vue', 
            component: Vue,
        },
        ]
    },
];

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes
})

export default router;
