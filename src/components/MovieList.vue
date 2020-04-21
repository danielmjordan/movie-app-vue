<template>
  <v-container>
    <ul>
      <li v-for="movie in movies" :key="movie.id" style="none">
        <MovieItem :movie="movie" :title="movie.title"/>
      </li>
    </ul>
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
};
</script>

<style scoped>
  li {
    list-style: none;
  }
</style>
