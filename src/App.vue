<template>
  <v-app>
    <v-container>
      <Header
        :showFavorites="showFavorites"
        :pageNum="pageNumber"
        @toggle-view="toggleView()"
        @go-backwards="pageNumber--"
        @go-forwards="pageNumber++"
        @search-response="applySearchResults($event)"
      />
      <div v-show="!showFavorites">
        <MovieList
          :movies="movies"
          :showIcon="true"
          :heading="heading"
          @add-to-favorites="addFavorite($event)"
          @remove-from-list="removeMovie($event)"
        />
      </div>
      <div v-show="showFavorites">
        <MovieList
          :movies="favorites"
          :showIcon="false"
          :heading="`Favorites (${favorites.length})`"
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
      heading: '',
      pageNumber: 1,
    };
  },

  methods: {
    getFilms(page) {
      axios
        .get(`${process.env.VUE_APP_BASE_URL}top_rated?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=${page}`)
        .then((response) => {
          const { results } = response.data;
          this.movies = results;
          this.heading = 'Top-Rated Films';
        })
        .catch((err) => err);
    },
    applySearchResults($event) {
      const { results } = $event.data;
      this.movies = results
        .filter((el) => el.poster_path)
        .sort((a, b) => b.popularity - a.popularity);
      this.heading = 'Search Results';
    },
    toggleView() {
      this.showFavorites = !this.showFavorites;
      this.getFilms(this.pageNumber);
    },
    addFavorite(movie) {
      if (!this.favorites.includes(movie)) {
        this.favorites.push(movie);
      }
    },
    removeMovie(id) {
      this.movies = this.movies.filter((el) => el.id !== id);
    },
    removeFromFavorites(id) {
      this.favorites = this.favorites.filter((el) => el.id !== id);
    },
  },

  watch: {
    pageNumber() {
      this.getFilms(this.$state.pageNumber);
    },
  },

  mounted() {
    this.getFilms(this.pageNumber);
  },
};
</script>
