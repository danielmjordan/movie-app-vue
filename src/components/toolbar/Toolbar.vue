<template>
  <v-container>
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        MovieApp
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn
        @click="toggleView"
        icon
      >
        <v-icon>{{ showFavorites ? 'mdi-filmstrip' : 'mdi-heart' }}</v-icon>
      </v-btn>
    </v-toolbar>
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
