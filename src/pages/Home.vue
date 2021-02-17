<template>
  <div class="home">
    <div class="featured-movie">
      <router-link :to="{ name: 'MovieDetail', params: { id : 'tt7441658'}}" id="tt7441658">
        <img
          src="https://res.cloudinary.com/juwon-tech/image/upload/v1613584376/black-clover_tolbsg.jpg"
          alt="Black Clover Poster"
          class="featured-movie-img"
        />
        <div class="featured-movie-detail">
          <h4>Black Clover</h4>
          <p>
            Black Clover (Japanese: ブラッククローバー, Hepburn: Burakku Kurōbā)
            is a Japanese manga series written and illustrated by Yūki Tabata.
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

    <div class="search-results" v-if="movies.length > 0">
      <h3>Search results for {{ search }}</h3>

      <div class="movies-list">
        <div
          class="movie"
          v-for="movie in movies"
          :key="movie.imdbID"
          :id="movie.imdbID"
        >
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
                :alt="movie.Title + 'Poster'"
              />
              <span class="type"> {{ movie.Type }}</span>
            </div>
            <div class="movie-detail">
              <p class="year">{{ movie.Year }}</p>
              <h4 class="title">{{ movie.Title }}</h4>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import env from "@/env.js";

export default {
  name: "Home",
  data() {
    return {
      search: "",
      movies: [],
    };
  },
  methods: {
    searchMovies() {
      if (this.search != "") {
        fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${this.search}`)
          .then((response) => response.json())
          .then((data) => {
            this.movies = data.Search;
            // this.search = "";
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
    margin-bottom: 30px;

    .featured-movie-img {
      display: block;
      height: 500px;
      width: 100%;
      // object-fit: contain;

      position: relative;
      z-index: 0;
    }

    .featured-movie-detail {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 30px 16px 50px;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 1;

      h4 {
        font-size: 30px;
        margin-bottom: 12px;
        color: #fff;
      }

      p {
        font-size: 18px;
        color: #fff;
        line-height: 30px;
        margin-bottom: 0;
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
      font-size: 20px;
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

  .search-results {
    padding: 10px 50px 50px;

    h3{
      color: #fff;
      margin-bottom: 30px;
    }

    .movies-list {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin: 0 auto;

      @media screen and (max-width: 1360px) {
        justify-content: space-between;
      }

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
              // object-fit: cover;
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
    }
  }
}
</style>