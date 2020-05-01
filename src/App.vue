<template>
  <v-app>
    <v-container>
      <Header
        :showFavorites="showFavorites"
        :page="page"
        @toggle-view="toggleView()"
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
    ...mapState([
      'movies',
      'page',
      'favorites',
      'heading',
      'category',
    ])
  },

  methods: {
    toggleView() {
      this.showFavorites = !this.showFavorites;
    },
    removeMovie(id) {
      this.$store.dispatch('REMOVE_FROM_FAVORITES', id);
    },
  },

  watch: {
    page() {
      this.$store.dispatch('fetchFilms', {
        page: this.page,
        category: this.category
      })
    }
  },

  mounted() {
    this.$store.dispatch('fetchFilms', {
      page: this.page,
      category: this.category
    })
  },
};
</script>
