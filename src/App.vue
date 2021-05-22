<template>
  <div class="app">
    <SiteNavbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import SiteNavbar from "@/components/SiteNavbar.vue"
export default {
  name: "App",
  components: { SiteNavbar }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Quicksand", sans-serif;
  background-color: #35495e;
}

a {
  text-decoration: none;
}
</style>