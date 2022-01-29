<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Institutional Services</h4>
    <p class="grey--text">
      House of Borse offers a range of turn-key and bespoke solutions for its institutional and professional clients. Our institutional clients can benefit from our white label solution, FIX API connectivity as well as bespoke solutions, dependent on their requirements. Take your business to the next level with our technology offering, deep liquidity, fast trade execution and professional client support. 
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
          text: "Institutional Services",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>