<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Referring Partner</h4>
    <p class="grey--text">
      Referred clients will be provided with a range of benefits to complement
      their trading, including access to a wide range of bank and non-bank
      liquidity providers, competitive pricing, ultra-tight spreads and a
      comprehensive back-office solution.
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
          text: "Referring Partner",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>