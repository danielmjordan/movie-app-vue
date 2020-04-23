<template>
<v-container fluid>
  <v-expand-transition>
    <v-dialog
      v-model="showDetail"
      width="800"
      scrollable
      dark>
      <MovieItemDetail
        :movieDetails="movie"
        :imageUrl="imageUrl"/>
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
        @click="addToFavorites"
        v-if="showIcon">
        <v-icon>{{ clicked ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
      </v-btn>
      <v-btn @click="removeFromList">
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
      clicked: false,
      imageUrl: 'https://image.tmdb.org/t/p/w500',
    };
  },
  methods: {
    removeFromList() {
      this.$emit('remove-from-list', this.movie.id);
      this.clicked = !this.clicked;
    },
    addToFavorites() {
      this.$emit('add-to-favorites', this.movie);
      this.clicked = !this.clicked;
    },
  },
};
</script>
