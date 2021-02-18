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
        v-model.trim="search"
      />
      <base-button>Search</base-button>
    </form>

    <div class="loading-list" v-if="loading">
      <skeleton-loader v-for="i in 10" :key="i"></skeleton-loader>
    </div>

    <div class="movies-list" v-if="!loading && movies.length > 0">
      <single-movie
        v-for="movie in movies"
        :key="movie.imdbID"
        :movie="movie"
      ></single-movie>
    </div>

    <div class="error-box" v-if="!loading && error">
      <span>&#x1F615; </span>
      <p>
        Sorry but there has been an error, and we are currently unable to
        provide you with details about your requested movie for now due to some
        reasons.
      </p>
      <base-button @click="hideError">Try Again</base-button>
    </div>

    <div class="empty" :class="{ show: emptyInput }">
      <img src="../assets/alert-triangle.svg" alt="" />
      You have not entered any value
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
import SingleMovie from "../components/SingleMovie.vue";
import SkeletonLoader from "../components/SkeletonLoader.vue";

export default {
  name: "Home",
  components: {
    SingleMovie,
    SkeletonLoader,
    BaseButton,
  },
  data() {
    return {
      loading: false,
      error: false,
      search: "",
      movies: [],
      emptyInput: false,
    };
  },
  methods: {
    searchMovies() {
      if (this.search === "") {
        this.emptyInput = true;
        setTimeout(() => {
          this.emptyInput = false;
        }, 2000);
      } else {
        this.loading = true;
        this.movies = [];
        fetch(`https://www.omdbapi.com/?apikey=c4ee6fc4&s=${this.search}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            if (data.Search) {
              this.movies = data.Search;
              setTimeout(() => {
                this.loading = false;
              }, 1500);
              this.error = false;
            } else {
              setTimeout(() => {
                this.loading = false;
              }, 3500);
              this.error = true;
            }
          })
          .catch((error) => {
            console.log(error);
            this.loading = false;
            this.error = true;
          });
      }
    },
    hideError() {
      this.loading = false;
      this.error = false;
    },
  },
};
</script>

<style lang="scss">
.empty {
  display: flex;
  align-items: center;
  border-radius: 4px;
  background: rgb(255, 145, 0);
  position: absolute;
  top: 80px;
  right: -100%;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 20px 30px;
  z-index: 999;
  transition: all 0.5s ease-in-out;

  &.show {
    right: 10px;
  }

  img{
    margin-right: 10px;
    height: 20px;
    width: 20px;
  }
}

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
}
</style>