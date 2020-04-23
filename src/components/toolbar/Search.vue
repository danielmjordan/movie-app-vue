<template>
<v-container>
  <v-form>
    <v-text-field
      label="Search for films"
      prepend-icon="mdi-magnify"
      v-model="queryString"
    />
  </v-form>
  <v-btn
    @click="search"
    dark
  >
    Search!
  </v-btn>
</v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Search',

  data() {
    return {
      queryString: '',
    };
  },

  methods: {
    search() {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=1&query=${this.queryString}`)
        .then((response) => {
          this.$emit('search-response', response);
        })
        .catch((err) => err);
      this.queryString = '';
    },
  },
};
</script>
