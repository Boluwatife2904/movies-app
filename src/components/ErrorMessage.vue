<template>
  <div class="error-box">
    <span>&#x1F615; </span>
    <p>
      Sorry but there has been an error, and we are currently unable to provide
      you with details about your requested movie for now due to some reasons.
    </p>
    <base-button @click="hideError">Try Again</base-button>
  </div>
</template>

<script>
export default {
  name: "ErrorMessage",
  emits: ["hide-error"],
  methods: {
    hideError() {
      this.$emit("hide-error");
    },
  },
};
</script>

<style lang="scss" scoped>
.error-box {
  background-color: #496583;
  padding: 40px;
  text-align: center;
  width: 85%;
  margin: 0 auto 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
  border-radius: 8px;

  span {
    font-size: 50px;
    display: inline-block;
    margin-bottom: 10px;
  }

  p {
    color: #fff;
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 15px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 768px) {
      width: 80%;
    }

    @media screen and (max-width: 576px) {
      width: 100%;
    }
  }
}
</style>