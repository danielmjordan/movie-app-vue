<template>
<v-container>
  <v-card>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Search for films"
          prepend-icon="mdi-magnify"
          v-model="userInput"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
        @click="query"
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

  data: () => ({
    userInput: '',
  }),

  methods: {
    query: () => this.userInput,
  },
};
</script>
