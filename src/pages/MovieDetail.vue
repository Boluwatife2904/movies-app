<template>
  <div class="single-movie">
    <div class="poster-and-details">
      <div class="movie-poster">
        <img
          :src="
            movie.Poster === 'N/A'
              ? 'https://res.cloudinary.com/juwon-tech/image/upload/v1613584373/no-movie-poster_pzebas.jpg'
              : movie.Poster
          "
          :alt="movie.Title + 'Poster'"
        />
        <span class="type">{{ movie.Type }}</span>
      </div>
      <div class="movie-details">
        <h4 class="title">{{ movie.Title }}</h4>
        <p class="plot">{{ movie.Plot }}</p>
        <p class="actors"><span>Starring:</span> {{ movie.Actors }}</p>
        <p class="country"><span>Country:</span> {{ movie.Country }}</p>
        <p class="writer"><span>Writer:</span> {{ movie.Writer }}</p>
        <p class="awards"><span>Awards:</span> {{ movie.Awards }}</p>
      </div>
    </div>
    <h3 class="more-header">More Details</h3>
    <div class="more-details">
      <div class="single-detail">
        <h6>Genre:</h6>
        <span> {{ movie.Genre }}</span>
      </div>
      <div class="single-detail">
        <h6>Language:</h6>
        <span> {{ movie.Language }}</span>
      </div>
      <div class="single-detail">
        <h6>Released:</h6>
        <span> {{ movie.Released }}</span>
      </div>
      <div class="single-detail">
        <h6>Runtime:</h6>
        <span> {{ movie.Runtime }}</span>
      </div>
      <div class="single-detail">
        <h6>Rated:</h6>
        <span> {{ movie.Rated }}</span>
      </div>
      <div class="single-detail">
        <h6>Director:</h6>
        <span> {{ movie.Director }}</span>
      </div>
      <div class="single-detail">
        <h6>Rating:</h6>
        <span> {{ movie.imdbRating }}/10</span>
      </div>
      <div class="single-detail">
        <h6>Seasons:</h6>
        <span>
          {{ movie.totalSeasons ? movie.totalSeasons : "Not Available" }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      movie: {},
    };
  },
  mounted() {
    fetch(`https://www.omdbapi.com/?apikey=c4ee6fc4&i=${this.id}&plot=full`)
      .then((response) => response.json())
      .then((data) => {
        this.movie = data;
      });
  },
};
</script>

<style lang="scss" scoped>
.single-movie {
  padding: 40px 80px 20px;

  @media screen and (max-width: 768px) {
    padding: 30px 40px 20px;
  }

  @media screen and (max-width: 576px) {
    padding: 30px 15px 20px;
  }

  .poster-and-details {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 992px) {
      flex-direction: column;
    }

    .movie-poster {
      width: 40%;
      flex: 1 1 40%;
      margin-right: 2.5%;
      position: relative;

      @media screen and (max-width: 992px) {
        width: 100%;
        flex: 1 1 100%;
      }

      img {
        position: relative;
        display: block;
        width: 100%;
        height: 420px;
      }

      .type {
        position: absolute;
        top: 8px;
        left: 8px;
        background-color: #42b883;
        color: #fff;
        padding: 10px 16px;
        border-radius: 6px;
        text-transform: capitalize;
      }
    }

    .movie-details {
      width: 60%;
      flex: 1 1 60%;

      @media screen and (max-width: 992px) {
        width: 100%;
        flex: 1 1 100%;
        margin-top: 15px;
      }

      .title {
        font-size: 32px;
        color: #fff;
        margin-bottom: 8px;

        @media screen and (max-width: 576px) {
          font-size: 24px;
        }
      }

      .plot {
        color: #fff;
        line-height: 30px;
        margin-bottom: 20px;
      }

      .country,
      .writer,
      .awards,
      .actors {
        color: #fff;
        line-height: 30px;
        font-weight: 500;

        span {
          display: inline-block;
          font-weight: 600;
          color: rgb(209, 209, 209);
          width: 75px;
        }
      }
    }
  }

  .more-header {
    color: #fff;
    margin: 30px 0 15px;
  }

  .more-details {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 576px) {
      flex-direction: column;
    }

    .single-detail {
      width: 50%;
      flex: 1 1 50%;
      margin-bottom: 15px;

      @media screen and (max-width: 576px) {
        width: 100%;
        flex: 1 1 100%;
      }

      h6 {
        color: rgb(209, 209, 209);
        font-size: 15px;
        font-weight: normal;
        margin-bottom: 5px;
        font-weight: 600;
      }

      span {
        font-size: 18px;
        color: #fff;
        font-weight: 500;
        display: inline-block;
      }
    }
  }
}
</style>