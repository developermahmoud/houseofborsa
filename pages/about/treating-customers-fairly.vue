<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Treating Customers Fairly </h4>
    <p class="grey--text">
       A firm must pay due regard to the interests of its customers and treat them fairly 
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
          text: "Treating Customers Fairly",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>