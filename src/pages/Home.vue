<template>
  <div class="home">
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
            The story centers around Asta, a young boy seemingly born without
            any magic power, something that is unknown in the world he lives in.
          </p>
        </div>
      </router-link>
    </div>

    <form @submit.prevent="searchMovies" class="search-form">
      <input
        type="text"
        placeholder="Search for your favorite movies..."
        v-model="search"
      />
      <button type="submit">Search</button>
    </form>

    <div class="movies-list" v-if="loading">
      <skeleton-loader v-for="i in 10" :key="i"></skeleton-loader>
    </div>

    <div class="movies-list" v-if="!loading && movies.length > 0">
      <single-movie
        v-for="movie in movies"
        :key="movie.imdbID"
        :movie="movie"
      ></single-movie>
    </div>
  </div>
</template>

<script>
import SingleMovie from "../components/SingleMovie.vue";
import SkeletonLoader from "../components/SkeletonLoader.vue";

export default {
  name: "Home",
  components: {
    SingleMovie,
    SkeletonLoader,
  },
  data() {
    return {
      loading: false,
      search: "",
      movies: [],
    };
  },
  methods: {
    searchMovies() {
      if (this.search != "") {
        this.loading = true;
        fetch(`https://www.omdbapi.com/?apikey=c4ee6fc4&s=${this.search}`)
          .then((response) => response.json())
          .then((data) => {
            this.loading = false;
            this.movies = data.Search;
          });
      }
    },
  },
};
</script>

<style lang="scss">
.home {
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

  .search-form {
    padding: 30px 20px;
    width: 85%;
    margin: 0 auto 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 576px) {
      width: 100%;
      flex-direction: column;
    }

    input {
      font-family: "Quicksand", sans-serif;
      font-weight: 600;
      display: block;
      outline: none;
      border: none;
      width: 100%;
      background-color: #496583;
      color: #fff;
      font-size: 18px;
      padding: 12px 16px;
      border-radius: 6px;
      margin-right: 20px;
      transition: 0.4s;

      &::placeholder {
        color: #f3f3f3;
      }

      &:focus {
        box-shadow: 0px 3px 6px rgba(87, 77, 77, 0.15);
      }

      @media (max-width: 576px) {
        margin-bottom: 10px;
        margin-right: 0px;
      }
    }

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
      font-weight: 600;
      position: relative;
      z-index: 1;
      overflow: hidden;

      &::after {
        position: absolute;
        content: "";
        height: 100%;
        width: 0%;
        top: 0;
        left: 0;
        background-color: #3b8070;
        z-index: -1;
        transition: all 0.4s ease-in-out;
      }

      &:hover::after {
        width: 100%;
      }

      @media (max-width: 576px) {
        width: 100%;
      }
    }
  }

  .loading-list,
  .movies-list {
    padding: 10px 50px 50px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 0 auto;

    @media screen and (max-width: 1360px) {
      justify-content: space-between;
    }
  }
}
</style>