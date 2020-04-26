<template>
  <v-container>
    <h1>
      MovieApp
    </h1>
      <v-btn @click="show = !show" icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn @click="toggleView" icon>
        <v-icon>{{ showFavorites ? 'mdi-home' : 'mdi-heart' }}</v-icon>
      </v-btn>
      <v-btn
        v-show="pageNum > 1"
        @click="goBackwards"
        icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn
        @click="goForwards"
        icon>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    <v-expand-transition>
      <div v-show="show">
        <Search @search-response="applySearchResults($event)"/>
      </div>
    </v-expand-transition>
  </v-container>
</template>

<script>
import Search from './Search.vue';

export default {
  name: 'Header',
  components: {
    Search,
  },
  props: {
    showFavorites: Boolean,
    pageNum: Number,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleView() {
      this.$emit('toggle-view');
    },
    applySearchResults($event) {
      this.$emit('search-response', $event);
    },
    goBackwards() {
      this.$emit('go-backwards');
    },
    goForwards() {
      this.$emit('go-forwards');
    },
  },
};
</script>
