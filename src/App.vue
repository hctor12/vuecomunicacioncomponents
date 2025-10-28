<template>
  <suma-checkbox />
</template>

<script>
import SumaCheckbox from "./components/SumaCheckbox.vue";

export default {
  name: "App",
  components: {
    SumaCheckbox,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
