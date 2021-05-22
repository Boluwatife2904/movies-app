<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FlexContainer",
};
</script>

<style scoped lang="scss">
.container {
  padding: 10px 50px 50px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;
}
</style>