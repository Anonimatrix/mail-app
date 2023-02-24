<template>
  <div class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
    <loading-component v-if="loading"></loading-component>
    <div class="min-h-screen px-10 py-10 h-full">
      <div class="w-full flex justify-center">
        <h1 :class="rainbow.text + ' mb-10 w-fit'">Auto envio de mails :)</h1>
      </div>
      <FormComponent :extraData="{ files }">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full"
        >
          <rainbow-border
            v-for="file in files"
            :key="file.name"
            weight="medium"
          >
            <div :class="fileContainerClass + ' text-xl'">
              <span v-if="!file.image">{{ file.name }}</span>
              <img
                v-else
                :src="file.image"
                :alt="file.name"
                class="overflow-hidden"
              />
            </div>
          </rainbow-border>
          <rainbow-border weight="medium">
            <DropComponent
              :class="
                fileContainerClass +
                ' text-4xl font-bold hover:text-blue-500 cursor-pointer '
              "
              :onFile="onFile"
              ><span>+</span></DropComponent
            >
          </rainbow-border>
        </div>
      </FormComponent>
    </div>
  </div>
</template>

<script>
import DropComponent from "@/components/DropComponent.vue";
import FormComponent from "@/components/FormComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import { mapState } from "vuex";
import RainbowBorder from "@/components/RainbowBorder.vue";
import rainbow from "@/classes/rainbow";

export default {
  name: "HomeView",
  data() {
    return {
      files: [],
      fileContainerClass:
        "h-64 w-64 bg-black rounded-lg p-4 flex justify-center items-center text-white",
      rainbow,
    };
  },
  computed: { ...mapState(["loading"]) },
  methods: {
    async onFile(files) {
      for (const file of files) {
        if (file.type.includes("image")) {
          file.image = await this.viewImage(file, this.files.length);
        }

        this.files.push(file);
      }
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
    LoadingComponent,
    RainbowBorder,
  },
};
</script>
