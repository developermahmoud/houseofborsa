<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Index CFDs</h4>
    <p class="grey--text">
      House of Borse allows you to trade both the rolling cash and futures index
      contracts from stock exchanges around the globe with tight spreads and low
      commission.
    </p>
    <h4>Contract For Difference (CFD) Trading on Indices</h4>
    <p>
      CFD trading provides an alternative way to go long or short on a huge
      variety of financial markets on margin. House of Borse provides access to
      the world’s most widely followed indices in one account. Index trading is
      ideal for those looking to trade broad market segments as opposed to
      individual company stocks.
    </p>
    <h4>Key Features</h4>
    <p>
      <v-icon>mdi-circle-small</v-icon><strong>Flexible</strong> - you can trade
      on rising as well as falling markets
    </p>
    <p>
      <v-icon>mdi-circle-small</v-icon><strong>No Exchange fees </strong> - You
      do not own the underlying asset and do not acquire any rights or
      obligations in relation to the underlying asset.
    </p>
    <p>
      <v-icon>mdi-circle-small</v-icon><strong>Leveraged product</strong> - Use
      a small amount of money to control a much larger value position. This has
      benefits and risks: your investment capital can go further, but you can
      also lose a lot more quickly.
    </p>
    <p>
      <v-icon>mdi-circle-small</v-icon><strong>Hedging tools </strong> - You can
      use CFDs to offset any potential loss in value of your physical
      investments by going short
    </p>
    <h4>Indices CFD Markets</h4>
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
          Cash Indices
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
          Futures Indices
        </v-btn>
      </v-slide-item>
    </v-slide-group>
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
          <tr v-for="i in 10" :key="i">
            <td>AUS200</td>
            <td>Australia 200 Index</td>
            <td>AUD</td>
            <td>Dynamic</td>
            <td>1 Index</td>
            <td>1</td>
            <td>1 index point</td>
            <td>1 AUD</td>
            <td>Commission & Spread</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </template></v-simple-table
    >
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
      product.
    </div>
    <div>
      <strong class="primary--text">4</strong> Charging structure is how you will
      be charged for trading the specified product. Both Commission and a spread
      mark up are charged for cash commodities. Please see Pricing sheet below
      for the trading costs.
    </div>
    <div>
      <strong class="primary--text">5</strong> House of Borse Limited currently
      charges financing costs for cash/ spot CFD products but not for expiring/
      futures products. Please see Trading Cost Guide for further information
      regarding financing, or click here.
    </div>
    <div>
      <strong class="primary--text">6</strong> Futures CFDs will have expiry
      dates. Expiry dates for CFDs can be seen on the client terminal.
    </div>
    <div>
      <strong class="primary--text">7</strong> Any expiring (Futures) open
      positions are settled/ closed out on our quote after 17:00 GMT one day
      prior to the expiration date of the market.
    </div>
    <div>
      <strong class="primary--text">8</strong> IT IS THE CLIENT’S RESPONSIBILITY
      TO BE AWARE OF MARKET EXPIRIES AND MANAGE POSITIONS ACCORDINGLY.
    </div>
    <div>
      <strong class="primary--text">9</strong> Three (3) days prior to the
      contract expiration no new opening orders will be allowed in an expiring
      cfd market. Clients will only be allowed to close existing positions and
      cancel placed orders.
    </div>
    <div>
      <strong class="primary--text">10</strong> All orders in CFDs are routed as
      Market orders.
    </div>
    <div>
      <strong class="primary--text">11</strong> The base currency of your
      account(s), is the currency denomination that you have selected for your
      main account according to the application submitted to open an account
      with us. For Spot Commodities commission stated is per $100,000 of
      notional amount traded in a USD denominated account. If the FX crosses
      traded do not have a USD base currency, or if the account is denominated
      in a non-USD currency, then conversion may apply and/ or the commission
      will be adjusted pro-rata to get the same equivalent commission as for a
      USD account trading $100,000 notional. All other CFDs are charged
      commission on a per lot basis.
    </div>
    <p>
      For Spot Commodities commission stated is per $100,000 of notional amount
      traded in a USD denominated account. If the FX crosses traded do not have
      a USD base currency, or if the account is denominated in a non-USD
      currency, then conversion may apply and/ or the commission will be
      adjusted pro-rata to get the same equivalent commission as for a USD
      account trading $100,000 notional. All other CFDs are charged commission
      on a per lot basis.
    </p>
    <p>
      Liquidity and spreads can change due to market conditions. The information
      in this table is correct at the time of publication, we reserve the right
      to change its contents at any time. For up to date information please
      refer to the trading platform or call the support desk.
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
          text: "Indices",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>