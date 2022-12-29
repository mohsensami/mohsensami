<template>
<!-- PRELOADER -->
<!-- <div id="preloader">
        <div class="loader_line"></div>
    </div> -->
    <!-- /PRELOADER -->
    <div :class="{'dark' : isDark}" class="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full bg-[url('../img/bg.jpeg')] dark:bg-[url('../img/bgtwo.jpeg')]">
        <div class="section-bg">
            <div class="w-full flex justify-between px-4">
                <!-- website Logo -->
                <a href="/">
                    <!-- <img class="h-[26px] lg:h-[32px]" src="https://bostamihtml.ibthemespro.com/images/logo/logo.png" alt="logo" /> -->
                    <!-- <img class="h-[26px] lg:h-[64px]" src="../public/vite.svg" alt="logo" /> -->
                </a>
                <div class="flex items-center">
                    <!-- dark and light mode toggle -->
                    <button id="theme-toggle" type="button" class="dark-light-btn">
                        <i  @click="makeDark()" v-show="!isDark" id="theme-toggle-dark-icon" class="fa-solid text-2xl fa-moon animate-wiggle"></i>
                        <i  @click="makeLight()" v-show="isDark" id="theme-toggle-light-icon" class="fa-solid fa-sun text-yellow-500 text-2xl animate-wiggle"></i>
                    </button>
                    <!-- mobile toggle button -->
                    <button @click="showMenu=!showMenu" id="menu-toggle" type="button" class="menu-toggle-btn block lg:hidden">
                        <i id="menu-toggle-open-icon" class="fa-solid fa-bars text-xl sm:hidden"></i>
                        <i id="menu-toggle-close-icon" class="fa-solid fa-xmark text-xl hidden  "></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- mobile menu start -->
        <nav v-if="showMenu" id="navbar" class="block lg:hidden">
            <ul
                class="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]">
                <li>
                    <router-link :to="{name: 'home'}" class="mobile-menu-items" >
                        <span class="mr-2 text-xl">
                            <i class="fa-regular fa-user"></i>
                        </span>About </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'resume'}" class="mobile-menu-items">
                        <span class="mr-2 text-xl">
                            <i class="fa-regular fa-file-lines"></i>
                        </span>Resume </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'contact'}" class="mobile-menu-items">
                        <span class="mr-2 text-xl">
                            <i class="fa-solid fa-address-book"></i>
                        </span> Contact </router-link>
                </li>
            </ul>
        </nav>
        <!-- mobile menu end -->

        <div class="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
            <!-- sidber personal info -->
            <div class="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
                <div
                    class="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
                    <!-- profile image -->
                    <img src="../public/img/me.jpg"
                        class="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
                        alt="about" />
                    <div class="pt-[100px] pb-8">
                        <h2 class="mt-6 mb-1 text-[26px] font-semibold dark:text-white"> Mohsen Sami </h2>
                        <h3
                            class="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
                            Web Developer </h3>
                        <div class="flex justify-center space-x-3">
                            <!-- facebook icon and link -->
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <span class="socialbtn text-[#1773EA]">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </span>
                            </a>
                            <!-- twitter icon and link -->
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <span class="socialbtn text-[#1C9CEA]">
                                    <i class="fa-brands fa-twitter"></i>
                                </span>
                            </a>
                            <!-- dribbble icon and link -->
                            <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                                <span class="socialbtn text-[#e14a84]">
                                    <i class="fa-brands fa-dribbble"></i>
                                </span>
                            </a>
                            <!-- linkedin icon and link -->
                            <a href="https://www.linkedin.com/in/mohsensami/" target="_blank" rel="noopener noreferrer">
                                <span class="socialbtn text-[#0072b1]">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </span>
                            </a>
                        </div>
                        <!-- personal infomation start -->
                        <div class="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                            <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                                <span class="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                                    <i class="fa-solid fa-mobile-screen-button"></i>
                                </span>
                                <div class="text-left ml-2.5">
                                    <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Phone </p>
                                    <p class="dark:text-white">+98 903 345 1850</p>
                                </div>
                            </div>
                            <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                                <span class="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                                    <i class="fa-solid fa-envelope-open-text"></i>
                                </span>
                                <div class="text-left ml-2.5">
                                    <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Email </p>
                                    <p class="dark:text-white">mohsensami88@gmail.com</p>
                                </div>
                            </div>
                            <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                                <span class="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                                    <i class="fa-solid fa-location-dot"></i>
                                </span>
                                <div class="text-left ml-2.5">
                                    <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Location </p>
                                    <p class="dark:text-white">Iran Tehran</p>
                                </div>
                            </div>
                            <div class="flex py-2.5">
                                <span class="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                                    <i class="fa-solid fa-calendar-days"></i>
                                </span>
                                <div class="text-left ml-2.5">
                                    <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Birthday </p>
                                    <p class="dark:text-white">Sep 13, 1988</p>
                                </div>
                            </div>
                        </div>
                        <!-- personal infomation end-->
                        <!-- dowanload button -->
                        <a target="_blank" href="https://www.linkedin.com/in/mohsensami/" class="dowanload-btn">
                            <img class="mr-3" src="../public/img/dowanload.png" alt="icon" /> Download CV </a>
                    </div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-8">
                <!-- header for mobile devices start -->
                <header
                    class="lg:w-[376px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111]">
                    <nav class="hidden lg:block">
                        <ul class="flex justify-between text-sm title_color">
                            <li class="menu-item">
                                <router-link class="flex-col flex-center bg-gray-100 rounded-md w-[90px] h-[80px] hover:bg-gradient-to-r from-red-light to-red-dark hover:text-white custom-transition" :to="{name: 'home'}">
                                    <span class="text-xl mb-1">
                                        <i class="fa-regular fa-user"></i>
                                    </span> <span>About</span>
                                </router-link>
                            </li>
                            <li class="menu-item">
                                <router-link class="flex-col flex-center bg-gray-100 rounded-md w-[90px] h-[80px] hover:bg-gradient-to-r from-red-light to-red-dark hover:text-white custom-transition" :to="{name: 'resume'}">
                                    <span class="text-xl mb-1">
                                        <i class="fas fa-briefcase"></i>
                                    </span> Experience
                                </router-link>
                            </li>
                            <li class="menu-item">
                                <router-link class="flex-col flex-center bg-gray-100 rounded-md w-[90px] h-[80px] hover:bg-gradient-to-r from-red-light to-red-dark hover:text-white custom-transition" :to="{name: 'contact'}">
                                    <span class="text-xl mb-1">
                                        <i class="fa-solid fa-address-book"></i>
                                    </span> Contact
                                </router-link>
                            </li>
                            
                        </ul>
                    </nav>
                </header>
                <!-- header for mobile devices end -->

                <!--section start -->
                <router-view></router-view>
                <!-- section start -->
            </div>
        </div>
    </div>
    <!-- End bgHomeBg -->
</template>


<script setup>
import { ref, onMounted } from "vue";
const isDark = ref(false)
const showMenu = ref(false)

const makeDark = () => {
  isDark.value = true;
  document.documentElement.classList.add('dark')
  localStorage.setItem('darkmode', 'dark');
}

const makeLight = () => {
  isDark.value = false;
  document.documentElement.classList.remove('dark')
  localStorage.setItem('darkmode', 'light');
}

onMounted(() => {
  if(localStorage.getItem('darkmode') == 'light'){
      isDark.value = false;
      document.documentElement.classList.remove('dark')
  } 
  if(localStorage.getItem('darkmode') == 'dark'){
      isDark.value = true;
      document.documentElement.classList.add('dark')
  }
})
</script>


<style>
.mobile-menu-items.router-link-active {
    color: red;
}
</style>
