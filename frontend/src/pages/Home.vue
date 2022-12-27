<template>
  <!-- about me section start -->
  <div>
    <div class="lg:rounded-2xl bg-white dark:bg-[#111111] dark:text-white">
      <div class="pt-12 md:pt-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <!-- about page title -->
        <div class="flex items-center justify-center md:justify-start space-x-2">
          <i class="fa-solid text-3xl text-[#F95054] fa-user"></i>
          <h2 class="text-2xl dark:text-white font-medium">About Me</h2>
        </div>
        <!-- personal info for mobile devices start -->
        <div class="lg:hidden">
          <div class="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
            <!-- profile image  -->
            <img src="../../public/img/me.jpg" class="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]" alt="about" />
            <div class="pt-[100px] pb-8">
              <h2 class="mt-6 mb-1 text-[26px] font-semibold dark:text-white">Monalisa Ashley</h2>
              <h3 class="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">Ui/Ux Designer</h3>

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

              <!-- personal info start -->
              <div class="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                  <span class="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                    <i class="fa-solid fa-mobile-screen-button"></i>
                  </span>
                  <div class="text-left ml-2.5">
                    <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Phone</p>
                    <p class="dark:text-white">+123 456 7890</p>
                  </div>
                </div>

                <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                  <span class="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                    <i class="fa-solid fa-envelope-open-text"></i>
                  </span>
                  <div class="text-left ml-2.5">
                    <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Email</p>
                    <p class="dark:text-white">example@mail.com</p>
                  </div>
                </div>

                <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                  <span class="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  <div class="text-left ml-2.5">
                    <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Location</p>
                    <p class="dark:text-white">Hong kong china</p>
                  </div>
                </div>

                <div class="flex py-2.5">
                  <span class="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                    <i class="fa-solid fa-calendar-days"></i>
                  </span>
                  <div class="text-left ml-2.5">
                    <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]">Birthday</p>
                    <p class="dark:text-white">May 27, 1990</p>
                  </div>
                </div>
              </div>
              <!-- personal info end -->

              <!-- dowanload button -->
              <button class="dowanload-btn"><img class="mr-3" src="https://www.linkedin.com/in/mohsensami/" alt="icon" /> Download CV</button>
            </div>
          </div>
        </div>
        <!-- personal info for mobile devices end -->

        <div class="lg:grid grid-cols-12 md:gap-10 pt-4 items-center hidden">
          <div class="col-span-12 space-y-2.5">
            <div class="bg-[#f8fbfb] lg:p-4 rounded-xl dark:bg-transparent dark:border-[#212425] dark:border-2">
              <p class="text-[#44566c] dark:text-white leading-9 ">
                A Back-end engineer with many yaers of professional experience designing and developing reusable and scalable web applications. Enthuasiastic about acquiring new skills from other engineers. Proficent in Python, Django, PHP, Wordpress, Javascript, vuejs and modern web ecosystem. In the prior position, made several APIs, websites, dashboards, CMSes and had experience of refactoring and writing more maintainable and efficient code.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <!-- working section start -->
      <div class="container bg-color-810 dark:bg-[#0D0D0D] py-8 px-2 sm:px-5 md:px-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="col-span-2">
            <div class="flex items-center space-x-2 mb-6 justify-center md:justify-start">
              <i class="fa-solid text-3xl text-[#F95054] fa-briefcase"></i>
              <h4 class="text-2xl dark:text-white font-medium ">Working Skills</h4>
            </div>

            <div class="mb-5">
              <div class="flex justify-between mb-1">
                <span class="font-semibold text-[#526377] dark:text-[#A6A6A6]">python</span>
                <span class="font-semibold text-[#526377] dark:text-[#A6A6A6">90%</span>
              </div>
              <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                <div class="bg-[#5185d4] h-1 rounded-full" style="width: 90%"></div>
              </div>
            </div>

            <div class="mb-5">
              <div class="flex justify-between mb-1">
                <span class="font-semibold text-[#526377] dark:text-[#A6A6A6]">Django</span>
                <span class="font-semibold text-[#526377] dark:text-[#A6A6A6">90%</span>
              </div>
              <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                <div class="bg-[#317d1c] h-1 rounded-full" style="width: 90%"></div>
              </div>
            </div>


            <div class="mb-5">
              <div class="flex justify-between mb-1">
                <span class="font-semibold text-[#526377] dark:text-[#A6A6A6]">JavaScript</span>
                <span class="font-semibold text-[#526377] dark:text-[#A6A6A6">80%</span>
              </div>
              <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                <div class="bg-[#f9e33e] h-1 rounded-full" style="width: 80%"></div>
              </div>
            </div>

            <div class="mb-5">
              <div class="flex justify-between mb-1">
                <span class="font-semibold text-[#526377] dark:text-[#A6A6A6]">Vue Js</span>
                <span class="font-semibold text-[#526377] dark:text-[#A6A6A6">70%</span>
              </div>
              <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                <div class="bg-[#6ba930] h-1 rounded-full" style="width: 70%"></div>
              </div>
            </div>

            <div class="mb-5">
              <div class="flex justify-between mb-1">
                <span class="font-semibold text-[#526377] dark:text-[#A6A6A6]">PHP</span>
                <span class="font-semibold text-[#526377] dark:text-[#A6A6A6">70%</span>
              </div>
              <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                <div class="bg-[#6851cd] h-1 rounded-full" style="width: 70%"></div>
              </div>
            </div>

            <div class="mb-5">
              <div class="flex justify-between mb-1">
                <span class="font-semibold text-[#526377] dark:text-[#A6A6A6]">Wordpress</span>
                <span class="font-semibold text-[#526377] dark:text-[#A6A6A6">90%</span>
              </div>
              <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                <div class="bg-[#24146c] h-1 rounded-full" style="width: 90%"></div>
              </div>
            </div>

            <div class="mb-5">
              <div class="flex justify-between mb-1">
                <span class="font-semibold text-[#526377] dark:text-[#A6A6A6]">GIT</span>
                <span class="font-semibold text-[#526377] dark:text-[#A6A6A6">70%</span>
              </div>
              <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                <div class="bg-[#cd517c] h-1 rounded-full" style="width: 70%"></div>
              </div>
            </div>

            <div class="mb-5">
              <div class="flex justify-between mb-1">
                <span class="font-semibold text-[#526377] dark:text-[#A6A6A6]">Docker</span>
                <span class="font-semibold text-[#526377] dark:text-[#A6A6A6">70%</span>
              </div>
              <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                <div class="bg-[#519bcd] h-1 rounded-full" style="width: 70%"></div>
              </div>
            </div>

            <div class="mb-5">
              <div class="flex justify-between mb-1">
                <span class="font-semibold text-[#526377] dark:text-[#A6A6A6]">Tailwind</span>
                <span class="font-semibold text-[#526377] dark:text-[#A6A6A6">90%</span>
              </div>
              <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                <div class="bg-[#cd7651] h-1 rounded-full" style="width: 90%"></div>
              </div>
            </div>

            <div class="mb-5">
              <div class="flex justify-between mb-1">
                <span class="font-semibold text-[#526377] dark:text-[#A6A6A6]">Bootstrap</span>
                <span class="font-semibold text-[#526377] dark:text-[#A6A6A6">90%</span>
              </div>
              <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                <div class="bg-[#7669af] h-1 rounded-full" style="width: 90%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- working section end -->

      <!-- footer start -->
      <footer class="overflow-hidden rounded-b-2xl bg-[#f8fbfb] dark:bg-[#212425]">
        <p class="text-center py-6 text-gray-lite dark:text-color-910">© 2022 All Rights Reserved by <a class="hover:text-[#FA5252] duration-300 transition" href="/" target="_blank" rel="noopener noreferrer"> mohsensami</a>.</p>
      </footer>
      <!-- footer section end -->
    </div>
  </div>
  <!-- about me section start -->
</template>

<script>
export default {};
</script>

<style>
</style>