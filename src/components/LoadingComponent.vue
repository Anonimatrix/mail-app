<template>
  <div
    class="fixed top-0 left-0 z-50 bg-black bg-opacity-60 h-screen w-full flex justify-center items-center"
  >
    <div
      role="status"
      class="inline-block h-12 w-12 animate-spin rounded-full border-blue-500 border-8 border-solid border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
    >
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
