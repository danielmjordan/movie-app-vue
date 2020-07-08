<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          label="Select Category"
          v-model="val"
          @change="selectCategory"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Selector',
  data() {
    return {
      val: '',
      items: [
        { text: 'Popular', value: 'popular' },
        { text: 'Top Rated', value: 'top_rated' },
        { text: 'Now Playing', value: 'now_playing' },
        { text: 'Upcoming', value: 'upcoming' },
      ],
    };
  },
  methods: {
    selectCategory(val) {
      this.$store.dispatch('fetchFilms', {
        page: 1,
        category: val,
      });
      this.$emit('category-selected');
    },
  },
};
</script>
