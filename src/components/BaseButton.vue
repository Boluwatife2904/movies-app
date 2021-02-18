<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
button {
  font: inherit;
  background-color: #42b883;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  padding: 14px 16px;
  text-transform: uppercase;
  transition: 0.4s;
  width: 150px;
  font-family: "Quicksand", sans-serif;
  transition: all 0.4s ease-in-out;
  font-weight: 600;

  &:hover {
    background-color: #3b8070;
  }
}
</style>