<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :maxlength="maxlength"
    class="
      justify-self-center
      w-48
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
      focus:scale-105
      focus:ring-2
      focus:shadow-lg
      focus:ring-red-500
      focus:border-transparent
      focus:outline-none
    "
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>

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
    type: {
      type: String,
      default: "text",
    },
    maxlength: {
      type: String,
      default: "524288",
    },
  },
};
</script>
