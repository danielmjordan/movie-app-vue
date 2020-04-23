<template>
  <v-continer fluid>
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
          @click="addToFavorites">
          <v-icon>{{ clicked ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
        </v-btn>
        <v-btn @click="removeFromList">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-continer>
</template>

<script>
export default {
  name: 'MovieItemDetail',
  props: {
    imageUrl: String,
    movieDetails: Object,
  },
};
</script>
