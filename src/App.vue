<template>
  <div class="app">
    <header>
      <router-link :to="{ name: 'Home' }">
        <h1><span>Movies</span>Zone</h1>
      </router-link>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

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

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  background-color: #2c3d4e;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);

  h1 {
    color: #fff;

    span {
      color: #42b883;
    }
  }
}
</style>