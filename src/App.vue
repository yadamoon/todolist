<template>
  <todoForm />
  <footerApp />
</template>

<script>
import footerApp from "./components/footerApp.vue";
import todoForm from "./components/todoForm.vue";
export default {
  name: "App",
  components: {
    footerApp,
    todoForm,
  },
};
</script>

<style></style>
