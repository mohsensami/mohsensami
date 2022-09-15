<template>
<!-- PRELOADER -->
<!-- <div id="preloader">
        <div class="loader_line"></div>
    </div> -->
    <!-- /PRELOADER -->

    <div class="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full bg-[url('../img/bg.jpeg')] dark:bg-[url('../img/bgtwo.jpeg')]">
        <div class="container section-bg">
            <div class="w-full flex justify-between px-4">
                <!-- website Logo -->
                <a href="/">
                    <!-- <img class="h-[26px] lg:h-[32px]" src="https://bostamihtml.ibthemespro.com/images/logo/logo.png" alt="logo" /> -->
                    <img class="h-[26px] lg:h-[64px]" src="../public/vite.svg" alt="logo" />
                </a>
                <div class="flex items-center">
                    <!-- dark and light mode toggle -->
                    <button @click="toggleDarkMode()" id="theme-toggle" type="button" class="dark-light-btn">
                        <i v-show="isDark" id="theme-toggle-dark-icon" class="fa-solid text-xl fa-moon"></i>
                        <i v-show="!isDark" id="theme-toggle-light-icon" class="fa-solid fa-sun text-xl"></i>
                    </button>
                    <!-- mobile toggle button -->
                    <button id="menu-toggle" type="button" class="menu-toggle-btn sm:hidden">
                        <i id="menu-toggle-open-icon" class="fa-solid fa-bars text-xl sm:hidden"></i>
                        <i id="menu-toggle-close-icon" class="fa-solid fa-xmark text-xl hidden  "></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- mobile menu start -->
        <nav id="navbar" class="hidden lg:hidden">
            <ul
                class="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]">
                <li>
                    <a class="mobile-menu-items-active" href="./aboutOne.html">
                        <span class="mr-2 text-xl">
                            <i class="fa-regular fa-user"></i>
                        </span>About </a>
                </li>
                <li>
                    <a class="mobile-menu-items" href="./resumeOne.html">
                        <span class="mr-2 text-xl">
                            <i class="fa-regular fa-file-lines"></i>
                        </span>Resume </a>
                </li>
                <li>
                    <a class="mobile-menu-items" href="./portfiloOne.html">
                        <span class="mr-2 text-xl">
                            <i class="fas fa-briefcase"></i>
                        </span>Works </a>
                </li>
                <li>
                    <a class="mobile-menu-items" href="./blogOne.html">
                        <span class="mr-2 text-xl">
                            <i class="fa-brands fa-blogger"></i>
                        </span>Blogs </a>
                </li>
                <li>
                    <a class="mobile-menu-items" href="./contactOne.html">
                        <span class="mr-2 text-xl">
                            <i class="fa-solid fa-address-book"></i>
                        </span> Contact </a>
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
                    <img src="https://i.pravatar.cc/450"
                        class="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
                        alt="about" />
                    <div class="pt-[100px] pb-8">
                        <h2 class="mt-6 mb-1 text-[26px] font-semibold dark:text-white"> Monalisa Ashley </h2>
                        <h3
                            class="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
                            Ui/Ux Designer </h3>
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
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
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
                                    <p class="dark:text-white">+123 456 7890</p>
                                </div>
                            </div>
                            <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                                <span class="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                                    <i class="fa-solid fa-envelope-open-text"></i>
                                </span>
                                <div class="text-left ml-2.5">
                                    <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Email </p>
                                    <p class="dark:text-white">example@mail.com</p>
                                </div>
                            </div>
                            <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                                <span class="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                                    <i class="fa-solid fa-location-dot"></i>
                                </span>
                                <div class="text-left ml-2.5">
                                    <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Location </p>
                                    <p class="dark:text-white">Hong kong china</p>
                                </div>
                            </div>
                            <div class="flex py-2.5">
                                <span class="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                                    <i class="fa-solid fa-calendar-days"></i>
                                </span>
                                <div class="text-left ml-2.5">
                                    <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Birthday </p>
                                    <p class="dark:text-white">May 27, 1990</p>
                                </div>
                            </div>
                        </div>
                        <!-- personal infomation end-->
                        <!-- dowanload button -->
                        <button class="dowanload-btn">
                            <img class="mr-3" src="../public/img/dowanload.png" alt="icon" /> Download CV </button>
                    </div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-8">
                <!-- header for mobile devices start -->
                <header
                    class="lg:w-[560px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111]">
                    <nav class="hidden lg:block">
                        <ul class="flex justify-between text-sm title_color">
                            <li>
                                <router-link class="flex-col flex-center bg-gray-100 rounded-md w-[80px] h-[80px] hover:bg-gradient-to-r from-red-light to-red-dark hover:text-white custom-transition" :to="{name: 'home'}">
                                    <span class="text-xl mb-1">
                                        <i class="fa-regular fa-user"></i>
                                    </span> <span>About</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link class="flex-col flex-center bg-gray-100 rounded-md w-[80px] h-[80px] hover:bg-gradient-to-r from-red-light to-red-dark hover:text-white custom-transition" :to="{name: 'resume'}">
                                    <span class="text-xl mb-1">
                                        <i class="fa-regular fa-file-lines"></i>
                                    </span> Resume
                                </router-link>
                            </li>
                            <li>
                                <router-link class="flex-col flex-center bg-gray-100 rounded-md w-[80px] h-[80px] hover:bg-gradient-to-r from-red-light to-red-dark hover:text-white custom-transition" :to="{name: 'works'}">
                                    <span class="text-xl mb-1">
                                        <i class="fas fa-briefcase"></i>
                                    </span> Works
                                </router-link>
                            </li>
                            <li>
                                <router-link class="flex-col flex-center bg-gray-100 rounded-md w-[80px] h-[80px] hover:bg-gradient-to-r from-red-light to-red-dark hover:text-white custom-transition" :to="{name: 'blog'}">
                                    <span class="text-xl mb-1">
                                        <i class="fa-brands fa-blogger"></i>
                                    </span> Blog
                                </router-link>
                            </li>
                            <li>
                                <router-link class="flex-col flex-center bg-gray-100 rounded-md w-[80px] h-[80px] hover:bg-gradient-to-r from-red-light to-red-dark hover:text-white custom-transition" :to="{name: 'contact'}">
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
import { ref } from "@vue/reactivity";

  let isDark = ref('true')
function toggleDarkMode() {
  // document.documentElement.classList.toggle('dark');
  isDark = !(isDark.value);

  if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
}
</script>


<style>
/* .dark-light-btn {
  display: flex;
  height: 40px;
  width: 40px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.dark-light-btn:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(239 64 96 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.dark .dark-light-btn {
  --tw-bg-opacity: 1;
  background-color: rgb(77 77 77 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.dark .dark-light-btn:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(239 64 96 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.resume-btn {
  cursor: default;
  border-radius: 0.5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(237 242 242 / var(--tw-bg-opacity));
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  --tw-text-opacity: 1;
  color: rgb(68 86 108 / var(--tw-text-opacity));
}

.dark .resume-btn {
  --tw-bg-opacity: 1;
  background-color: rgb(28 28 28 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(166 166 166 / var(--tw-text-opacity));
}

.socialbtn {
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(243 246 246 / var(--tw-bg-opacity));
  --tw-gradient-from: #FA5252;
  --tw-gradient-to: rgb(250 82 82 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-to: #DD2476;
  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-item {
  margin-left: 0.625rem;
  margin-right: 0.625rem;
  display: flex;
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  --tw-bg-opacity: 1;
  background-color: rgb(243 246 246 / var(--tw-bg-opacity));
  --tw-gradient-from: #FA5252;
  --tw-gradient-to: rgb(250 82 82 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-to: #DD2476;
  font-family: Poppins, sans-serif;
  font-size: .8125rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgb(68 86 108 / var(--tw-text-opacity));
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-item:hover {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.dark .menu-item {
  --tw-bg-opacity: 1;
  background-color: rgb(33 36 37 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(166 166 166 / var(--tw-text-opacity));
}

.dark .menu-item:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.menu-toggle-btn {
  margin-left: 0.75rem;
  height: 40px;
  width: 40px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-toggle-btn:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(239 64 96 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.about-box {
  display: flex;
  gap: 1rem;
  border-radius: 0.75rem;
  --tw-border-opacity: 1;
  border-color: rgb(33 36 37 / var(--tw-border-opacity));
  padding: 1.5rem;
}

.dark .about-box {
  border-width: 2px;
}

.after-effect {
  position: relative;
  display: inline-block;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-gradient-from: #FA5252;
  --tw-gradient-to: rgb(250 82 82 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-to: #DD2476;
  font-family: Roboto Slab, serif;
  font-size: 2.5rem;
  font-weight: 700;
}

.after-effect::after {
  position: absolute;
  top: 50%;
  height: 0.125rem;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  border-radius: 0.375rem;
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-content: "";
  content: var(--tw-content);
}

.dark .after-effect {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.dowanload-btn {
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  border-radius: 35px;
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-gradient-from: #FA5252;
  --tw-gradient-to: rgb(250 82 82 / 0);
  --tw-gradient-from: #DD2476;
  --tw-gradient-to: rgb(221 36 118 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-to: #DD2476;
  --tw-gradient-to: #fa5252ef;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1.125rem;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  transition-timing-function: linear;
}

.dowanload-btn:hover {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}
.router-link-active {
  margin-left: 0.625rem;
  margin-right: 0.625rem;
  display: flex;
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  --tw-bg-opacity: 1;
  background-color: rgb(243 246 246 / var(--tw-bg-opacity));
  --tw-gradient-from: #FA5252;
  --tw-gradient-to: rgb(250 82 82 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-to: #DD2476;
  font-family: Poppins, sans-serif;
  font-size: .8125rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgb(68 86 108 / var(--tw-text-opacity));
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.router-link-active:hover {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.dark .router-link-active {
  --tw-bg-opacity: 1;
  background-color: rgb(33 36 37 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(166 166 166 / var(--tw-text-opacity));
}

.dark .router-link-active:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.section-bg {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 100%) {
  .section-bg {
    max-width: 100%;
  }
}

@media (min-width: 992px) {
  .section-bg {
    max-width: 992px;
  }
}

@media (min-width: 1280px) {
  .section-bg {
    max-width: 1280px;
  }
}

.section-bg {
  display: flex;
  width: 100%;
  justify-content: space-between;
  --tw-bg-opacity: 1;
  background-color: rgb(243 246 246 / var(--tw-bg-opacity));
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.dark .section-bg {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}

@media (min-width: 1024px) {
  .section-bg {
    background-color: transparent;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 50px;
  }

  .dark .section-bg {
    background-color: transparent;
  }
} */
</style>
