<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          label="Standard"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Selector',
  computed: {
    items() {
      return [1, 2, 3]
    }
  },
  methods: {
    applyFilterSelection(val) {
      this.$store.dispatch('applyFilterSelection', val)
    }
  }
}
</script>
