<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>MetaTrader 5 (MT5) Trading Platform </h4>
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
          text: "Platforms",
          disabled: false,
          to: "/services/platforms",
        },
        {
          text: "(MT5) Trading Platform ",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>