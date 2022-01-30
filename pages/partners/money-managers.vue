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
    <h4>Money manager Setup</h4>
    <p class="grey--text">
      The HoB Money manager solution is designed to improve the efficiency of
      the professional and institutional trader by minimising costs and
      providing better control of the risks and operations. Our Money Manager
      account setup provides:
    </p>
    <ul>
      <li>No setup cost</li>
      <li>Real-time monitoring of account balances</li>
      <li>Exposure and Risk Management</li>
      <li>Cash Management</li>
      <li>Variable leverage options</li>
      <li>Aggregated liquidity feeds from Tier 1 banks</li>
      <li>Technical analysis tools</li>
      <li>Pure ECN brokerage</li>
      <li>Client data protection</li>
      <li>Flexibility over commercial rates</li>
    </ul>
    <v-card class="secondary mt-5">
      <h5 class="text-center grey--text pt-5">
        To Learn more about our MAM solution please
      </h5>
      <v-card-title class="justify-center mt-0 pt-0">
        complete form below
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field dense outlined label="Fullname"></v-text-field>
          <v-text-field dense outlined label="Email"></v-text-field>
          <v-text-field dense outlined label="Country"></v-text-field>
          <v-text-field dense outlined label="Phone"></v-text-field>
          <v-text-field dense outlined label="Website"></v-text-field>
          <v-text-field dense outlined label="Company Name"></v-text-field>
          <v-text-field dense outlined label="Your Message"></v-text-field>
          <v-btn class="primary" block text>Send</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
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