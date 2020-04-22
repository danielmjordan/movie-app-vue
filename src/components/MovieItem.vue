<template>
  <v-card
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
    <v-card-text>
      {{ movie.overview }}
    </v-card-text>
    <v-card-actions>
      <v-btn @click="addToFavorites">
        <v-icon>mdi-cards-heart</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="removeFromList">
        <v-icon>mdi-delete</v-icon>
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
    removeFromList() {
      this.$emit('remove-from-list', this.movie.id);
    },
    addToFavorites() {
      this.$emit('add-to-favorites', this.movie);
    },
  },
};
</script>
