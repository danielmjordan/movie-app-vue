<template>
<v-container fluid>
  <v-expand-transition>
    <v-dialog
      v-model="showDetail"
      width="800"
      scrollable
      dark>
      <MovieItemDetail
        @close-modal="showDetail = false"
        :movieDetails="movie"
        :favorited="favorited"
        :imageUrl="imageUrl"
        :removeFromFavorites="removeFromFavorites"
        :addToFavorites="addToFavorites"/>
    </v-dialog>
  </v-expand-transition>
  <v-card
    class="mx-auto"
    width="500"
    dark
    hover>
    <div @click="showDetail = !showDetail">
      <v-img
        class="white--text align-end"
        :src="imageUrl + movie.poster_path"
        height="500"/>
      <v-card-title
        class="headline text-truncate d-inline-block"
        style="max-width: 350px">
        {{ movie.title }}
      </v-card-title>
    </div>
    <v-card-subtitle>
      Rating: {{ movie.vote_average }} ({{movie.vote_count}} votes)
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
        @click="favorited ? removeFromFavorites() : addToFavorites()"
        v-if="showIcon">
        <v-icon>{{ favorited ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
      </v-btn>
      <v-btn @click="favorited ? removeFromFavorites() : removeFromList()">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        @click="show = !show"
        v-if="movie.overview"
        icon>
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
  <div class="text-center">
    <v-snackbar
      v-model="snackbar"
      :timeout = 2500
      bottom
      left
    >
      "{{ movie.title }}" has been {{ favorited ? 'added to' : 'removed from' }} your favorites
      <v-btn
        color="blue"
        text
        @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </div>
</v-container>

</template>

<script>
import MovieItemDetail from './MovieItemDetail.vue';

export default {
  name: 'MovieItem',
  props: {
    movie: Object,
    showIcon: Boolean,
  },
  components: {
    MovieItemDetail,
  },
  data() {
    return {
      show: false,
      showDetail: false,
      favorited: false,
      snackbar: false,
      imageUrl: 'https://image.tmdb.org/t/p/w500',
    };
  },
  methods: {
    removeFromList() {
      this.$store.commit('REMOVE_FROM_LIST', this.movie.id);
    },
    addToFavorites() {
      this.$store.commit('ADD_TO_FAVORITES', this.movie)
      this.favorited = true;
      this.snackbar = true;
    },
    removeFromFavorites() {
      this.$store.commit('REMOVE_FROM_FAVORITES', this.movie.id);
      this.favorited = false;
      this.snackbar = true;
    },
  },
};
</script>
