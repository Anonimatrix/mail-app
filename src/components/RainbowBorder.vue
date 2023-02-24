<template>
  <div
    class="rounded-md mx-auto bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] mb-4 hover:animate-bg hover:bg-to-animate focus:animate-bg focus:bg-to-animate"
    :class="{
      [`px-1 py-1`]: weight == 'light',
      [`px-2 py-2`]: weight == 'medium',
      [`px-4 py-4`]: weight == 'bold',
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    weight: {
      type: String,
      default: () => "medium",
    },
  },
};
</script>
