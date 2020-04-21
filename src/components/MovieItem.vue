<template>
  <v-card>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-subtitle>
      {{ movie.overview }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: 'MovieItem',
  props: {
    movie: Object,
    title: String,
  },
};
</script>
