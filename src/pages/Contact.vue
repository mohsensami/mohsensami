<template>
  <!-- resume me section start -->
  <div class="bg-white lg:rounded-2xl dark:bg-[#111111] dark:text-white">
    <div class="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
      <div class="flex items-center space-x-2 mb-4 justify-center md:justify-start">
        <i class="fa-solid text-3xl text-[#F95054] fa-address-book"></i>
        <h4 class="text-2xl dark:text-white font-medium">Contact</h4>
      </div>
      <div class="bg-[#f8fbfb] p-12 rounded-xl mt-4">
        <h3 class="text-4xl">
          <p class="text-xl dark:text-[#A6A6A6]">I'm always open to discussing product</p>

          <p class="text-xl font-bold dark:text-white my-8">design work or partnerships.</p>
        </h3>

        <form action="https://formspree.io/f/xoqrgaab" method="POST">
          <div class="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
          <div class="empty_notice">
            <span>Please Fill Required Fields</span>
          </div>

          <!-- name input  -->
          <div class="relative z-0 w-full mt-[40px] mb-8 group">
            <input type="text" id="name" name="name" class="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer" placeholder=" " required="" />
            <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"> Name * </label>
          </div>

          <!-- email input  -->
          <div class="relative z-0 w-full mb-8 group">
            <input type="email" name="email" class="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer" placeholder=" " id="email" required="" />
            <label for="email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"> Email * </label>
          </div>

          <!-- message input  -->
          <div class="relative z-0 w-full mb-8 group">
            <input type="text" name="message" class="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer" placeholder=" " id="message" required="" />
            <label for="message" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"> Message * </label>
          </div>

          <!-- submit buttons -->
          <input type="submit" class="px-6 py-2 rounded-lg border-[2px] mt-3 border-color-910 font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition-colors duration-300 ease-in-out hover:border-transparent dark:text-white" value="Submit" />
        </form>
      </div>
    </div>

    <!-- footer start -->
    <footer class="overflow-hidden rounded-b-2xl bg-[#f8fbfb] dark:bg-[#212425]">
      <p class="text-center py-6 text-gray-lite dark:text-color-910">© 2022 All Rights Reserved by <a class="hover:text-[#FA5252] duration-300 transition" href="/" target="_blank" rel="noopener noreferrer">mohsensami</a>.</p>
    </footer>
    <!-- footer end -->
  </div>
  <!-- resume me section start -->
</template>

<script>
export default {};
</script>

<style>
</style>