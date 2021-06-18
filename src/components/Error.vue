<template>
  <div class="wrapper">
    <div class="error">
      <div class="emoji"><span>&#x1F61E;</span></div>
      <div class="text">
        <h4>{{ errorCode }} - {{ errorName }}</h4>
        <p>
          {{ errorMessage }}
        </p>
        <router-link to="/">Go Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: ["errorCode", "errorName", "errorMessage"],
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: calc(100vh - 64px);
  background-color: #2c3d4e;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  .error {
    max-width: 800px;
    width: 95%;
    margin: 0 auto;
    padding: 40px 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    .emoji {
      margin-right: 20px;

      span {
        font-size: 120px;
      }
    }

    .text {
      h4,
      p {
        color: hsl(0, 0%, 98%);
        transition: all 0.3s;
      }
      h4 {
        font-size: 22px;
        margin-bottom: 5px;
        text-transform: uppercase;
      }

      p {
        font-size: 17px;
        line-height: 26px;
        margin-bottom: 15px;
        transition: all 0.3s;
      }

      a {
        padding: 12px 26px;
        color: hsl(200, 15%, 8%);
        border-radius: 30px;
        background-color: #fff;
        text-decoration: none;
        display: inline-block;
      }
    }

    @media screen and (max-width: 600px) {
      flex-direction: column;
      text-align: center;

      .emoji {
        span {
          font-size: 80px;
        }
      }
    }
  }

  &.light {
    background: hsl(0, 0%, 98%);

    .error {
      .text {
        h4,
        p {
          color: hsl(200, 15%, 8%);
        }

        a {
          background-color: hsl(200, 15%, 8%);
          color: #fff;
        }
      }
    }
  }
}
</style>