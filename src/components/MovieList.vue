<template>
  <v-container fluid>
    <h2>{{ heading }}</h2>
    <v-row dense>
      <v-col v-for="movie in movies" :key="movie.id" style="none" cols="4">
        <MovieItem
          :movie="movie"
          :showIcon="showIcon"
          @remove-from-list="removeMovie($event)"
        />
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
    heading: String,
    showIcon: Boolean,
  },
  components: {
    MovieItem,
  },
  methods: {
    removeMovie($event) {
      this.$emit('remove-from-list', $event);
    },
  },
};
</script>
