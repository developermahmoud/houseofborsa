<template>
  <div>
    <v-toolbar flat class="background">
      <v-btn small icon link to="/"> <v-icon>mdi-arrow-left</v-icon></v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
  },
};
</script>

<style>
</style>