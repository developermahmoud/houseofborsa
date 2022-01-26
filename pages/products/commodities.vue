<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Commodity CFDs</h4>
    <p class="grey--text">
      Trade spot and future commodity prices on metals, energy and agriculture.
    </p>
    <v-divider class="mb-4"></v-divider>
    <h4>What are commodities?</h4>
    <p>
      Commodities are the lifeblood of our global economy and commodities
      trading is one of the world’s oldest trading forms, existing before
      currency, bonds and stocks.
    </p>
    <p>
      Commonly tradable commodities are categorised into one of four groups –
      energy (including crude oil), metals (such as gold, silver and copper),
      agricultural (including coffee, wheat, sugar and cocoa) and finally
      livestock and meat (including cattle).
    </p>
    <p>
      Commodities trading is ideal for those who prefer to analyse supply and
      demand across the world, and how these affect commodities prices, in
      response to economic and political events.
    </p>
    <h4>Benefits of Trading with House of Borse</h4>
    <ul>
      <li>Low spreads through our ECN liquidity pool</li>
      <li>Direct market execution though our ECN model</li>
      <li>Low commissions</li>
      <li>No extra fees</li>
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
    <h4>Commodities CFD Markets</h4>
    <v-simple-table class="transparent">
      <template v-slot:default>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Instrument</th>
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
            <td>Gold</td>
            <td>Spot Gold</td>
            <td>USD</td>
            <td>Dynamic</td>
            <td>1 CFD = 100 Troy oz</td>
            <td>0.1</td>
            <td>0.01</td>
            <td>10 USD</td>
            <td>Commission & Spread</td>
            <td>Yes</td>
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
      <strong class="primary--text">4</strong>  Charging structure is how you will be charged for trading the specified product. Both Commission and a spread mark up are charged for cash commodities. Please see Pricing sheet below for the trading costs.
    </div>
    <div>
      <strong class="primary--text">5</strong> House of Borse Limited currently charges financing costs for cash/ spot CFD products but not for expiring/ futures products. Please see Trading Cost Guide for further information regarding financing, or click here. 
    </div>
    <div>
      <strong class="primary--text">6</strong> Futures CFDs will have expiry dates. Expiry dates for CFDs can be seen on the client terminal.
    </div>
    <div>
      <strong class="primary--text">7</strong> Any expiring (Futures) open positions are settled/ closed out on our quote after 17:00 GMT one day prior to the expiration date of the market.
    </div>
    <div>
      <strong class="primary--text">8</strong>  IT IS THE CLIENT’S RESPONSIBILITY TO BE AWARE OF MARKET EXPIRIES AND MANAGE POSITIONS ACCORDINGLY
    </div>
    <div>
      <strong class="primary--text">9</strong> Three (3) days prior to the contract expiration no new opening orders will be allowed in an expiring cfd market. Clients will only be allowed to close existing positions and cancel placed orders.
    </div>
    <div>
      <strong class="primary--text">10</strong> All orders in CFDs are routed as Market orders.
    </div>
    <div>
      <strong class="primary--text">11</strong>The base currency of your account(s), is the currency denomination that you have selected for your main account according to the application submitted to open an account with us.
    </div>
    <p>For Spot Commodities commission stated is per $100,000 of notional amount traded in a USD denominated account. If the FX crosses traded do not have a USD base currency, or if the account is denominated in a non-USD currency, then conversion may apply and/ or the commission will be adjusted pro-rata to get the same equivalent commission as for a USD account trading $100,000 notional. All other CFDs are charged commission on a per lot basis.</p>
    <p>Liquidity and spreads can change due to market conditions. The information in this table is correct at the time of publication, we reserve the right to change its contents at any time. For up to date information please refer to the trading platform or call the support desk.</p>
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
          text: "Commodities",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>