<template>
<v-container>
  <v-form>
    <v-text-field
      label="Search for films"
      v-model="searchQuery"/>
    <strong v-if="searchQuery">{{ searchIndicator }}</strong>
  </v-form>
</v-container>
</template>

<script>
import EventService from '@/services/EventService';
import { mapState } from 'vuex';

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
    ...mapState(['totalSearchResults']),
    searchIndicator() {
      if (this.isCalculating) {
        return 'Searching...';
      }
      if (this.searchQueryIsDirty) {
        return 'Typing...';
      }
      return `✓ Finished - (${this.totalSearchResults}) films match your query`;
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
        EventService.getFilmsBySearchQuery(this.searchQuery)
          .then((response) => {
            this.$store.dispatch('fetchFilmsByQuery', response.data);
          })
          .then(() => {
            setTimeout(() => {
              this.isCalculating = false;
              this.searchQueryIsDirty = false;
            }, 500);
          })
          .catch((err) => err);
      }, 500);
    },
  },
};
</script>
