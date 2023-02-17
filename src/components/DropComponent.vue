<template>
  <div ref="dropContainer" @click="$refs.input.click">
    <slot></slot>
    <input ref="input" type="file" hidden @change="change" />
  </div>
</template>

<script>
export default {
  name: "DropComponent",
  methods: {
    dragover(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    drop(e) {
      e.preventDefault();
      e.stopPropagation();
      if (!e.dataTransfer.files.length) return;
      this.onFile(e.dataTransfer.files[0]);
    },
    change(e) {
      if (!e.target.files.length) return;
      this.onFile(e.target.files[0]);
    },
  },
  mounted() {
    window.addEventListener("dragover", this.dragover);
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
