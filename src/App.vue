<template>
  <v-app>
    <v-container>
      <Search />
      <MovieList :movies="movies"/>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios';
// import sampleData from './data/sampleData';
import MovieList from './components/MovieList.vue';
import Search from './components/Search.vue';

export default {
  name: 'App',
  components: {
    MovieList,
    Search,
  },

  data() {
    return {
      movies: null,
      importedMovies: null,
    };
  },

  mounted() {
    axios
      .get(process.env.VUE_APP_BASE_URL)
      .then((response) => {
        const { results } = response.data;
        this.movies = results;
      })
      .catch((err) => err);
  },
};
</script>
