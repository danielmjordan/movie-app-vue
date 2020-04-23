<template>
<v-container>
  <v-form>
    <v-text-field
      label="Search for films"
      v-model="searchQuery"
    />
    <strong>{{ searchIndicator }}</strong>
  </v-form>
</v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Search',

  data() {
    return {
      searchQuery: '',
      searchQueryIsDirty: false,
      isCalculating: false,
      timeout: null,
    };
  },

  computed: {
    searchIndicator() {
      if (this.isCalculating) {
        return 'Searching...';
      }
      if (this.searchQueryIsDirty) {
        return '...Typing';
      }
      return 'Done';
    },
  },

  watch: {
    searchQuery() {
      this.searchQueryIsDirty = true;
      this.search();
    },
  },

  methods: {
    search() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(() => {
        this.isCalculating = true;
        axios
          .get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=1&query=${this.searchQuery}`)
          .then((response) => {
            this.$emit('search-response', response);
          })
          .then(() => {
            this.isCalculating = false;
            this.searchQueryIsDirty = false;
          })
          .catch((err) => err);
      }, 500);
    },
  },
};
</script>
