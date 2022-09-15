<template>
    <!-- works me section start -->
    <section id="portfolio" class="bg-white   lg:rounded-2xl dark:bg-[#111111]">
                      <div class="container  mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
                          <div class="py-12 ">
                              <h2 class="after-effect after:left-48 lg:mt-0">Portfolio</h2>
                              <!-- fillter button group -->
                              <!-- fillter group buttons -->
                              <ul class="button-group isotop-menu-wrapper mt-[30px] flex w-full justify-start md:justify-end flex-wrap font-medium">
                                  <li class="fillter-btn mr-4 md:mx-4 is-checked" data-filter="*">All</li>
                                  <li class="fillter-btn mr-4 md:mx-4" data-filter=".dev">Video</li>
                                  <li class="fillter-btn mr-4 md:mx-4" data-filter=".plugin"> Web Design</li>
                                  <li class="fillter-btn mr-4 md:mx-4" data-filter=".branding"> Logo</li>
                                  <li class="fillter-btn mr-4 md:mx-4" data-filter=".custom">Graphic Design</li>
                              </ul>
                          </div>
                          <!-- End py-12 -->
  
                          <div id="isotop-gallery-wrapper" class="mymix portfolio_list-two  two-col " style="position: relative; height: 1738.45px;">
                              <div class="grid-sizer"></div>
                              <!-- portfolio items one start -->
                              <div class="portfolio_list-two-items isotop-item plugin custom " style="position: absolute; left: 0%; top: 0px;">
                                  <div class="rounded-lg bg-[#fff0f0] p-6 dark:bg-transparent dark:border-[2px] border-[#212425]">
                                      <div class="overflow-hidden rounded-lg">
                                          <a href="#portfiloOne" rel="modal:open">
                                              <img class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" src="../../public/img/works/small/1.jpeg" alt="portfolio image">
                                          </a>
                                      </div>
                                      <span class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">UI/UX</span>
                                      <h2 class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                          <a href="#portfiloOne" rel="modal:open"> Chul urina </a>
                                      </h2>
                                  </div>
                              </div>
  
                              <!-- modal start for item one  -->
                              <div id="portfiloOne" class="modal-container modal">
                                  <div class="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                                      <h2 class="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                                          UI/UX Project
                                      </h2>
                                      <div class="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                          <div class="space-y-2">
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                                  Project :&nbsp;
                                                  <span class="font-medium"> Website</span>
                                              </p>
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                                  Langages :&nbsp;
                                                  <span class="font-medium">Photoshop, Figma</span>
                                              </p>
                                          </div>
  
                                          <div class="space-y-2">
                                              <p class="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                                  <i class="fa-regular fa-user text-lg mr-2 hidden sm:block"></i>
                                                  Client :&nbsp; <span class="font-medium">Envato</span>
                                              </p>
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"></i>
                                                  Preview :&nbsp;
                                                  <span class="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                                                      <a href="https://www.envato.com" target="_blank" rel="noopener noreferrer">www.envato.com</a>
                                                  </span>
                                              </p>
                                          </div>
                                      </div>
  
                                      <p class="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                                          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                          Mollitia placeat magnam possimus iusto blanditiis pariatur
                                          labore explicabo quo repellat hic dolorum numquam
                                          asperiores, voluptatum fugiat reiciendis aspernatur, non,
                                          odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                                          quidem! Quas magni distinctio dolorum dolore natus, vel
                                          numquam accusamus. Nostrum eligendi recusandae qui tempore
                                          deserunt!
                                      </p>
                                      <div class="pr-3">
                                          <img class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src="../../public/img/works/big/1.jpeg" alt="portfolio image">
                                      </div>
                                  </div>
                                  <a href="#close-modal" rel="modal:close" class="close bg-close-light dark:bg-close-dark">Close</a>
                              </div>
  
                              <!-- portfolio items two start -->
                              <div class="portfolio_list-two-items isotop-item dev branding " style="position: absolute; left: 50%; top: 0px;">
                                  <div class="rounded-lg bg-[#fff3fc] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
                                      <div class="overflow-hidden rounded-lg">
                                          <a href="#portfiloTwo" rel="modal:open">
                                              <img class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" src="../../public/img/works/small/2.jpeg" alt="portfolio image">
                                          </a>
                                      </div>
                                      <span class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Logo</span>
                                      <h2 class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                          <a href="#portfiloTwo" rel="modal:open">Chul urina</a>
                                      </h2>
                                  </div>
                              </div>
  
                              <!-- modal start for item two  -->
                              <div id="portfiloTwo" class="modal-container modal">
                                  <div class="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                                      <h2 class="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                                          Logo Project
                                      </h2>
                                      <div class="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                          <div class="space-y-2">
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                                  Project :&nbsp;
                                                  <span class="font-medium"> Website</span>
                                              </p>
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                                  Langages :&nbsp;
                                                  <span class="font-medium">Photoshop, Figma</span>
                                              </p>
                                          </div>
                                          <div class="space-y-2">
                                              <p class="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                                  <i class="fa-regular fa-user text-lg mr-2 hidden sm:block"></i>
                                                  Client :&nbsp; <span class="font-medium">Envato</span>
                                              </p>
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"></i>
                                                  Preview :&nbsp;
                                                  <span class="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                                                      <a href="https://www.envato.com" target="_blank" rel="noopener noreferrer">www.envato.com</a>
                                                  </span>
                                              </p>
                                          </div>
                                      </div>
  
                                      <p class="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                                          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                          Mollitia placeat magnam possimus iusto blanditiis pariatur
                                          labore explicabo quo repellat hic dolorum numquam
                                          asperiores, voluptatum fugiat reiciendis aspernatur, non,
                                          odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                                          quidem! Quas magni distinctio dolorum dolore natus, vel
                                          numquam accusamus. Nostrum eligendi recusandae qui tempore
                                          deserunt!
                                      </p>
                                      <div class="pr-3">
                                          <img class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src="../../public/img/works/big/2.jpeg" alt="portfolio image">
                                      </div>
                                  </div>
                                  <a href="#close-modal" rel="modal:close" class="close bg-close-light dark:bg-close-dark">Close</a>
                              </div>
  
                              <!-- portfolio items three start -->
                              <div class="portfolio_list-two-items isotop-item plugin " style="position: absolute; left: 0%; top: 308px;">
                                  <div class="rounded-lg bg-[#fff3fc] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
                                      <div class="overflow-hidden rounded-lg">
                                          <a href="#portfiloThree" rel="modal:open">
                                              <img class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" src="../../public/img/works/small/3.jpeg" alt="portfolio image">
                                          </a>
                                      </div>
                                      <span class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">UI/UX</span>
                                      <h2 class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                          <a href="#portfiloThree" rel="modal:open">
                                              T-Shirt Design
                                          </a>
                                      </h2>
                                  </div>
                              </div>
  
                              <!-- modal start for item three start -->
                              <div id="portfiloThree" class="modal-container modal">
                                  <div class="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                                      <h2 class="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                                          T-Shirt Design Project
                                      </h2>
                                      <div class="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                          <div class="space-y-2">
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                                  Project :&nbsp;
                                                  <span class="font-medium"> Website</span>
                                              </p>
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                                  Langages :&nbsp;
                                                  <span class="font-medium">Photoshop, Figma</span>
                                              </p>
                                          </div>
                                          <div class="space-y-2">
                                              <p class="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                                  <i class="fa-regular fa-user text-lg mr-2 hidden sm:block"></i>
                                                  Client :&nbsp; <span class="font-medium">Envato</span>
                                              </p>
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"></i>
                                                  Preview :&nbsp;
                                                  <span class="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                                                      <a href="https://www.envato.com" target="_blank" rel="noopener noreferrer">www.envato.com</a>
                                                  </span>
                                              </p>
                                          </div>
                                      </div>
  
                                      <p class="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                                          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                          Mollitia placeat magnam possimus iusto blanditiis pariatur
                                          labore explicabo quo repellat hic dolorum numquam
                                          asperiores, voluptatum fugiat reiciendis aspernatur, non,
                                          odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                                          quidem! Quas magni distinctio dolorum dolore natus, vel
                                          numquam accusamus. Nostrum eligendi recusandae qui tempore
                                          deserunt!
                                      </p>
                                      <div class="pr-3">
                                          <img class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src="../../public/img/works/big/3.jpeg" alt="portfolio image">
                                      </div>
                                  </div>
                                  <a href="#close-modal" rel="modal:close" class="close bg-close-light dark:bg-close-dark">Close</a>
                              </div>
  
                              <!-- portfolio items four start -->
                              <div class="portfolio_list-two-items isotop-item dev custom " style="position: absolute; left: 50%; top: 406px;">
                                  <div class="rounded-lg p-6 bg-[#e9faff] dark:bg-transparent dark:border-[2px] border-[#212425]">
                                      <div class="overflow-hidden rounded-lg">
                                          <a href="#portfiloFour" rel="modal:open">
                                              <img class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" src="../../public/img/works/small/4.jpeg" alt="portfolio image">
                                          </a>
                                      </div>
                                      <span class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">UI/UX</span>
                                      <h2 class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                          <a href="#portfiloFour" rel="modal:open">Packaging Box
                                          </a>
                                      </h2>
                                  </div>
                              </div>
  
                              <!-- modal start for item one start -->
                              <div id="portfiloFour" class="modal-container modal">
                                  <div class="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                                      <h2 class="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                                          Packaging Box Project
                                      </h2>
                                      <div class="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                          <div class="space-y-2">
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                                  Project :&nbsp;
                                                  <span class="font-medium"> Website</span>
                                              </p>
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                                  Langages :&nbsp;
                                                  <span class="font-medium">Photoshop, Figma</span>
                                              </p>
                                          </div>
  
                                          <div class="space-y-2">
                                              <p class="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                                  <i class="fa-regular fa-user text-lg mr-2 hidden sm:block"></i>
                                                  Client :&nbsp; <span class="font-medium">Envato</span>
                                              </p>
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"></i>
                                                  Preview :&nbsp;
                                                  <span class="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                                                      <a href="https://www.envato.com" target="_blank" rel="noopener noreferrer">www.envato.com</a>
                                                  </span>
                                              </p>
                                          </div>
                                      </div>
  
                                      <p class="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                                          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                          Mollitia placeat magnam possimus iusto blanditiis pariatur
                                          labore explicabo quo repellat hic dolorum numquam
                                          asperiores, voluptatum fugiat reiciendis aspernatur, non,
                                          odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                                          quidem! Quas magni distinctio dolorum dolore natus, vel
                                          numquam accusamus. Nostrum eligendi recusandae qui tempore
                                          deserunt!
                                      </p>
                                      <div class="pr-3">
                                          <img class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src="../../public/img/works/big/4.jpeg" alt="portfolio image">
                                      </div>
                                  </div>
                                  <a href="#close-modal" rel="modal:close" class="close bg-close-light dark:bg-close-dark">Close</a>
                              </div>
  
                              <!-- modal start for item five start -->
                              <div class="portfolio_list-two-items isotop-item branding " style="position: absolute; left: 0%; top: 666px;">
                                  <div class="rounded-lg bg-[#fffae9] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
                                      <div class="overflow-hidden rounded-lg">
                                          <a href="#portfiloFive" rel="modal:open">
                                              <img class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" src="../../public/img/works/small/5.jpeg" alt="portfolio image">
                                          </a>
                                      </div>
                                      <span class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Web
                                          Design</span>
                                      <h2 class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                          <a href="#portfiloFive" rel="modal:open"> Aura Dione</a>
                                      </h2>
                                  </div>
                              </div>
  
                              <!-- modal start for item five start -->
                              <div id="portfiloFive" class="modal-container modal">
                                  <div class="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                                      <h2 class="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                                          Aura Dione Project
                                      </h2>
                                      <div class="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                          <div class="space-y-2">
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                                  Project :&nbsp;
                                                  <span class="font-medium"> Website</span>
                                              </p>
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                                  Langages :&nbsp;
                                                  <span class="font-medium">Photoshop, Figma</span>
                                              </p>
                                          </div>
                                          <div class="space-y-2">
                                              <p class="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                                  <i class="fa-regular fa-user text-lg mr-2 hidden sm:block"></i>
                                                  Client :&nbsp; <span class="font-medium">Envato</span>
                                              </p>
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"></i>
                                                  Preview :&nbsp;
                                                  <span class="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                                                      <a href="https://www.envato.com" target="_blank" rel="noopener noreferrer">www.envato.com</a>
                                                  </span>
                                              </p>
                                          </div>
                                      </div>
  
                                      <p class="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                                          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                          Mollitia placeat magnam possimus iusto blanditiis pariatur
                                          labore explicabo quo repellat hic dolorum numquam
                                          asperiores, voluptatum fugiat reiciendis aspernatur, non,
                                          odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                                          quidem! Quas magni distinctio dolorum dolore natus, vel
                                          numquam accusamus. Nostrum eligendi recusandae qui tempore
                                          deserunt!
                                      </p>
                                      <div class="pr-3">
                                          <img class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src="../../public/img/works/big/5.jpeg" alt="portfolio image">
                                      </div>
                                  </div>
                                  <a href="#close-modal" rel="modal:close" class="close bg-close-light dark:bg-close-dark">Close</a>
                              </div>
  
                              <!-- portfolio items Six start -->
                              <div class="portfolio_list-two-items isotop-item branding " style="position: absolute; left: 50%; top: 812px;">
                                  <div class="rounded-lg bg-[#f4f4ff] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
                                      <div class="overflow-hidden rounded-lg">
                                          <a href="#portfiloSix" rel="modal:open">
                                              <img class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" src="../../public/img/works/small/6.jpeg" alt="portfolio image">
                                          </a>
                                      </div>
                                      <span class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Video</span>
                                      <h2 class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                          <a href="#portfiloSix" rel="modal:open">
                                              Modern Bag Design
                                          </a>
                                      </h2>
                                  </div>
                              </div>
  
                              <!-- modal start for item six start -->
                              <div id="portfiloSix" class="modal-container modal">
                                  <div class="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                                      <h2 class="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                                          Modern Bag Design Project
                                      </h2>
                                      <div class="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                          <div class="space-y-2">
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                                  Project :&nbsp;
                                                  <span class="font-medium"> Website</span>
                                              </p>
  
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                                  Langages :&nbsp;
                                                  <span class="font-medium">Photoshop, Figma</span>
                                              </p>
  
                                          </div>
  
                                          <div class="space-y-2">
                                              <p class="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                                  <i class="fa-regular fa-user text-lg mr-2 hidden sm:block"></i>
                                                  Client :&nbsp; <span class="font-medium">Envato</span>
                                              </p>
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"></i>
                                                  Preview :&nbsp;
                                                  <span class="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                                                      <a href="https://www.envato.com" target="_blank" rel="noopener noreferrer">www.envato.com</a>
                                                  </span>
                                              </p>
                                          </div>
                                      </div>
  
                                      <p class="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                                          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                          Mollitia placeat magnam possimus iusto blanditiis pariatur
                                          labore explicabo quo repellat hic dolorum numquam
                                          asperiores, voluptatum fugiat reiciendis aspernatur, non,
                                          odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                                          quidem! Quas magni distinctio dolorum dolore natus, vel
                                          numquam accusamus. Nostrum eligendi recusandae qui tempore
                                          deserunt!
                                      </p>
                                      <div class="pr-3">
                                          <img class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src="../../public/img/works/big/6.jpeg" alt="portfolio image">
                                      </div>
                                  </div>
                                  <a href="#close-modal" rel="modal:close" class="close bg-close-light dark:bg-close-dark">Close</a>
                              </div>
  
                              <!-- modal start for item Seven start -->
                              <div class="portfolio_list-two-items isotop-item plugin " style="position: absolute; left: 0%; top: 1023px;">
                                  <div class="rounded-lg bg-[#f4f4ff] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
                                      <div class="overflow-hidden rounded-lg">
                                          <a href="#portfiloSeven" rel="modal:open">
                                              <img class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" src="../../public/img/works/small/7.jpeg" alt="portfolio image">
                                          </a>
                                      </div>
                                      <span class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Video</span>
                                      <h2 class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                          <a href="#portfiloSeven" rel="modal:open"> Chul urina </a>
                                      </h2>
                                  </div>
                              </div>
  
                              <!-- modal start for item Seven start -->
                              
  
                              <!-- portfolio items Eight start -->
                              <div class="portfolio_list-two-items isotop-item dev branding " style="position: absolute; left: 50%; top: 1218px;">
                                  <div class="rounded-lg bg-[#f4f4ff] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
                                      <div class="overflow-hidden rounded-lg">
                                          <a href="#portfiloEight" rel="modal:open">
                                              <img class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" src="../../public/img/works/big/8.jpeg" alt="portfolio image">
                                          </a>
                                      </div>
                                      <span class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Video</span>
                                      <h2 class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                          <a href="#portfiloEight" rel="modal:open"> Chul urina </a>
                                      </h2>
                                  </div>
                              </div>
  
                              <!-- modal start for item Eight start -->
                              <div id="portfiloEight" class="modal-container modal">
                                  <div class="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                                      <h2 class="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                                          UI/UX Project
                                      </h2>
                                      <div class="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                          <div class="space-y-2">
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                                  Project :&nbsp;
                                                  <span class="font-medium"> Website</span>
                                              </p>
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                                  Langages :&nbsp;
                                                  <span class="font-medium">Photoshop, Figma</span>
                                              </p>
                                          </div>
                                          <div class="space-y-2">
                                              <p class="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                                  <i class="fa-regular fa-user text-lg mr-2 hidden sm:block"></i>
                                                  Client :&nbsp; <span class="font-medium">Envato</span>
                                              </p>
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"></i>
                                                  Preview :&nbsp;
                                                  <span class="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                                                      <a href="https://www.envato.com" target="_blank" rel="noopener noreferrer">www.envato.com</a>
                                                  </span>
                                              </p>
                                          </div>
                                      </div>
  
                                      <p class="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                                          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                          Mollitia placeat magnam possimus iusto blanditiis pariatur
                                          labore explicabo quo repellat hic dolorum numquam
                                          asperiores, voluptatum fugiat reiciendis aspernatur, non,
                                          odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                                          quidem! Quas magni distinctio dolorum dolore natus, vel
                                          numquam accusamus. Nostrum eligendi recusandae qui tempore
                                          deserunt!
                                      </p>
                                      <div class="pr-3">
                                          <img class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src="../../public/img/works/big/8.jpeg" alt="portfolio image">
                                      </div>
                                  </div>
                                  <a href="#close-modal" rel="modal:close" class="close bg-close-light dark:bg-close-dark">Close</a>
                              </div>
  
  
                              <!-- portfolio items Nine start -->
                              <div class="portfolio_list-two-items isotop-item plugin custom " style="position: absolute; left: 0%; top: 1381px;">
                                  <div class="rounded-lg bg-[#fff0f8] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
                                      <div class="overflow-hidden rounded-lg">
                                          <a href="#portfiloNine" rel="modal:open">
                                              <img class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" src="../../public/img/works/small/9.jpeg" alt="portfolio image">
                                          </a>
                                      </div>
                                      <span class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Web
                                          Design</span>
                                      <h2 class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                          <a href="#portfiloNine" rel="modal:open"> Aura Dione </a>
                                      </h2>
                                  </div>
                              </div>
  
                              <!-- modal start for item Nine start -->
                              <div id="portfiloNine" class="modal-container modal">
                                  <div class="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
                                      <h2 class="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                                          Aura Dione Project
                                      </h2>
                                      <div class="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                          <div class="space-y-2">
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"></i>
                                                  Project :&nbsp;
                                                  <span class="font-medium"> Website</span>
                                              </p>
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-solid fa-code text-lg mr-2 hidden sm:block"></i>
                                                  Langages :&nbsp;
                                                  <span class="font-medium">Photoshop, Figma</span>
                                              </p>
                                          </div>
  
                                          <div class="space-y-2">
                                              <p class="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                                  <i class="fa-regular fa-user text-lg mr-2 hidden sm:block"></i>
                                                  Client :&nbsp; <span class="font-medium">Envato</span>
                                              </p>
                                              <p class="dark:text-white flex items-center text-[15px] sm:text-lg">
                                                  <i class="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"></i>
                                                  Preview :&nbsp;
                                                  <span class="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                                                      <a href="https://www.envato.com" target="_blank" rel="noopener noreferrer">www.envato.com</a>
                                                  </span>
                                              </p>
                                          </div>
                                      </div>
  
                                      <p class="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                                          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                          Mollitia placeat magnam possimus iusto blanditiis pariatur
                                          labore explicabo quo repellat hic dolorum numquam
                                          asperiores, voluptatum fugiat reiciendis aspernatur, non,
                                          odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                                          quidem! Quas magni distinctio dolorum dolore natus, vel
                                          numquam accusamus. Nostrum eligendi recusandae qui tempore
                                          deserunt!
                                      </p>
                                      <div class="pr-3">
                                          <img class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src="../../public/img/works/big/9.jpeg" alt="portfolio image">
                                      </div>
                                  </div>
                                  <a href="#close-modal" rel="modal:close" class="close bg-close-light dark:bg-close-dark">Close</a>
                              </div>
                          </div>
                      </div>
  
                      <footer class="overflow-hidden rounded-b-2xl bg-[#f8fbfb] dark:bg-[#212425]">
                          <p class="text-center py-6 text-gray-lite dark:text-color-910"> © 2022 All Rights Reserved by <a class="hover:text-[#FA5252] duration-300 transition" href="/" target="_blank" rel="noopener noreferrer">mohsensami</a>.
                          </p>
                      </footer>
                      </section>
                      <!-- works me section start -->
  </template>
  



<script>

  export default {
  
  }
  </script>
  
  <style>
  
  </style>