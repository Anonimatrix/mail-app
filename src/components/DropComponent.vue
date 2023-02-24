<template>
  <div ref="dropContainer" @click="$refs.input.click">
    <slot></slot>
    <input
      ref="input"
      type="file"
      multiple
      hidden
      @change="change"
      class="w-0 h-0"
    />
  </div>
</template>

<script>
export default {
  name: "DropComponent",
  methods: {
    prevent(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    drop(e) {
      e.preventDefault();
      e.stopPropagation();
      if (!e.dataTransfer.files.length) return;
      this.onFile(e.dataTransfer.files);
    },
    change(e) {
      if (!e.target.files.length) return;
      this.onFile(e.target.files);
    },
  },
  mounted() {
    window.addEventListener("drop", this.prevent);
    window.addEventListener("dragover", this.prevent);
    this.$refs.dropContainer.addEventListener("drop", this.drop);
  },
  props: {
    onFile: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style></style>
