<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Dynamic margin</h4>
    <p class="grey--text">
      Dynamic margin calculates and updates the margin requirement in real time
      based on the size of your open position and whether you are hedging or
      not.
    </p>
    <v-alert border="left" color="secondary">
      Dynamic margin is a method of calculating margin requirement rates for
      open positions based on the size of the exposure, and whether any of the
      position is hedged or not.
    </v-alert>
    <p>
      This therefore means that different margin amounts will be applied to open
      positions depending on the size of the position held (market exposure) and
      whether the position is hedged or not. In summary the bigger a
      position/exposure the greater the margin requirement.
    </p>
    <p>
      As a general rule, any position greater than 10 lots will be subject to
      the new dynamic margin rules. This means that the first 10 lots of a
      position will be subject to our lowest margin rates. Any position size
      (market exposure) greater than the first 10 lots will then see higher
      margin requirements for the portion that exceeds the first 10 lots. Any
      pending orders that are activated will also be subject to the dynamic
      margin requirements at the time of order execution.
    </p>
    <p>
      Dynamic margin rates are applied on a per market (instrument) basis and is
      not a total account limit. This therefore means that you can have open
      positions of 10 lots across each and every market/ instrument we quote and
      still only be subject to our lowest margin rates. However, any portion of
      a position that exceeds the first 10 lots will have a higher margin
      requirement applied to that portion.
    </p>
    <p>
      Any hedged positions will require 50% of the margin requirement of
      equivalent unhedged positions.
    </p>
    <p>
      In situations where a position is partially/fully hedge, the hedge side of
      the trade can only be closed (fully/Partially) if the free equity in the
      account post closure is sufficient to cover the revised margin
      requirements. Alternatively, the client will be required to top up the
      account to have sufficient equity or client will have to close the hedged
      trades (both sides) with losses realised (As in Example 5 below).
    </p>
    <h4 class="mb-3">Examples</h4>
    <div>
      <strong>Example 1:</strong> A client is long 1 lot in a major cross that
      currently requires $1,000 in margin (1%).
      <div style="font-size: 13px" class="my-2">
        Margin required under fixed margin set up: $1,000
      </div>
      <div style="font-size: 13px">
        Margin required under Dynamic Margin set up: $1,000
      </div>
    </div>
    <v-divider class="my-5"></v-divider>
    <div>
      <strong>Example 2:</strong> A client is long 1 hedged lot in a major cross
      that currently requires $1,000 in margin.
      <div style="font-size: 13px" class="my-2">
        Margin required under fixed margin set up: $1,000
      </div>
      <div style="font-size: 13px">
        Margin required under Dynamic Margin set up: $500
      </div>
    </div>
    <v-divider class="my-5"></v-divider>
    <div>
      <strong>Example 3:</strong> A client is short 20 lot in a major cross that
      currently requires $20,000 in margin ($1,000 per lot, 1%).
      <div style="font-size: 13px" class="my-2">
        Margin required under fixed margin set up: $20,000
      </div>
      <div style="font-size: 13px">
        Margin required under Dynamic Margin set up: $30,000 (1% for first 10
        lots, 2% for next 10 lots)
      </div>
    </div>
    <v-divider class="my-5"></v-divider>
    <div>
      <strong>Example 4:</strong> A client is short 20 lots in a major cross and
      also long 10 lots in the same market. So the client is short 10 lots and
      hedged on 10 lots. The market has $1,000 margin per lot (1%).
      <div style="font-size: 13px" class="my-2">
        Margin required under fixed margin set up: $20,000
      </div>
      <div style="font-size: 13px">
        Margin required under Dynamic Margin set up: $15,000 ($10,000 for short
        position + $5,000 for hedged position (50%))
      </div>
    </div>
    <v-divider class="my-5"></v-divider>
    <div>
      <strong>Example 5:</strong> A client is long 20 lots in a major cross,
      then sells 10 a little while later to part hedge his position. A little
      after this the client decides to remove the hedge leg of the trade by
      buying back 10 lots, thereby making him long 20 lots again. The market
      requires $1,000 margin per lot (1%).
      <div style="font-size: 13px" class="my-2">
        Initial Dynamic Margin requirement: $30,000 (1% for first 10 lots, 2%
        for next 10 lots)
      </div>
      <div style="font-size: 13px">
        Dynamic margin requirement after hedge placed: $15,000 ($10,000 for
        short position + $5,000 for hedged position (50%))
      </div>
      <div style="font-size: 13px">
        Dynamic margin requirement after hedge removed: $30,000 (1% for first 10
        lots, 2% for next 10 lots)
      </div>
      <div style="font-size: 13px">
        So the margin requirement has gone from $30,000 to $15,000 back to
        $30,000. However, if the client no longer has the $30,000 required to
        maintain an unhedged position then he will not be able to remove the
        hedge position unless he tops up his available balance to cover the
        increase in margin requirement.
      </div>
      <div style="font-size: 13px">
        So he can either close the whole hedged position in one go. Or otherwise
        top up the funds in his account so that he has a total of $30,000 to
        cover the whole position unhedged.
      </div>
      <div style="font-size: 13px">
        For example, if the client has an equity valuation of $25,000 a short
        while after placing the hedge and then decides he wants to remove the
        hedge, he will then need to add and extra $5,000 to bring his account up
        to the required $30,000 in order to unhedge the position.
      </div>
      <div style="font-size: 13px">
        Otherwise, the client will need to close the entire hedged position in
        one go, or close parts of his unhedged position, to free up money to
        allow him to maintain a fully unhedged position.
      </div>
    </div>
    <h4 class="mt-5 mb-3">Dynamic Margin Table</h4>
    <v-alert border="left" color="secondary">
      Note: Hedged positions will be 50% of the margin equired for unhedged
      positions
    </v-alert>
    <v-simple-table class="transparent">
      <template v-slot:default>
        <thead>
          <tr>
            <th>Market</th>
            <th>MARGIN REQUIREMENT (0-50 LOTS)</th>
            <th>MARGIN REQUIREMENT (50.01-100 LOTS)</th>
            <th>MARGIN REQUIREMENT (100.01-150 LOTS)</th>
            <th>MARGIN REQUIREMENT (150.01-200 LOTS)</th>
            <th>MARGIN REQUIREMENT (200.01-250 LOTS)</th>
            <th>MARGIN REQUIREMENT (250+ LOTS)</th>
          </tr>
        </thead>
        <thead>
          <tr class="secondary">
            <th colspan="7">Common Pairs</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>AUDCAD</td>
            <td>1%</td>
            <td>2%</td>
            <td>3%</td>
            <td>5%</td>
            <td>10%</td>
            <td>10%</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th colspan="7">Minors Pairs</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>AUDCAD</td>
            <td>1%</td>
            <td>2%</td>
            <td>3%</td>
            <td>5%</td>
            <td>10%</td>
            <td>10%</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th colspan="7">Exotic Pairs</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>AUDCAD</td>
            <td>1%</td>
            <td>2%</td>
            <td>3%</td>
            <td>5%</td>
            <td>10%</td>
            <td>10%</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th colspan="7">Spot Commodities</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>AUDCAD</td>
            <td>1%</td>
            <td>2%</td>
            <td>3%</td>
            <td>5%</td>
            <td>10%</td>
            <td>10%</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th colspan="7">ETFs</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>AUDCAD</td>
            <td>1%</td>
            <td>2%</td>
            <td>3%</td>
            <td>5%</td>
            <td>10%</td>
            <td>10%</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th colspan="7">Future Commodities</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>AUDCAD</td>
            <td>1%</td>
            <td>2%</td>
            <td>3%</td>
            <td>5%</td>
            <td>10%</td>
            <td>10%</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th colspan="7">Cash Indices</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>AUDCAD</td>
            <td>1%</td>
            <td>2%</td>
            <td>3%</td>
            <td>5%</td>
            <td>10%</td>
            <td>10%</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th colspan="7">Future Indices</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>AUDCAD</td>
            <td>1%</td>
            <td>2%</td>
            <td>3%</td>
            <td>5%</td>
            <td>10%</td>
            <td>10%</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th colspan="7">Equity CFDs</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>AUDCAD</td>
            <td>1%</td>
            <td>2%</td>
            <td>3%</td>
            <td>5%</td>
            <td>10%</td>
            <td>10%</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th colspan="7">Cryptos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>AUDCAD</td>
            <td>1%</td>
            <td>2%</td>
            <td>3%</td>
            <td>5%</td>
            <td>10%</td>
            <td>10%</td>
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
          text: "Margin",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>