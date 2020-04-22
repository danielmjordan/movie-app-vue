<template>
  <v-app>
    <v-container>
      <Search />
      <MovieList :movies="movies" @add-to-favorites="addFavorite($event)"/>
    </v-container>
    <v-container>
      <h2>Favorites</h2>
      <MovieList :movies="favorites" />
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios';
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
      showFavorites: false,
      favorites: [],
    };
  },

  methods: {
    addFavorite(movie) {
      this.favorites.push(movie);
      console.log(this.favorites);
    },
    removeFromList() {

    },
  },

  mounted() {
    axios
      .get(`${process.env.VUE_APP_BASE_URL}`)
      .then((response) => {
        const { results } = response.data;
        this.movies = results;
      })
      .catch((err) => err);
  },
};
</script>
