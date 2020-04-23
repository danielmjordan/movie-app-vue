<template>
  <v-continer fluid>
    <v-card>
      <h1>Movie Detail Page</h1>
      <p v-for="detail in movieDetails" :key="detail.id">
        <span>{{ detail }}</span>
      </p>
    </v-card>
  </v-continer>
</template>

<script>
export default {
  name: 'MovieItemDetail',
  props: {
    movieDetails: Object,
  },
};
</script>
