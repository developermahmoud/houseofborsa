<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>White Label</h4>
    <p class="grey--text">
      The House of Borse White Label program can enable your brokerage to offer
      online Forex and CFD trading to your clients. Our White Label Partnership
      offers cutting edge technology, ultra-low latency, competitive spreads and
      a helpful support team to help you grow your business and provide your
      clients with the best possible chance to maximize their returns and
      trading opportunities.
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
          text: "Partners",
          disabled: false,
          to: "/services/partners",
        },
        {
          text: "White Label",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>