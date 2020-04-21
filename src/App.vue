<template>
  <v-app>
    <v-container>
      <v-card>
        <v-card-title>
          MovieApp
        </v-card-title>
      </v-card>
      <Search />
      <MovieList :movies="movies"/>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios';
import sampleData from './data/sampleData';
import MovieList from './components/MovieList.vue';
import Search from './components/Search.vue';

export default {
  name: 'App',
  components: {
    MovieList,
    Search,
  },

  data: () => ({
    movies: sampleData.results,
    importedMovies: null,
  }),

  mounted: () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.VUE_APP_MOVIE_API_KEY}&language=en-US&page=2`)
      .then((response) => {
        const { results } = response.data;
        this.importedMovies = results;
      })
      .catch((err) => err);
  },
};
</script>
