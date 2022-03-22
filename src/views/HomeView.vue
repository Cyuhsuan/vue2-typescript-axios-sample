<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Ajax from "@/utils/ajax";
import store from "@/store/index";

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  mounted() {
    //  Ajax.get();
    this.test();
  }

  public test = async (): Promise<string> => {
    let res = await Ajax.get("vue-test", {});
    console.log(store.state);
    return "test";
  };
}
</script>
