<template>
  <div
    v-if="loading"
    class="fixed top-0 left-0 z-50 bg-black opacity-40 h-screen w-full"
  ></div>
  <div :class="'h-screen px-10 py-4'">
    <h1 class="text-3xl">Auto envio de mails :)</h1>
    <FormComponent :extraData="{ files }">
      <div class="grid grid-cols-4 gap-4">
        <div
          v-for="file in files"
          :key="file.name"
          :class="fileContainerClass + ' text-xl'"
        >
          <span v-if="!file.image">{{ file.name }}</span>
          <img v-else :src="file.image" :alt="file.name" />
        </div>
        <DropComponent
          :class="
            fileContainerClass +
            ' text-4xl font-bold text-blue-300 hover:border-blue-500 hover:text-blue-500 cursor-pointer '
          "
          :onFile="onFile"
          >+</DropComponent
        >
      </div>
    </FormComponent>
  </div>
</template>

<script>
import DropComponent from "@/components/DropComponent.vue";
import FormComponent from "@/components/FormComponent.vue";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
      files: [],
      fileContainerClass:
        "border-4 h-64 w-64 border-blue-300 rounded-lg p-4 m-4 flex justify-center items-center mt-10",
    };
  },
  computed: { ...mapState(["loading"]) },
  methods: {
    async onFile(file) {
      if (file.type.includes("image")) {
        file.image = await this.viewImage(file, this.files.length);
      }

      this.files.push(file);
    },
    viewImage(file) {
      return new Promise((res) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          res(e.target.result);
        };
        reader.readAsDataURL(file);
      });
    },
  },
  components: {
    DropComponent,
    FormComponent,
  },
};
</script>
