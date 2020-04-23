<template>
  <v-container>
    <div class="header">
      <h1>
        MovieApp
      </h1>
      <span class="header-controls">
        <v-btn icon @click="show = !show">
          <v-icon large>mdi-magnify</v-icon>
        </v-btn>
        <v-btn
          @click="toggleView"
          icon
        >
          <v-icon large>{{ showFavorites ? 'mdi-home' : 'mdi-heart' }}</v-icon>
        </v-btn>
      </span>
    </div>
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
  name: 'Toolbar',
  components: {
    Search,
  },
  props: {
    showFavorites: Boolean,
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
  },
};
</script>
