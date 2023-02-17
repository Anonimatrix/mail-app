<template>
  <textarea ref="textarea" @input="changeData"></textarea>
</template>
<script>
import { resize } from "@/utils/resize.js";
export default {
  name: "AutoResizeTextArea",
  methods: {
    changeData() {
      resize(this.$refs.textarea);
      this.$emit("changeData", this.$refs.textarea.value);
    },
  },
};
</script>
