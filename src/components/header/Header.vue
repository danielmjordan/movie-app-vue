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
      this.show = false;
    },
  },
};
</script>
