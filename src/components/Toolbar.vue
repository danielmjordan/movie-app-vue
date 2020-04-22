<template>
  <v-container>
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>MovieApp</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="showSearch = !showSearch">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
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
  data() {
    return {
      showSearch: false,
    };
  },
};
</script>
