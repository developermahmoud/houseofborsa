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
    <v-alert border="left" color="secondary">
      Our trading conditions at House of Borse make us one of the most popular
      choices for Forex traders all over the world. Our Raw spreads are among
      lowest possible and therefore give traders a great advantage whilst
      trading with us. Our referring Partners are able to offer their clients a
      range of facilities and capabilities that would enhance.
    </v-alert>
    <h4>Matched Principle ECN Broker</h4>
    <ul>
      <li>Matched principal broker</li>
      <li>
        All trades executed on an STP basis - No proprietary positions held
      </li>
      <li>
        Act solely as an intermediary between our clients, liquidity providers
        and major exchanges.
      </li>
      <li>No conflict of interest between our clients and ourselves.</li>
    </ul>
    <v-divider class="my-5"></v-divider>
    <h4>Trading Highlights</h4>
    <ul>
      <li>Competitive Market Spreads.</li>
      <li>Dynamic leverage</li>
      <li>Risk management tools</li>
      <li>Market execution with no requotes</li>
      <li>Low Latency order execution</li>
      <li>
        Range of markets available - Currencies, commodities, Indices and
        Equities.
      </li>
    </ul>
    <v-divider class="my-5"></v-divider>
    <h4>Account Features</h4>
    <ul>
      <li>Mobile trading – iPhone, iPad and Android</li>
      <li>Swap Free trading accounts available</li>
      <li>Personal account management system</li>
      <li>
        Over 200 financial instruments including Forex, metals, Commodities,
        Futures and Equities
      </li>
      <li>
        Fast and efficient deposit/withdrawal options: Bank Transfer,
        Credit/Debit Cards
      </li>
    </ul>
    <v-divider class="my-5"></v-divider>
    <h4>RP Trading Setup</h4>
    <p class="grey--text">
      The HoB RP account setup is designed to be transparent which allows for
      live trading and commission monitoring.Our RP account setup provides;
    </p>
    <ul>
      <li>No setup cost</li>
      <li>Real-time monitoring of account balances</li>
      <li>Variable leverage options</li>
      <li>Aggregated liquidity feeds from Tier 1 banks</li>
      <li>Technical analysis tools</li>
      <li>Pure ECN brokerage</li>
      <li>Client data protection</li>
      <li>Very competitive commission</li>
      <li>Flexibility over commercial rates</li>
    </ul>
    <v-divider class="my-5"></v-divider>
    <h4>Connectivity</h4>
    <ul>
      <li>MT5</li>
      <li>FIX API</li>
    </ul>
    <v-divider class="my-5"></v-divider>
    <h4>Range of instruments available:</h4>
    <ul>
      <li>FX – Over 60 including majors, minors and exotic pairs</li>
      <li>
        Indices – Cash and Futures indices, including markets from the UK,
        Europe. Asia and the UK
      </li>
      <li>
        Equities – Most the well known companies available from the US, Europe
        and UK
      </li>
      <li>
        Commodities – Cash and Futures offered, including the energy markets and
        metals
      </li>
    </ul>
    <v-card class="secondary mt-5">
      <h5 class="text-center grey--text pt-5">
        To Learn more about our Referring Partner program please
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