<template>
  <div class="featured-movie">
    <router-link
      :to="{ name: 'MovieDetail', params: { id: 'tt7441658' } }"
      id="tt7441658"
    >
      <img
        src="https://res.cloudinary.com/juwon-tech/image/upload/v1613584376/black-clover_tolbsg.jpg"
        alt="Black Clover Poster"
        class="featured-movie-img"
      />
      <div class="featured-movie-detail">
        <h4>Black Clover</h4>
        <p>
          <span
            >Black Clover (Japanese: ブラッククローバー, Hepburn: Burakku
            Kurōbā) is a Japanese manga series written and illustrated by Yūki
            Tabata.</span
          >
          The story centers around Asta, a young boy seemingly born without any
          magic power, something that is unknown in the world he lives in.
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FeaturedMovie",
};
</script>

<style lang="scss" scoped>
.featured-movie {
  position: relative;
  margin-bottom: 10px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .featured-movie-img {
    display: block;
    height: 500px;
    width: 100%;
    position: relative;
    z-index: 0;

    @media screen and (max-width: 576px) {
      height: 400px;
    }
  }

  .featured-movie-detail {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 30px 16px 50px;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;

    @media screen and (max-width: 576px) {
      padding-bottom: 35px;
    }

    h4 {
      font-size: 30px;
      margin-bottom: 12px;
      color: #fff;

      @media screen and (max-width: 576px) {
        font-size: 24px;
      }
    }

    p {
      font-size: 18px;
      color: #fff;
      line-height: 30px;
      margin-bottom: 0;

      @media screen and (max-width: 576px) {
        font-size: 16px;
      }

      span {
        @media screen and (max-width: 576px) {
          display: none;
        }
      }
    }
  }
}
</style>