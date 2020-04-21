<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      dark
      hide-on-scroll
      prominent
      scroll-target="#scrolling-techniques-4"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Movie App</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-4"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: 'AppBar',
  props: {
    title: String,
  },
};
</script>
