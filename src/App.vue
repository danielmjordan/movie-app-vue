<template>
  <v-app>
    <v-card>
      <v-card-title>
        <h1>Movie App!</h1>
      </v-card-title>
    </v-card>
    <Search />
    <MovieList />
  </v-app>
</template>

<script>
import MovieList from './components/MovieList.vue';
import Search from './components/Search.vue';

export default {
  name: 'App',

  components: {
    MovieList,
    Search,
  },

  data: () => ({
    //
  }),
};
</script>
