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
      <v-card-text>
        {{ movieDetails.overview }}
      </v-card-text>
      <v-card-actions>
        <v-btn
          @click="handleFavorite">
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

export default {
  name: 'MovieItemDetail',
  props: {
    imageUrl: String,
    movieDetails: Object,
    favorited: Boolean,
    removeFromFavorites: Function,
    addToFavorites: Function
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    },
    handleFavorite() {
      if (this.favorited) {
        this.removeFromFavorites()
        this.closeModal()
      } else {
        this.addToFavorites()
        this.closeModal()
      }
    }
  },
};
</script>