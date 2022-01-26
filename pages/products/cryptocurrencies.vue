<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Cryptocurrency</h4>
    <p class="grey--text">
      Crypto currency is a virtual currency, broadly defined as a currency that
      takes form of tokens or “coins” and exists on a distributed and
      decentralised ledger. Cryptocurrency trading is the act of speculating on
      cryptocurrency price movement either via CFDs trading or buying and
      selling the underlying coins.
    </p>
    <v-divider class="mb-4"></v-divider>
    <h4>What is a Crypto currency?</h4>
    <p>
      Crypto currency is a virtual currency, broadly defined as a currency that
      takes form of tokens or “coins” and exists on a distributed and
      decentralised ledger. Cryptocurrency trading is the act of speculating on
      cryptocurrency price movement either via CFDs trading or buying and
      selling the underlying coins.
    </p>
    <h4>What house of Borse Offers:</h4>
    <p>
      At house of Borse we offer a variety of Crypto CFDs at very competitive
      prices. Cryptocurrency CFDs are susceptible to appreciable price movements
      in value. You can take advantage of this volatility by trading our crypto
      CFDs – without the need for a digital wallet or trading on a
      cryptocurrency exchange.
    </p>
    <h4>Benefits of Trading with House of Borse</h4>
    <ul>
      <li>Competitive Spreads</li>
      <li>Trade our Crypto CFDs with Zero Commission</li>
      <li>Trade Crypto CFDs with out need for digital wallet</li>
      <li>Trade on world leading MT5 Multi-Asset Platform</li>
      <li>Trading in any direction on Any Crypto CFD (Go Long or Short)</li>
      <li>No Financing charges/cost.</li>
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
    <h4>Cryptos Market</h4>
    <v-simple-table class="transparent">
      <template v-slot:default>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Instrument Description</th>
            <th>Required Margin starting from</th>
            <th>Commission S/G/P/ per side</th>
            <th>MinTrade Size (Lots)</th>
            <th>P/L Currency</th>
            <th>Contract Size</th>
            <th>Spreads Tick</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>Bitcoin</td>
            <td>Bitcoin, BTCUSD</td>
            <td>100%</td>
            <td>0.725% / 0.675% / 0.625%</td>
            <td>0.01</td>
            <td>USD</td>
            <td>1 CFD = 1 Coin</td>
            <td>200</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="mt-5">
      <strong class="primary--text">1</strong> The Margin Requirment for Cryptos
      CFDs is 100% of value traded (i.e 1:1 Leverage).
    </div>
    <div>
      <strong class="primary--text">2</strong> Tick Factor is the value of the
      smallest whole unit movement of the specified instrument. It is the
      reference point used to calculate profit/ loss.
    </div>
    <div>
      <strong class="primary--text">3</strong> Tick Value is the amount of
      profit/ loss made for a 1 tick move (see tick factor)in the specified
      product.
    </div>
    <div>
      <strong class="primary--text">4</strong> Charging structure is how you
      will be charged for trading the specified product. Only spread markup are
      charged for Cryptos CFDs . Please see Pricing sheet below for the trading
      costs
    </div>
    <div>
      <strong class="primary--text">5</strong> IT IS THE CLIENT’S RESPONSIBILITY
      TO BE AWARE OF MARKET EXPIRIES AND MANAGE POSITIONS ACCORDINGLY
    </div>
    <div>
      <strong class="primary--text">6</strong> The base currency of your
      account(s), is the currency denomination that you have selected for your
      main account according to the application submitted to open an account
      with us
    </div>
    <h4>Cryptos Markup</h4>
    <v-simple-table class="transparent">
      <template v-slot:default>
        <thead>
          <tr>
            <th>Symbol</th>
            <th></th>
            <th>Coins</th>
            <th>Mark Up Rate</th>
            <th>Mark Up (Points)</th>
            <th>Per Side Per Coin</th>
            <th>Round Trip Per Coin</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 3" :key="i">
            <td>BTCUSD</td>
            <td>
              TIER1
              <br />
              TIER2
              <br />
              TIER3
              <br />
              TIER4
              <br />
              TIER5
            </td>
            <td>
              1
              <br />
              NEXT5
              <br />
              NEXT20
              <br />
              NEXT50
              <br />
              NEXT100
            </td>
            <td>
              0
              <br />
              1500
              <br />
              2500
              <br />
              5000
              <br />
              10000
            </td>
            <td>
              0
              <br />
              15
              <br />
              25
              <br />
              50
              <br />
              100
            </td>
            <td>
              $0.00
              <br />
              $15.00
              <br />
              $25.00
              <br />
              $50.00
              <br />
              $100.00
            </td>
            <td>
              $0.00
              <br />
              $30.00
              <br />
              $50.00
              <br />
              $100.00
              <br />
              $200.00
            </td>
          </tr>
        </tbody>
      </template></v-simple-table
    >
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
          text: "Cryptocurrencies",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>