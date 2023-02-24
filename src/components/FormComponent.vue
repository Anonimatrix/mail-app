<template>
  <form class="py-4 flex flex-col gap-4 items-end">
    <rainbow-border weight="light" class="w-full">
      <input
        type="text"
        v-model="data.subject"
        placeholder="Asunto"
        class="rounded-md font-semibold bg-gray-900 py-2 px-3 block text-lg w-full bg-transparent text-gray-100 focus:outline-none placeholder:text-gray-300"
      />
    </rainbow-border>
    <rainbow-border :class="'w-full mb-6'" weight="light">
      <auto-resize-text-area
        @changeData="(text) => (data.text = text)"
        placeholder="Contenido"
        rows="5"
        class="font-semibold bg-gray-900 rounded-md px-2 py-3 block w-full text-lg resize-none overflow-hidden text-gray-100 focus:outline-none placeholder:text-gray-300"
      ></auto-resize-text-area>
    </rainbow-border>
    <slot></slot>
    <button
      type="button"
      @click="submit"
      class="px-4 py-2 font-bold mt-6 text-white rainbow rounded-md float-right w-min hover:animate-bg hover:bg-to-animate"
    >
      Submit
    </button>
  </form>
</template>

<script>
import { sendMail } from "@/services/api";
import { AxiosError } from "axios";
import AutoResizeTextArea from "@/components/AutoResizeTextArea.vue";
import RainbowBorder from "@/components/RainbowBorder.vue";

export default {
  data() {
    return {
      data: {
        subject: "",
        text: "",
        key: "",
      },
    };
  },
  methods: {
    async submit() {
      this.$store.commit("setLoading", true);
      this.$store.commit("setError", "");
      try {
        this.data.subject += this.data.key;
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
    RainbowBorder,
  },
};
</script>

<style></style>
