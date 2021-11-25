<template>
  <div class="flex justify-items-center cursor-pointer">
    <div
      class="
        h-6
        w-6
        rounded-md
        mr-2
        ease-in-out
        duration-150
        transition
        shadow-md
      "
      :class="checked ? 'bg-red-500 bounce' : 'bg-gray-500 bg-opacity-30'"
    >
      <fa-icon class="" :icon="['fas', 'check']" v-show="checked" />
    </div>
    <p class="font-semibold select-none">{{ text }}</p>
  </div>
</template>

<style>
@keyframes bounce-anim {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.bounce {
  animation: bounce-anim 200ms;
}
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
