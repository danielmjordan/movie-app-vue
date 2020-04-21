<template>
<v-container>
  <v-card>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Search for films"
          prepend-icon="mdi-magnify"
          v-model="queryString"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
        @click="search"
        color='info'
      >
        Search!
      </v-btn>
    </v-card-actions>
  </v-card>
</v-container>
</template>

<script>
export default {
  name: 'Search',

  data() {
    return {
      queryString: '',
    };
  },

  methods: {
    search() {
      console.log(this.queryString);
    },
  },
};
</script>
