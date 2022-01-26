<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Equities</h4>
    <p class="grey--text text--lighten-1">
      House of Borse has an extensive equities offering, giving clients access
      to hundreds of shares in some of the world's most important and
      influential corporations, including Apple, Facebook, Amazon, BP plc and
      Google.
    </p>
    <v-divider class="mb-4"></v-divider>
    <h4>What is a share?</h4>
    <p class="grey--text text--lighten-1">
      Stock markets provide companies with an opportunity to raise money by
      selling parts of their businesses as shares, these can also be referred to
      as equities or stocks. Shares are the units of the ownership of a company.
      If you buy one, you own a part of that company and become a shareholder.
    </p>
    <h4>What House of Borse offers</h4>
    <p class="grey--text text--lighten-1">
      We offer a derivative known as an equity CFD (contract for difference)
      rather than the underlying share itself. The price of the CFD is derived
      from the price of the share; the difference is that the holder of the CFD
      never owns part of the company.
    </p>
    <h4>Benefits of trading a stock CFD</h4>
    <p class="grey--text text--lighten-1">
      1. You’re able to trade long (buy) or short (sell)
    </p>
    <p class="grey--text text--lighten-1">
      2. The ability to trade using leverage, this enables you to gain more
      exposure and increase potential profits (also has the potential for
      increased losses)
    </p>
    <h4>Benefits of Trading with House of Borse</h4>
    <ul>
      <li class="primary--text">Trade international shares</li>
      <p class="grey--text text--lighten-1">
        Trade all the best-known companies from global stock markets, including
        US tech stocks like Apple, Facebook, BP and Rio Tinto from one account.
      </p>
      <li class="primary--text">Benefit from low spreads</li>
      <p class="grey--text text--lighten-1">
        House of Borse offers competitive pricing and low spreads allows you to
        take advantage of more stock trading opportunities.
      </p>
      <li class="primary--text">Advanced Trading platform</li>
      <p class="grey--text text--lighten-1">
        Trade stocks and shares wherever you are and on any device using our
        professional online or mobile trading platform.
      </p>
      <li class="primary--text">Low Margin</li>
      <p class="grey--text text--lighten-1">
        At House of Borse we aim to keep our margin low to make trading as easy
        as possible. Our Equity margin starts from 7%.
      </p>
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
            <td>BARC.L</td>
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
            <th>Country</th>
            <th>Symbol</th>
            <th>Currency</th>
            <th>Required Margin1</th>
            <th>Contract Size</th>
            <th>MinTrade Size (Lots)</th>
            <th>Tick Factor2</th>
            <th>Tick Value3</th>
            <th>Charging Structure4</th>
            <th>Financing Charged5</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>France</td>
            <td>.PA</td>
            <td>EUR</td>
            <td>Fixed Margin**</td>
            <td>1 CFD = 1 share</td>
            <td>1</td>
            <td>1 Euro Cent</td>
            <td>1 Euro Cent</td>
            <td>Commission Only</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="mt-5">
      <strong class="primary--text">1</strong> The Margin requirement is
      dependent on the size of your position and will vary for the position
      hedged (under Dynamic Margin Requirement). For further information click
      here.
    </div>
    <div>
      <strong class="primary--text">2</strong> Tick Factor is the value of the
      smallest whole unit movement of the specified instrument. It is the
      reference point used to calculate profit/ loss.
    </div>
    <div>
      <strong class="primary--text">3</strong> Tick Value is the amount of
      profit/ loss made for a 1 tick move (see tick factor)in the specified
    </div>
    <div>
      <strong class="primary--text">4</strong> Charging structure is how you
      will be charged for trading the specified product. Both commission and
      spread markup are charged for equity CFDs . Please see Pricing sheet below
      for the trading costs
    </div>
    <div>
      <strong class="primary--text">5</strong> House of Borse Limited currently
      charges financing costs for cash/ spot CFD products but not for expiring/
      futures products. Please see Trading Cost Guide for further information
      regarding financing, , or click here.
    </div>
    <div>
      <strong class="primary--text">6</strong> IT IS THE CLIENT’S RESPONSIBILITY
      TO BE AWARE OF MARKET EXPIRIES AND MANAGE POSITIONS ACCORDINGLY
    </div>
    <div>
      <strong class="primary--text">7</strong> All orders in CFDs are routed as
      Market orders
    </div>
    <div>
      <strong class="primary--text">8</strong> The base currency of your
      account(s), is the currency denomination that you have selected for your
      main account according to the application submitted to open an account
      with us
    </div>
    <div>
      <strong class="primary--text">*</strong> US stocks may be stated without
      any country extension (eg: '.US') but with just their ticker symbols.
    </div>
    <div>
      <strong class="primary--text">**</strong> A fixed margin is charged for
      all equity trades. See Equities for equity margins
    </div>
    <h4>Equity Margin Rates</h4>
    <v-simple-table class="transparent">
      <template v-slot:default>
        <thead>
          <tr>
            <th>DESCRIPTION</th>
            <th>TICKER</th>
            <th>HOB MARGIN</th>
          </tr>
        </thead>
        <thead>
          <tr class="secondary">
            <th colspan="3">UK SHARES</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 10" :key="i">
            <td>KINGFISHER ORD (UK)</td>
            <td>KGF.L</td>
            <td>10%</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th colspan="3">US SHARES</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 10" :key="i">
            <td>Agilent Technologies Inc. (US)</td>
            <td>A</td>
            <td>25%</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th colspan="3">GERMAN SHARES</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 10" :key="i">
            <td>adidas AG (GE)</td>
            <td>ADSGn.DE</td>
            <td>15%</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th colspan="3">FRENCH SHARES</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 10" :key="i">
            <td>Air France KLM SA (FR)</td>
            <td>AIRF.PA</td>
            <td>15%</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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
          text: "Equities",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>