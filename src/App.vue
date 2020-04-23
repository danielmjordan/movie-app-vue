<template>
  <v-app>
    <v-container>
      <Header
        :showFavorites="showFavorites"
        @toggle-view="toggleView()"
        @search-response="applySearchResults($event)"
      />
      <div v-show="!showFavorites">
        <MovieList
          :movies="movies"
          @add-to-favorites="addFavorite($event)"
          @remove-from-list="removeMovie($event)"
        />
      </div>
      <div v-show="showFavorites">
        <h2>Favorites ({{ favorites.length }})</h2>
        <MovieList
          :movies="favorites"
          @remove-from-list="removeFromFavorites($event)"
        />
      </div>
      </v-container>
  </v-app>
</template>

<script>
import axios from 'axios';
import Header from './components/header/Header.vue';
import MovieList from './components/MovieList.vue';

export default {
  name: 'App',
  components: {
    Header,
    MovieList,
  },

  data() {
    return {
      movies: null,
      showFavorites: false,
      favorites: [],
      page: 2,
    };
  },

  methods: {
    applySearchResults($event) {
      const { results } = $event.data;
      this.movies = results
        .filter((el) => el.poster_path)
        .sort((a, b) => b.popularity - a.popularity);
    },
    toggleView() {
      this.showFavorites = !this.showFavorites;
    },
    addFavorite(movie) {
      this.favorites.push(movie);
    },
    removeMovie(id) {
      this.movies = this.movies.filter((el) => el.id !== id);
    },
    removeFromFavorites(id) {
      this.favorites = this.favorites.filter((el) => el.id !== id);
    },
  },

  mounted() {
    axios
      .get(`${process.env.VUE_APP_BASE_URL}top_rated?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=${this.page}`)
      .then((response) => {
        const { results } = response.data;
        this.movies = results;
      })
      .catch((err) => err);
  },
};
</script>
