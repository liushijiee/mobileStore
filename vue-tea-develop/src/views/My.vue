<template>
  <div class="my">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Tabbar />
  </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Tabbar from "../components/common/Tabbar.vue";

export default {
  name: "My",
  components: {
    Tabbar
  },
};
</script>
