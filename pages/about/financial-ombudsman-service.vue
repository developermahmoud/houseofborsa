<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Financial Ombudsman Service </h4>
    <p class="grey--text">
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
          text: "Financial Ombudsman Service",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>