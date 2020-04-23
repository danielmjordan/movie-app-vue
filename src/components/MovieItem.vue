<template>
  <v-card
    class="mx-auto"
    max-width="500"
    dark
    hover
  >
    <v-img
      class="white--text align-end"
      :src="imageUrl + movie.poster_path"
    />
    <v-card-title
      class="headline text-truncate d-inline-block"
      style="max-width: 350px"
    >
      {{ movie.title }}
    </v-card-title>
    <v-card-subtitle>
      Rating: {{ movie.vote_average }} ({{movie.vote_count}} votes)
    </v-card-subtitle>
    <v-card-actions>
      <v-btn @click="addToFavorites">
        <v-icon>mdi-cards-heart</v-icon>
      </v-btn>
      <v-btn @click="removeFromList">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        @click="show = !show"
        icon
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-card-text>
          {{ movie.overview }}
        </v-card-text>
      </div>
    </v-expand-transition>
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
      show: false,
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
