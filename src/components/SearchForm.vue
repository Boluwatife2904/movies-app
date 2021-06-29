<template>
  <form @submit.prevent="searchMovies" class="search-form">
    <input
      type="text"
      placeholder="Search for your favorite movies..."
      v-model.trim="search"
    />
    <base-button>Search</base-button>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SearchForm",
  emits: ["start-search"],
  setup(_, context) {
    const search = ref("");

    const searchMovies = () => {
      context.emit("start-search", search.value)
    }
    
    return { search, searchMovies }
  }
};
</script>

<style lang="scss" scoped>
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
</style>