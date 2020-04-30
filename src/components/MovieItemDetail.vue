<template>
  <v-container fluid>
    <v-card>
      <v-img
        :src="movieDetails.backdrop_path ?
        imageUrl + movieDetails.backdrop_path : imageUrl + movieDetails.poster_path"
        height="500"
      >
      </v-img>
      <v-card-title>{{ movieDetails.title }}</v-card-title>
      <v-card-subtitle>
        Rating: {{ movieDetails.vote_average }} ({{ movieDetails.vote_count}} votes)
      </v-card-subtitle>
      <v-card-text height="200">
          {{ movieDetails.overview }}
      </v-card-text>
      <v-card-actions>
        <v-btn
          @click="favorited ? removeFromFavorites() : addToFavorites()">
          <v-icon>{{ favorited ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="closeModal">
          <v-icon>mdi-close-circle</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'MovieItemDetail',
  props: {
    imageUrl: String,
    movieDetails: Object,
    favorited: Boolean
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    },
    ...mapMutations({
      addToFavorites: ('ADD_TO_FAVORITES', this.movie),
      removeFromFavorites: ('REMOVE_FROM_FAVORITES', this.movie.id)
    })
  },
};
</script>
