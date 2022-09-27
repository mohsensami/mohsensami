<template>

    <div
      ref="modal-backdrop"
      class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
    >
      <a
        @click="closeModal"
        class="flex items-start justify-center min-h-screen pt-24 text-center"
      >
        <div
          class="
            inner
            bg-white
            rounded-lg
            text-left
            overflow-hidden
            shadow-xl
            p-8
            w-1/2
          "
          role="dialog"
          ref="modal"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          Modal
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