<template>
  <div>
    <div>
      <headerApp />
    </div>
    <br />
    <div>
      <todoForm />
    </div>
    <br /><br />
    <div>
      <footerApp />
    </div>
  </div>
</template>

<script>
import footerApp from "./components/footerApp.vue";
import todoForm from "./components/todoForm.vue";
import headerApp from "./components/headerApp.vue";
import Card from "./components/card.vue";

export default {
  name: "App",
  components: {
    footerApp,
    todoForm,
    headerApp,
    Card,
  },
};
</script>

<style></style>
