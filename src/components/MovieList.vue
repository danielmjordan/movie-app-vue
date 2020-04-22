<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="movie in movies"
        :key="movie.id"
        style="none"
        cols="4"
      >
        <MovieItem :movie="movie" @add-to-favorites="addFavorite($event)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MovieItem from './MovieItem.vue';

export default {
  name: 'MovieList',
  props: {
    movies: Array,
  },
  components: {
    MovieItem,
  },
  methods: {
    addFavorite($event) {
      this.$emit('add-to-favorites', $event);
    },
  },
};
</script>
