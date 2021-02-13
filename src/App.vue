<template>
  <div id="app">
    <b-container class="app-container">
      <HeroHeaderVue />
      <ProjectsBodyVue />
      <ContactsFooterVue />
    </b-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    HeroHeaderVue: () => import("./components/HeroHeader.vue"),
    ProjectsBodyVue: () => import("./components/ProjectsBody.vue"),
    ContactsFooterVue: () => import("./components/ContactsFooter.vue"),
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1b2127;
}
.app-container {
  height: auto;
  @media screen and (max-width: 570px) {
    padding: 0;
    margin: 0;
    margin-left: 10px;
  }
}
</style>
