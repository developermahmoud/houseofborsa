<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Commodity CFDs</h4>
    <p class="grey--text">
      Trade spot and future commodity prices on metals, energy and agriculture.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: "Trading Products",
          disabled: false,
          to: "/tradings/products",
        },
        {
          text: "Commodities",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>