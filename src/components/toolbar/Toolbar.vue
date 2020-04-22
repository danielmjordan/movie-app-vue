<template>
  <v-container>
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        MovieApp
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="showSearch = !showSearch">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn
        v-if="!showFavorites"
        @click="toggleView"
        icon
      >
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn
        v-else
        @click="toggleView"
        icon>
        <v-icon>mdi-filmstrip</v-icon>
      </v-btn>

    </v-toolbar>
    <Search v-show="showSearch"/>
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
      showSearch: false,
    };
  },
  methods: {
    toggleView() {
      this.$emit('toggle-view');
    },
  },
};
</script>
