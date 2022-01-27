<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Financial Terms</h4>
    <p class="grey--text">
      House of Borse offers you the opportunity to trade on Foreign Exchange
      (FX) , Indices, Commodities and Equities using one of the most popular
      trading platforms in the world - MetaTrader 4.
    </p>
    <h4>Market Information</h4>
    <v-slide-group
      v-model="toggle_btn"
      mandatory
      active-class="primary"
      center-active
      class="mt-2 mb-4"
      :show-arrows="false"
    >
      <v-slide-item v-slot="{ active, toggle }">
        <v-btn
          small
          value="0"
          class="secondaryBackground mr-1"
          :input-value="active"
          @click="toggle"
        >
          Common Pairs
        </v-btn>
      </v-slide-item>
      <v-slide-item v-slot="{ active, toggle }">
        <v-btn
          small
          value="1"
          class="secondaryBackground mr-1"
          :input-value="active"
          @click="toggle"
        >
          Minor Pairs
        </v-btn>
      </v-slide-item>
      <v-slide-item v-slot="{ active, toggle }">
        <v-btn
          small
          value="2"
          class="secondaryBackground"
          :input-value="active"
          @click="toggle"
        >
          Exotic Pairs
        </v-btn>
      </v-slide-item>
      <v-slide-item v-slot="{ active, toggle }">
        <v-btn
          small
          value="2"
          class="secondaryBackground"
          :input-value="active"
          @click="toggle"
        >
          Cash Indices
        </v-btn>
      </v-slide-item>
      <v-slide-item v-slot="{ active, toggle }">
        <v-btn
          small
          value="2"
          class="secondaryBackground"
          :input-value="active"
          @click="toggle"
        >
          Futures Indices
        </v-btn>
      </v-slide-item>
      <v-slide-item v-slot="{ active, toggle }">
        <v-btn
          small
          value="2"
          class="secondaryBackground"
          :input-value="active"
          @click="toggle"
        >
          Spot Commodities
        </v-btn>
      </v-slide-item>
      <v-slide-item v-slot="{ active, toggle }">
        <v-btn
          small
          value="2"
          class="secondaryBackground"
          :input-value="active"
          @click="toggle"
        >
          Equities
        </v-btn>
      </v-slide-item>
      <v-slide-item v-slot="{ active, toggle }">
        <v-btn
          small
          value="2"
          class="secondaryBackground"
          :input-value="active"
          @click="toggle"
        >
          Futures Commodities
        </v-btn>
      </v-slide-item>
    </v-slide-group>
    <v-simple-table class="transparent">
      <template v-slot:default>
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Required Margin1</th>
            <th>Markup Fee (Pips)</th>
            <th>Management Fee</th>
            <th>Value time2</th>
            <th>Pip Factor3</th>
            <th>Minimum trade size</th>
            <th>Contract size</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>AUDCAD</td>
            <td>Dynamic</td>
            <td>0.4</td>
            <td>$8.5</td>
            <td>21:59</td>
            <td>0.0001</td>
            <td>1,000</td>
            <td>100,000</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="mt-5">
      <strong class="primary--text">1</strong> The Margin requirement is
      dependent on the size of your position and will vary for the position
      hedged (under Dynamic Margin Requirement) click here.
    </div>
    <div><strong class="primary--text">2</strong> All times are GMT.</div>
    <div>
      <strong class="primary--text">3</strong> Pip factor is the value of the
      smallest whole unit movement of the specified instrument. It is the
      reference point used to calculate profit/ loss.
    </div>
    <div>
      <strong class="primary--text">4</strong> House of Borse Limited currently
      charges financing costs for cash/ spot CFD products but not for expiring/
      futures products. Please see trading cost guide for further information
      regarding financing, or click here.
    </div>
    <div>
      <strong class="primary--text">5</strong> Tick factor is the value of the
      smallest whole unit movement of the specified instrument. It is the
      reference point used to calculate profit/ loss.
    </div>
    <div>
      <strong class="primary--text">6</strong> The base currency of your
      account(s), is the currency denomination that you have selected for your
      main account according to the application submitted to open an account
      with us.
    </div>
    <div>
      <strong class="primary--text">7</strong> Profits and losses are converted
      to the base currency of the account using the mid-price of the FX Spot
      rate +/- 0.5%, when you close the position. The same method of conversion
      is also applied to any other trading costs.
    </div>
    <div>
      <strong class="primary--text">8</strong> Management Fees for National and
      bank holidays (where applicable to the relevant markets), will be charged
      in advance (T+2+Holiday Period).
    </div>
    <div>
      <strong class="primary--text">9</strong> Open Positions rolled over on
      Wednesday to Thursday (all currency except for CAD, RUB & TRY) will
      include weekend swaps/management fee charges.
    </div>
    <div>
      <strong class="primary--text">10</strong> Open Positions rolled over will
      be charged 20% mark-up of the total inter-bank/LP interest rates.
    </div>
    <div>
      <strong class="primary--text">11</strong> Open Positions rolled over on
      Thursday to Friday (For CAD, RUB & TRY only) will include weekend
      swaps/management fee charges.
    </div>
    <h4>Pricing Sheet</h4>
    <v-simple-table class="transparent">
      <template v-slot:default>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Instrument Currency</th>
            <th>
              Commission (per lot per RT) - Silver/ Gold/ Platinum Account (USD)
            </th>
            <th>Price Spreads(Ticks)2</th>
          </tr>
        </thead>
        <thead>
          <tr class="secondary">
            <th colspan="4">Spot Commodities</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>Gold</td>
            <td>USD</td>
            <td>7 / 6 / 5</td>
            <td>0.03</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th colspan="4">Future Commodities</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>Silver_xx</td>
            <td>USD</td>
            <td>9 / 8 / 7</td>
            <td>0.001</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th colspan="4">Cash Indices</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>AUS200</td>
            <td>AUD</td>
            <td>0.5 / 0.3 / 0.15 3</td>
            <td>1</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th colspan="4">Future Indices</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>AUS200_xx</td>
            <td>AUD</td>
            <td>0.9 / 0.8 / 0.7</td>
            <td>1</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th colspan="4">ETFs</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>IVV.ETF</td>
            <td>USD</td>
            <td>From 1 (Cent/Share)</td>
            <td>From $1.25</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th colspan="4">Cryptos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>Bitcoin</td>
            <td>USD</td>
            <td>0.725% / 0.675% / 0.625%</td>
            <td></td>
          </tr>
        </tbody> </template
    ></v-simple-table>
    <div class="mt-5">
      <strong class="primary--text">1</strong> For Spot FX and Spot Commodities,
      commission stated is per $100,000 of notional amount traded in a USD
      denominated account. If the FX crosses traded do not have a USD base
      currency, or if the account is denominated in a non-USD currency, then
      conversion may apply and/ or the commission will be adjusted pro-rata to
      get the same equivalent commission as for a USD account trading $100,000
      notional. All other CFDs are charged commission on a per lot basis.
    </div>
    <div>
      <strong class="primary--text">2</strong> Additional Price Markup is the
      amount by which the raw LP spread is marked up by HOB in absolute terms.
      So, for example, 0.02 means, the LP spread will be increased by 0.02.
    </div>
    <div>
      <strong class="primary--text">3</strong> If the trading account is
      denominated in a different currency the currency of the Equity, eg: a USD
      denominated account while UK shares are being traded(GBP), then the
      commission amount will get converted in to the equivalent amount in the
      denomination of the account. So for example £8 will get converted in to
      $10 (where GBPUSD = 1.25 in this example).
    </div>
    <h4 class="mt-5">SUPPORTED ORDER TYPES</h4>
    <strong class="primary--text">Market Orders</strong>
    <p>
      All requested trades will be executed as Market Orders to ensure that
      trades are executed at the best available market price. This helps to
      minimise the trade rejections and to ensure that orders are filled even at
      the times of Low Market Liquidity. Please note that above includes &
      applies to all Order types (Limit, Market & Stop), which are treated as
      Market Orders.
    </p>
    <p>
      Should you have any queries to these Financial Terms please contact House
      of Borse. Commencement of trading with House of Borse shall be deemed as
      acceptance of these Financial Terms.
    </p>
    <p>
      The above Financial Terms should be used in conjunction with House of
      Borse’s Standard Terms of Business. We will endeavour to provide you with
      notice should these Financial Terms change, however, it remains your sole
      responsibility to ensure that you view this page on regular basis in order
      to keep updated on any changes.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle_btn: undefined,
      breadcrumbs: [
        {
          text: "Trading Products",
          disabled: false,
          to: "/tradings/products",
        },
        {
          text: "Terms",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>