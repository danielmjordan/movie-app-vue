<template>
  <v-continer fluid>
    <v-card>
      <v-img
        :src="imageUrl + movieDetails.backdrop_path"
      >
      </v-img>
      <v-card-title>{{ movieDetails.title }}</v-card-title>
      <v-card-subtitle>
        Rating: {{ movieDetails.vote_average }} ({{ movieDetails.vote_count}} votes)
      </v-card-subtitle>
      <v-card-text height="200">
        <span>
          {{ movieDetails.overview }}
        </span>
        <span>
          {{ movieDetails.release_date }}
        </span>
      </v-card-text>
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
