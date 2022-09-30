<template>
  <!-- works me section start -->
  <section
    id="portfolio"
    class="bg-white lg:rounded-2xl dark:bg-[#111111] dark:text-white"
  >
    <div class="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
      <div class="">
        <h2 class="after-effect after:left-48 lg:mt-0">Works</h2>
        <!-- fillter button group -->
        <!-- fillter group buttons -->
        <ul
          class="
            button-group
            isotop-menu-wrapper
            mt-[30px]
            flex
            w-full
            justify-start
            md:justify-end
            flex-wrap
            font-medium
          "
        >
          <li class="fillter-btn mr-4 md:mx-4 is-checked" data-filter="*">
            All
          </li>
          <li class="fillter-btn mr-4 md:mx-4" data-filter=".dev">
            <router-link :to="{ name: 'django' }">Django</router-link>
          </li>
          <li class="fillter-btn mr-4 md:mx-4" data-filter=".dev">
            <router-link :to="{ name: 'vue' }">Vue</router-link>
          </li>
        </ul>
      </div>
      <!-- End py-12 -->

      <div
        id="isotop-gallery-wrapper"
        class="mymix portfolio_list-two two-col"
        style="position: relative; height: 1738.45px"
      >
        <router-view></router-view>
      </div>
    </div>

    <footer
      class="overflow-hidden rounded-b-2xl bg-[#f8fbfb] dark:bg-[#212425]"
    >
      <p class="text-center py-6 text-gray-lite dark:text-color-910">
        © 2022 All Rights Reserved by
        <a
          class="hover:text-[#FA5252] duration-300 transition"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          >mohsensami</a
        >.
      </p>
    </footer>
  </section>
  <!-- works me section start -->
</template>
  



<script>
export default {};
</script>
  
  <style>
</style>