<template>
  <div class="empty" :class="{ 'show': visible }">
    <img src="@/assets/alert-triangle.svg" alt="Alert Triangle" />
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: ["message", "visible"]
};
</script>

<style lang="scss" scoped>
.empty {
  display: flex;
  align-items: center;
  border-radius: 4px;
  background: rgb(255, 145, 0);
  position: absolute;
  top: -100%;
  right: 16px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 20px 30px;
  z-index: 999;
  transition: all 0.5s ease-in-out;

  &.show {
    top: 60px;
  }

  img {
    margin-right: 10px;
    height: 20px;
    width: 20px;
  }
}
</style>