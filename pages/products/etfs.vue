<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>ETFs</h4>
    <p class="grey--text">
      An ETF (Exchange Traded Fund) – is an investment fund traded on Stock
      Exchanges, much like Stocks. As these are traded on an Exchange the price
      of ETF’s shares changes throughout the trading day as shares are bought
      and sold on the market.
    </p>
    <v-divider class="mb-4"></v-divider>
    <h4>What is an ETF?</h4>
    <p>
      An ETF (Exchange Traded Fund) – is an investment fund traded on Stock
      Exchanges, much like Stocks. As these are traded on an Exchange the price
      of ETF’s shares changes throughout the trading day as shares are bought
      and sold on the market.
    </p>
    <h4>What house of Borse Offers:</h4>
    <p>
      ETFs can be used as a great way to capitalise on Shorter term price
      movements within certain sectors. House of Borse offer ETF as a CFD,
      whereby you can benefit from the Leverage to get amplified exposure to an
      ETF of your choice. Clients must manage the risks associated with Leverage
      which can magnify the profits but can also magnify the losses.
    </p>
    <h4>Benefits of Trading with House of Borse</h4>
    <ul>
      <li>Commission as low as $1.20/side</li>
      <li>Competitive Spreads</li>
      <li>Trade on world leading MT5 Multi-Asset Platform</li>
      <li>Trading in any direction on Any ETF CFD (Go Long or Short)</li>
      <li>No Extra Charges on Short sale</li>
      <li>Earn Dividend on long positions</li>
      <li>No stock ownership required</li>
    </ul>
    <v-simple-table class="transparent">
      <template v-slot:default>
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Live</th>
            <th>Bid</th>
            <th>Ask</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>EFA.ETF</td>
            <td><span class="green--text">0.4</span></td>
            <td>202.29</td>
            <td>202.41</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <p style="font-size: 13px">
      Prices above are for indicative purposes only and subject to our website
      terms and conditions
    </p>
    <h4>Equities Market</h4>
    <v-simple-table class="transparent">
      <template v-slot:default>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Instrument Description</th>
            <th>Required Margin starting from</th>
            <th>Charging Structure</th>
            <th>Commission/per side</th>
            <th>Min. Commission/per side</th>
            <th>MinTrade Size (Lots)</th>
            <th>P/L Currency</th>
            <th>Contract Size</th>
            <th>Spreads Tick</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>IVV.ETF</td>
            <td>iShares Core S&P 500 ETF</td>
            <td>10%</td>
            <td>Commission & Spread</td>
            <td>From 1 (Cent/Share)</td>
            <td>From $1.25</td>
            <td>1</td>
            <td>USD</td>
            <td>1 CFD = 1 share</td>
            <td>0.02</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="mt-5">
      <strong class="primary--text">1</strong> The Margin requirement is dependent on the size of your position and will vary for the position hedged (under Dynamic Margin Requirement). For further information click here.
    </div>
    <div>
      <strong class="primary--text">2</strong> Tick Factor is the value of the smallest whole unit movement of the specified instrument. It is the reference point used to calculate profit/ loss.
    </div>
    <div>
      <strong class="primary--text">3</strong> Tick Value is the amount of profit/ loss made for a 1 tick move (see tick factor)in the specified product.
    </div>
    <div>
      <strong class="primary--text">4</strong> Charging structure is how you will be charged for trading the specified product. Both commission and spread markup are charged for ETF CFDs . Please see Pricing sheet below for the trading costs
    </div>
    <div>
      <strong class="primary--text">5</strong> IT IS THE CLIENT’S RESPONSIBILITY TO BE AWARE OF MARKET EXPIRIES AND MANAGE POSITIONS ACCORDINGLY
    </div>
    <div>
      <strong class="primary--text">6</strong>  All orders in CFDs are routed as Market orders
    </div>
    <div>
      <strong class="primary--text">7</strong> The base currency of your account(s), is the currency denomination that you have selected for your main account according to the application submitted to open an account with us
    </div>
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
          text: "ETFs",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>