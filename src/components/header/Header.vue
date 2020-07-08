<template>
  <v-container>
    <h1>
      MovieApp!
    </h1>
    <v-btn @click="showSelect = !showSelect" icon>
      <v-icon>mdi-sort-variant</v-icon>
    </v-btn>
    <v-btn @click="showSearch = !showSearch" icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn @click="toggleView" icon>
      <v-icon>{{ showFavorites ? 'mdi-home' : 'mdi-heart' }}</v-icon>
    </v-btn>
    <v-btn :disabled="page === 1" @click="navigatePage('backwards')" icon>
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-btn @click="navigatePage('forwards')" icon>
      <v-icon>mdi-arrow-right</v-icon>
    </v-btn>
    <v-expand-transition>
      <div v-show="showSearch">
        <Search @search-completed="showSearch = false" />
      </div>
    </v-expand-transition>
    <v-expand-transition>
      <div v-show="showSelect">
        <Selector @category-selected="showSelect = false" />
      </div>
    </v-expand-transition>
  </v-container>
</template>

<script>
import Search from './Search.vue';
import Selector from './Selector.vue';

export default {
  name: 'Header',
  components: {
    Search,
    Selector,
  },
  props: {
    showFavorites: Boolean,
    page: Number,
  },
  data() {
    return {
      showSearch: false,
      showSelect: false,
    };
  },
  methods: {
    toggleView() {
      this.$emit('toggle-view');
    },
    navigatePage(direction) {
      this.$store.dispatch('navigatePage', direction);
    },
  },
};
</script>
