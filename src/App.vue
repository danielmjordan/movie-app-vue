<template>
  <v-app>
    <v-container>
      <v-card>
        <v-card-title>
          MovieApp
        </v-card-title>
      </v-card>
      <Search />
      <MovieList />
    </v-container>
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
