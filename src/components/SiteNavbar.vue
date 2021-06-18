<template>
  <header>
    <router-link :to="{ name: 'Home' }">
      <h1>Fi<span>ndAMov</span>ie</h1>
    </router-link>
  </header>
</template>

<script>
export default {
  name: "SiteNavbar",
};
</script>

<style lang="scss" scoped>
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