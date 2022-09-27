<template>
  <button @click="showModal()">Button</button>


  <modal v-show="show" @modalClosed="closeModal">hiiiiiii</modal>
</template>

<script>
import { ref } from '@vue/reactivity'
import Modal from '../components/Model.vue'

export default {
components: {
  Modal
},
  setup() {
    const show = ref(false)

    const showModal = () => {
      show.value = !show.value
    }

    const closeModal = (value) => {
        if (! event.target.closest('.inner')) {
          show.value = false
      }
      console.log(value);
    }

    return {show, showModal, closeModal}
  }
}
</script>

<style>

</style>
