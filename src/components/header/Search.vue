<template>
<v-container>
  <v-form>
    <v-text-field
      label="Search for films"
      v-model="queryString"
      @keyup="search"
    />
  </v-form>
</v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Search',

  data() {
    return {
      queryString: '',
      timeout: null,
    };
  },

  methods: {
    search() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(() => {
        axios
          .get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=1&query=${this.queryString}`)
          .then((response) => {
            this.$emit('search-response', response);
          })
          .catch((err) => err);
      }, 500);
    },
  },
};
</script>
