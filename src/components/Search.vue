<template>
  <v-card>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Search"
          prepend-icon="mdi-search"
          v-model="queryString"
        />
      </v-form>
      {{ queryString }}
    </v-card-text>
    <v-card-actions>
      <v-btn @click="query">Search!</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Search',

  data: () => ({
    queryString: '',
  }),
  methods: {
    query: () => {
      console.log(this.queryString);
    },
  },
};
</script>
