<template>
  <div class="movie">
    <router-link
      :to="{ name: 'MovieDetail', params: { id: movie.imdbID } }"
      class="movie-link"
    >
      <div class="movie-poster">
        <img
          :src="
            movie.Poster === 'N/A'
              ? 'https://res.cloudinary.com/juwon-tech/image/upload/v1613584373/no-movie-poster_pzebas.jpg'
              : movie.Poster
          "
          :alt="movie.Title + ' Poster'"
          loading="lazy"
        />
        <span class="type"> {{ movie.Type }}</span>
      </div>
      <div class="movie-detail">
        <p class="year">{{ movie.Year }}</p>
        <h4 class="title">{{ movie.Title }}</h4>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.movie {
  max-width: 280px;
  width: 25%;
  flex: 1 1 280px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 30px;
  margin-right: 2.5%;

  @media (max-width: 1120px) {
    width: 50%;
    flex: 1 1 50%;
  }

  @media (max-width: 576px) {
    width: 100%;
    flex: 1 1 100%;
  }

  @media (max-width: 800px) {
    margin-left: auto;
    margin-right: auto;
  }

  .movie-link {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-decoration: none;

    .movie-poster {
      position: relative;
      display: block;

      img {
        display: block;
        height: 275px;
        width: 100%;
      }

      .type {
        position: absolute;
        bottom: 8px;
        left: 8px;
        background-color: #42b883;
        color: #fff;
        padding: 12px 16px;
        text-transform: capitalize;
        font-weight: 600;
        border-radius: 4px;
      }
    }

    .movie-detail {
      background-color: #496583;
      padding: 16px 8px;
      flex: 1 1 100%;

      .year {
        color: rgb(223, 223, 223);
        font-size: 15px;
      }

      .title {
        color: #fff;
        font-weight: 600;
        font-size: 18px;
      }
    }
  }
}
</style>