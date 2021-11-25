<template>
  <button
    class="
      antialiased
      whitespace-nowrap
      inline-flex
      items-center
      justify-center
      px-4
      py-2
      shadow-md
      rounded-lg
      text-base text-gray-200
      font-semibold
      cursor-pointer
      select-none
      focus:border-transparent focus:outline-none
      bg-red-500
      hover:text-white
      transition
      transform-gpu
      ease-in-out
      duration-200
      hover:-translate-y-1 hover:shadow-lg
    "
    :class="classes"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    disabledClasses: {
      type: String,
      default: "bg-gray-500 bg-opacity-40",
    },
  },
  computed: {
    classes() {
      var res = "";
      if (this.disabled) {
        res = this.disabledClasses;
      } else {
        res = "";
      }

      return res;
    },
  },
};
</script>
