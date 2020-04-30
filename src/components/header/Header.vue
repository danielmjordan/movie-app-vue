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
        :disabled="page === 1"
        @click="navigatePage('backwards')"
        icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn
        @click="navigatePage('forwards')"
        icon>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    <v-expand-transition>
      <div v-show="show">
        <Search />
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
    page: Number,
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
    navigatePage(direction) {
      this.$store.dispatch('navigatePage', direction)
    }
  },
};
</script>
