<template>
  <form class="mt-10">
    <input
      type="text"
      v-model="data.subject"
      placeholder="Asunto"
      class="border-blue-300 border-2 rounded-md px-2 py-1 block mb-4 w-full"
    />
    <auto-resize-text-area
      @changeData="(text) => (data.text = text)"
      placeholder="Contenido"
      rows="1"
      class="border-blue-300 border-2 rounded-md px-2 py-2 block mb-4 w-full resize-none overflow-hidden"
    ></auto-resize-text-area>
    <slot></slot>
    <button
      type="button"
      @click="submit"
      class="px-4 py-2 font-bold text-white bg-blue-400 hover:bg-blue-500 mb-4 rounded-md float-right"
    >
      Submit
    </button>
  </form>
</template>

<script>
import { sendMail } from "@/services/api";
import { AxiosError } from "axios";
import AutoResizeTextArea from "@/components/AutoResizeTextArea.vue";

export default {
  data() {
    return {
      data: {
        subject: "",
        text: "",
      },
    };
  },
  methods: {
    async submit() {
      this.$store.commit("setLoading", true);
      this.$store.commit("setError", "");
      try {
        await sendMail({ ...this.data, ...this.extraData });
        this.$swal({
          title: "Success",
          text: "Mail enviado correctamente",
          icon: "success",
        });
      } catch (err) {
        const msg =
          err instanceof AxiosError
            ? err.response?.data?.msg || "Unknown error"
            : err.message;
        this.$store.commit("setError", msg);
        this.$swal({
          title: "Error",
          text: msg,
          icon: "error",
        });
      } finally {
        this.$store.commit("setLoading", false);
      }
    },
  },
  props: ["extraData"],
  components: {
    AutoResizeTextArea,
  },
};
</script>

<style></style>
