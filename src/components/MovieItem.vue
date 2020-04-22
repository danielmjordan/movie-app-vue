<template>
  <v-card
    @click="testing"
    class="mx-auto"
    max-width="500"
    dark
  >
    <v-img
      class="white--text align-end"
      :src="imageUrl + movie.poster_path"
    >
    </v-img>
    <v-card-title class="headline">{{ movie.title }}</v-card-title>
    <v-card-subtitle>
      Rating: {{ movie.vote_average }} ({{movie.vote_count}} votes)
    </v-card-subtitle>
    <v-card-text style="overflow-y: auto; height:100px" >
      {{ movie.overview }}
    </v-card-text>
    <v-card-actions>
      <v-btn @click="add">
        Add
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="remove">
        Remove
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'MovieItem',
  props: {
    movie: Object,
  },
  data() {
    return {
      imageUrl: 'https://image.tmdb.org/t/p/w500',
    };
  },
  methods: {
    remove() {
      console.log(this.movie.id);
    },
    add() {
      console.log(this.movie.id);
    },
  },
};
</script>
