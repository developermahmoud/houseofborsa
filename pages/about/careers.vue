<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>House of Borse Careers</h4>
    <p class="grey--text">
      Join the HoB team! We are always looking for dynamic team players who have
      a passion for the financial markets. If that sounds like you, apply today.
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
          text: "Careers",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>