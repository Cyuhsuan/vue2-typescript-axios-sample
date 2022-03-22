<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { doLogin } from "@/utils/api/auth";
import Ajax from "@/utils/ajax";

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
    let res = await doLogin({
      account: "zugwui1",
      password: "123123123",
    });
    let test = await Ajax.get("/vue-test");
    console.log(res, test);
    return "test";
  };
}
</script>
