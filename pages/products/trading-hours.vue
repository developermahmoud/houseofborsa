<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4 class="mb-3">What are HOB’s Trading hours?</h4>
    <v-alert border="left" color="secondary">
      We are normally open for trading 24 hours a day, from 21:05 on Sunday
      until 20:55 on Friday night (UK time), with breaks for rollovers. For
      markets that do not trade 24 hours (for example shares), you can find
      specific dealing hours under ‘specifications’ for each product on the
      trading platform.
      <br />
      Shorter opening hours, or market closures may apply on UK bank holidays,
      US public holidays, as well as other days that will normally be notified
      to clients in advance. We do not open Christmas Day, New Year’s Day, Good
      Friday, or other days which are holidays in both the UK and the US, and
      may also be closed other days which will be notified in advance.
    </v-alert>
    <v-simple-table class="transparent">
      <template v-slot:default>
        <thead>
          <tr class="secondary">
            <th>INSTRUMENT</th>
            <th>TRADING HOURS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>All FX 1</td>
            <td>Sun 22:05 - Fri 21:56 (Trading Break 21:56-22:05) GMT</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th>Spot Commodities</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gold (Spot Gold)</td>
            <td>Sun - Fri 18:00 - 17:00 (Trading Break 17:00 -18:00) ET</td>
          </tr>
          <tr>
            <td>Silver (Spot Silver)</td>
            <td>Sun - Fri 18:00 - 17:00 (Trading Break 17:00 -18:00) ET</td>
          </tr>
          <tr>
            <td>US Oil (US Oil Spot )</td>
            <td>Sun - Fri 18:00-17:00 (Trading Break 17:00-18:00) ET</td>
          </tr>
          <tr>
            <td>UK Oil (UK Oil Spot )</td>
            <td>Sun - Fri 20:05-17:00 (Trading Break 17:00-20:05) ET</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th>Future Commodities</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Silver_xx</td>
            <td>Sun - Fri 18:00-17:00 (Trading Break 17:00-18:00) ET</td>
          </tr>
          <tr>
            <td>Platinum_xx</td>
            <td>Sun - Fri 18:00-17:00 (Trading Break 17:00-18:00) ET</td>
          </tr>
          <tr>
            <td>Gold_xx</td>
            <td>Sun - Fri 18:00 - 17:00 (Trading break 17:00 -18:00) ET</td>
          </tr>
          <tr>
            <td>NatGas_xx</td>
            <td>Sun - Fri 18:00-17:00 (Trading Break 17:00-18:00) ET</td>
          </tr>
          <tr>
            <td>US_Oil_xx</td>
            <td>Sun - Fri 18:00-17:00 (Trading Break 17:00-18:00) ET</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th>Cash Indices</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AUS200 3</td>
            <td>Mon-Fri 09:50- 16:30, 17:10 - 08:00 †† Sydney Time</td>
          </tr>
          <tr>
            <td>Germany 30</td>
            <td>
              Mon - Fri 00:00 - 22:15, 22:30 - 23:00 CET (Friday close 22:15
              CET)
            </td>
          </tr>
          <tr>
            <td>Spain 35</td>
            <td>Mon - Fri 08:00 - 20:00 CET</td>
          </tr>
          <tr>
            <td>France 40</td>
            <td>
              Mon - Fri 00:00 - 22:15, 22:30 - 23:00 CET (Friday close 22:15
              CET)
            </td>
          </tr>
          <tr>
            <td>Hong Kong 50</td>
            <td>
              Mon - Fri 09:15 - 12:00, 13:00 - 16:30, 17:15 – 03:00 Hong Kong
              Time
            </td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th>Future Indices</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AUS200_xx 4</td>
            <td>Mon-Fri 09:50-16:30, 17:10 - 08:00 ††† Sydney Time</td>
          </tr>
          <tr>
            <td>CHINAH_xx</td>
            <td>
              Mon - Fri 09:15 - 12:00, 13:00 - 16:30, 17:15 - 03:00 Hong Kong
              Time
            </td>
          </tr>
          <tr>
            <td>DE30_xx</td>
            <td>
              Mon - Fri 00:00 - 22:15, 22:30 - 23:00 CET (Friday close 22:15
              CET)
            </td>
          </tr>
          <tr>
            <td>DETEC30_xx</td>
            <td>Mon - Fri 09:00 - 17:30 CET</td>
          </tr>
          <tr>
            <td>ES35_xx</td>
            <td>Mon - Fri 08:00 - 20:00 CET</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th>Equity CFDs</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>France</td>
            <td>Mon - Fri 09:01:30 - 17:30 CET</td>
          </tr>
          <tr>
            <td>Germany 5</td>
            <td>Mon - Fri 09:03-17:30 CET</td>
          </tr>
          <tr>
            <td>UK 6</td>
            <td>Mon - Fri 08:01 - 16:30 London Time</td>
          </tr>
          <tr>
            <td>US</td>
            <td>Mon - Fri 09:30 - 16:00 ET</td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th>ETFs</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>IVV.ETF</td>
            <td></td>
          </tr>
          <tr>
            <td>IBB.ETF</td>
            <td></td>
          </tr>
          <tr>
            <td>GSG.ETF</td>
            <td></td>
          </tr>
          <tr>
            <td>FXI.ETF</td>
            <td></td>
          </tr>
          <tr>
            <td>EFA.ETF</td>
            <td></td>
          </tr>
          <tr>
            <td>IXC.ETF</td>
            <td></td>
          </tr>
          <tr>
            <td>IYR.ETF</td>
            <td></td>
          </tr>
          <tr>
            <td>QQQ.ETF</td>
            <td></td>
          </tr>
          <tr>
            <td>SPY.ETF</td>
            <td></td>
          </tr>
        </tbody>
        <thead>
          <tr class="secondary">
            <th>Cryptos</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bitcoin</td>
            <td></td>
          </tr>
          <tr>
            <td>Ethereum</td>
            <td></td>
          </tr>
          <tr>
            <td>Litecoin</td>
            <td></td>
          </tr>
          <tr>
            <td>Ripple</td>
            <td></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <strong> ET = Eastern Time (US), CET = Central European Time, GMT = Greenwich Mean Time.</strong>
    <div><strong class="primary--text">1</strong> 24 Hours trading, except for rollover break from 21:56 - 22:05 Mon-Thu.</div>
    <div><strong class="primary--text">2</strong> Sunday open 18:00,†Friday close 17:00</div>
    <div><strong class="primary--text">3</strong> Closes at 08:00 Saturday Sydney Time ††Closes at 07:00 Sydney Time during US DST.</div>
    <div><strong class="primary--text">4</strong> Closes at 08:00 Saturday Sydney Time †††Closes at 07:00 Sydney Time during US DST.</div>
    <div><strong class="primary--text">5</strong> Please note, the length of the German Equity auction can exceed 3 minutes and therefore the above times are for guidance only. For some German Equities, the auction may commence later than 13:03 (CET) and the auction may also exceed 3 minutes.</div>
    <div><strong class="primary--text">6</strong> Please note, the length of the UK Equity auction can exceed 2 minutes and therefore the above times are for guidance only.</div>
    <div class="mt-5 grey--text"> House of Borse aims to open and close markets as close to the posted trading hours as possible. However, House of Borse may delay market open or bring forward market close on specific instruments in an effort to protect clients from quoted prices or executions that are not representative of the true market price if, for example, there is a lack of liquidity'.</div>
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
          text: "Trading Hours",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>