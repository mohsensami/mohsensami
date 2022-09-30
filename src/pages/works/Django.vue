<template>
  <modal v-show="show" @modalClosed="closeModal"></modal>

  <div class="portfolio_list-two-items isotop-item dev branding" style="position: absolute; left: 50%; top: 0px">
    <div class="rounded-lg bg-[#fff3fc] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]">
      <div class="overflow-hidden rounded-lg">
        <a href="#portfiloTwo" rel="modal:open">
          <img class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" src="../../../public/img/works/small/2.jpeg" alt="portfolio image" />
        </a>
      </div>
      <span class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Logo</span>
      <h2 class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
        <a @click="showModal()" rel="modal:open">Chul urina</a>
      </h2>
    </div>
  </div>


</template>

<script>
import { ref } from "@vue/reactivity";
import Modal from "../../components/Model.vue";

export default {
  components: {
    Modal,
  },
  setup() {
    const show = ref(false);

    const showModal = () => {
      show.value = !show.value;
    };

    const closeModal = (value) => {
      if (!event.target.closest(".inner")) {
        show.value = false;
      }
      console.log(value);
    };

    return { show, showModal, closeModal };
  },
};
</script>

<style>
</style>