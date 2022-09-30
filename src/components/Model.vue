<template>
  <div ref="modal-backdrop" class="fixed z-10 inset-0 overflow-y-hidden overflow-x-hidden bg-black bg-opacity-50">
    <a @click="closeModal" class="flex items-start justify-center min-h-screen pt-24 text-center">
      <div class="inner bg-white dark:bg-gray-700 rounded-lg text-left overflow-hidden shadow-xl p-8 w-1/2" role="dialog" ref="modal" aria-modal="true" aria-labelledby="modal-headline">
        <!-- start -->

        <div id="portfiloOne" class="modal-container modal">
          <div class="overflow-y-scroll scroll-hide-1700 max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight">
            <h2 class="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">UI/UX Project</h2>
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

            <p class="dark:text-white text-2line font-normal text-[15px] sm:text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!</p>
            <div class="pr-3">
              <img class="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6" src="#" alt="portfolio image" />
            </div>
          </div>
          <a href="#close-modal" rel="modal:close" class="close bg-close-light dark:bg-close-dark">Close</a>
        </div>

        <!-- End -->
      </div>
    </a>
  </div>
</template>

<script>
export default {
  setup(prop, { emit }) {
    const closeModal = () => {
      emit("modalClosed", false);
    };

    return { closeModal };
  },
};
</script>

<style>
</style>