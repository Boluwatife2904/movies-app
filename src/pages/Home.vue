<template>
  <div class="home">
    <FeaturedMovie />

    <!-- SEARCH FORM -->
    <SearchForm @start-search="searchMovies" />
    
    <!-- SKELETON LOADING -->
    <flex-container v-if="loading">
      <skeleton-loader v-for="i in 10" :key="i"></skeleton-loader>
    </flex-container>

    <!-- MOVIES LIST -->
    <flex-container v-if="!loading && movies.length > 0">
      <single-movie
        v-for="movie in movies"
        :key="movie.imdbID"
        :movie="movie"
      ></single-movie>
    </flex-container>

    <!-- ERROR MESSAGE -->
    <ErrorMessage v-if="!loading && error" @hide-error="hideError" />

    <!-- ALERT  -->
    <Alert message="You have not entered any value" :visible="emptyInput"/>
  </div>
</template>

<script>
import FeaturedMovie from "../components/FeaturedMovie.vue";
import SingleMovie from "../components/SingleMovie.vue";
import SkeletonLoader from "../components/SkeletonLoader.vue";
import FlexContainer from "../components/FlexContainer.vue";
import Alert from "../components/Alert.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
import SearchForm from "../components/SearchForm.vue";

export default {
  name: "Home",
  components: {
    FeaturedMovie,
    SingleMovie,
    SkeletonLoader,
    FlexContainer,
    Alert,
    ErrorMessage,
    SearchForm
  },
  data() {
    return {
      loading: false,
      error: false,
      movies: [],
      emptyInput: false,
    };
  },
  methods: {
    searchMovies(search) {
      if (search === "") {
        this.emptyInput = true;
        setTimeout(() => {
          this.emptyInput = false;
        }, 2000);
      } else {
        this.loading = true;
        fetch(`https://www.omdbapi.com/?apikey=c4ee6fc4&s=${search}`)
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

<style></style>