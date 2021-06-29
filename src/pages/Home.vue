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
    <Alert message="You have not entered any value" :visible="emptyInput" />
  </div>
</template>

<script>
import { ref } from "vue";
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
    SearchForm,
  },
  setup() {
    const loading = ref(false);
    const error = ref(false);
    const movies = ref([]);
    const emptyInput = ref(false);

    const searchMovies = (term) => {
      if (term === "") {
        emptyInput.value = true;
        setTimeout(() => {
          emptyInput.value = false;
        }, 2000);
      } else {
        loading.value = true;
        fetch(`https://www.omdbapi.com/?apikey=c4ee6fc4&s=${term}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            if (data.Search) {
              movies.value = data.Search;
              setTimeout(() => {
                loading.value = false;
              }, 1000);
              error.value = false;
            } else {
              error.value = true;
            }
          })
          .catch(() => {
            loading.value = false;
            error.value = true;
          });
      }
    };

    const hideError = () => {
      loading.value = false;
      error.value = false;
    };

    return { loading, error, movies, emptyInput, searchMovies, hideError };
  },
};
</script>

<style></style>