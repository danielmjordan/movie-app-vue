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
import Header from './components/header/Header.vue';
import MovieList from './components/MovieList.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    MovieList,
  },

  data() {
    return {
      showFavorites: false,
    };
  },

  computed: {
    ...mapState({
      movies: state => state.movies,
      pageNumber: state => state.page,
      favorites: state => state.favorites,
      heading: state => state.heading,
    })
  },

  methods: {
    applySearchResults($event) {
      const { results } = $event.data;
      this.movies = results
        .filter((el) => el.poster_path)
        .sort((a, b) => b.popularity - a.popularity);
      this.heading = 'Search Results';
    },
    toggleView() {
      this.showFavorites = !this.showFavorites;
      this.$store.dispatch('loadMovies', this.pageNumber);
    },
    removeMovie(id) {
      this.$store.dispatch('REMOVE_FROM_FAVORITES', id);
    },
  },

  watch: {
    pageNumber() {
      this.$store.dispatch('loadMovies', this.pageNumber);
    },
  },

  mounted() {
    this.$store.dispatch('loadMovies', this.pageNumber)
  },
};
</script>
