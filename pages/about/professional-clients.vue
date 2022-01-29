<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Professional Clients </h4>
    <p class="grey--text">
       House of Borse only accepts professional, elective professional and corporate clients that are experienced and capable of making their own investment decisions. 
    </p>
    <v-divider class="mb-4"></v-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: "About US",
          disabled: false,
          to: "/services/about-us",
        },
        {
          text: "Professional Clients ",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>