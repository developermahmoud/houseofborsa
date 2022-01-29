<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Money Manager</h4>
    <p class="grey--text">
      The House of Borse Money Manager solution is designed to empower
      professional individuals, brokers and financial institutions who are
      actively managing a portfolio of clients. House of Borse provides money
      managers with Direct Market Access to the world’s financial markets,
      cutting edge technology, competitive rates, low latency trade execution
      and exceptional back-office and administrative support. Our aim is to
      ensure that Money managers continue to focus on what is most important to
      them - maximising their clients' profits as well as their own.
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
          text: "Money Manager ",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>