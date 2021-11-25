<template>
  <textarea
    :placeholder="placeholder"
    :maxlength="maxlength"
    class="
      justify-self-center
      bg-gray-800
      text-white
      rounded-lg
      shadow-md
      text-lg
      pr-2
      py-2
      pl-4
      transform
      ease-in-out
      duration-150
      focus:scale-102
      focus:ring-2
      focus:ring-red-500
      focus:border-transparent
      focus:outline-none
    "
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
    },
    maxlength: {
      type: String,
      default: "524288",
    },
  },
};
</script>
