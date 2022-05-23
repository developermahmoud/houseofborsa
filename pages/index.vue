<template>
  <div>
    <home-slider />
    <div class="d-flex my-2">
      <v-icon>mdi-bullhorn</v-icon>
      <marquee class="mx-2"
        >CFDs and FX are complex instruments and come with a high risk of losing
        money rapidly due to leverage. You should consider whether you
        understand how CFDs work and whether you can afford to take the high
        risk of losing your money. Professional clients can lose more than they
        deposit. All trading involves risk</marquee
      >
      <v-icon>mdi-format-list-bulleted</v-icon>
    </div>
    <home-services />
    <home-trade class="mb-3" />
    <h3 class="mb-2">Financial Markets</h3>
    <div class="caption">LICENSED AND REGULATED by the FCA UK</div>
    <h3 class="primary--text">
      Invest weth Multi-Asset global Investment Boutique
    </h3>
    <p class="body-2">
      One investment account for trading US shares ,ETFs ,forex, cryptos,
      indices, & commodity CFDs globally. Easily open accounts to from any
      device with tight spreads and low-to-zero commission.
    </p>
    <div class="mb-6">
      <v-row>
        <v-col cols="4" class="pb-0">
          <v-card flat class="secondary text-center">
            <v-card-text>
              <v-progress-circular
                :rotate="360"
                :size="50"
                :width="4"
                :value="90"
                color="primary"
              >
                90%
              </v-progress-circular>
              <h5 class="white--text mt-3">Stocks</h5>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" class="pb-0 px-0">
          <v-card flat class="secondary text-center">
            <v-card-text>
              <v-progress-circular
                :rotate="360"
                :size="50"
                :width="4"
                :value="100"
                color="primary"
              >
                100%
              </v-progress-circular>
              <h5 class="white--text mt-3">ETFs</h5>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" class="pb-0">
          <v-card flat class="secondary text-center">
            <v-card-text>
              <v-progress-circular
                :rotate="360"
                :size="50"
                :width="4"
                :value="60"
                color="primary"
              >
                60%
              </v-progress-circular>
              <h5 class="white--text mt-3">Indices</h5>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" class="pb-0 pt-2">
          <v-card flat class="secondary text-center">
            <v-card-text>
              <v-progress-circular
                :rotate="360"
                :size="50"
                :width="4"
                :value="100"
                color="primary"
              >
                100%
              </v-progress-circular>
              <h5 class="white--text mt-3">Forex</h5>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" class="pb-0 px-0 pt-2">
          <v-card flat class="secondary text-center">
            <v-card-text>
              <v-progress-circular
                :rotate="360"
                :size="50"
                :width="4"
                :value="15"
                color="primary"
              >
                15%
              </v-progress-circular>
              <h5 class="white--text mt-3">Cryptos</h5>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" class="pb-0 pt-2">
          <v-card flat class="secondary text-center">
            <v-card-text>
              <v-progress-circular
                :rotate="360"
                :size="50"
                :width="4"
                :value="100"
                color="primary"
              >
                100%
              </v-progress-circular>
              <h5 class="white--text mt-3">GOLD & Oil</h5>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <home-charts class="mb-3" />
    <h3 class="mb-3">HÓB platforms</h3>
    <p>
      Invest And Trade on the world’s most popular platform MT5 Or HOB App
      trading offering 5000+ US stocks, Cryptocurrencies, Forex, commodities,
      and metals ,on ANY device, 24/5 customer support & real-time market news
    </p>
    <v-row class="mb-1">
      <v-col class="text-center">
        <v-icon size="20">fab fa-windows</v-icon>
        <br />
        <span style="font-size: 9px">Widnows</span>
      </v-col>
      <v-col class="text-center">
        <v-icon size="20">mdi-desktop-mac</v-icon>
        <br />
        <span style="font-size: 9px">Mac</span>
      </v-col>
      <v-col class="text-center">
        <v-icon size="20">mdi-web</v-icon>
        <br />
        <span style="font-size: 9px">Web</span>
      </v-col>
      <v-col class="text-center">
        <v-icon size="20">mdi-apple</v-icon>
        <br />
        <span style="font-size: 9px">IOS</span>
      </v-col>
      <v-col class="text-center">
        <v-icon size="20">mdi-android</v-icon>
        <br />
        <span style="font-size: 9px">Android</span>
      </v-col>
    </v-row>
    <v-img width="100%" src="/platform.png" />
    <h3 class="text-center my-3">WHY HOUSE OF BORSE?</h3>
    <p class="body-2 text-center">
      WE PROVIDE PROFESSIONAL AND CORPORATE CLIENTS THE OPPORTUNITY TO TRADE
      WITH TIER 1 BANKS AND INSTITUTIONS ON TIGHT SPREADS, WITH ULTRA FAST
      EXECUTION AND AT INCREDIBLY LOW-COST. WE OFFER A BROAD RANGE OF
      INSTRUMENTS, INCLUDING FX, INDICES, COMMODITIES AND EQUITIES. BEING
      REGULATED IN THE UK BY THE FCA ENSURES WE MEET THE HIGHEST STANDARDS OF
      CONSUMER PROTECTION AND CUSTOMER SERVICE. OUR GOAL IS TO PERESERVE OUR
      CLIENTS’ INTEREST AT ALL TIMES.
    </p>
    <v-row class="mb-4">
      <v-col cols="12" sm="12" md="4">
        <v-list-item>
          <v-list-item-avatar tile>
            <img src="/why/2.png" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> Ultra-Low Spreads</v-list-item-title>
            <v-list-item-subtitle
              >Competitive Market Spreads.</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="12" sm="12" md="4">
        <v-list-item>
          <v-list-item-avatar tile>
            <img src="/why/3.png" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> Aggregator Of Tier-1 Banks</v-list-item-title>
            <v-list-item-subtitle
              >Access to deep liquidity and a broad range of liquidity
              providers.</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="12" sm="12" md="4">
        <v-list-item>
          <v-list-item-avatar tile>
            <img src="/why/4.png" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> Fast Execution</v-list-item-title>
            <v-list-item-subtitle
              >Execution At Best Available Price With Low
              Latency.</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="12" sm="12" md="4">
        <v-list-item>
          <v-list-item-avatar tile>
            <img src="/why/5.png" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Matched Principle ECN Broker</v-list-item-title>
            <v-list-item-subtitle
              >We send all trades through to the market so have no conflict of
              interest with our clients.</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="12" sm="12" md="4">
        <v-list-item>
          <v-list-item-avatar tile>
            <img src="/why/1.png" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Variety Of Products</v-list-item-title>
            <v-list-item-subtitle
              >Access to Different Assets Such as Equities, Forex, Metals,
              etc...</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="12" sm="12" md="4">
        <v-list-item>
          <v-list-item-avatar tile>
            <img src="/why/6.png" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>FCA UK Regulated</v-list-item-title>
            <v-list-item-subtitle
              >Fully Authorised and Regulated by the FCA in the United
              Kingdom.</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
    <home-news class="mb-3" />
    <home-prices />
    <bottom-links class="mt-5" />
  </div>
</template>
<script>
import HomeCharts from "../components/home/HomeCharts.vue";
import HomeNews from "../components/home/HomeNews.vue";
import HomePrices from "../components/home/HomePrices.vue";
import HomeServices from "../components/home/HomeServices.vue";
import HomeSlider from "../components/home/HomeSlider.vue";
import HomeTrade from "../components/home/HomeTrade.vue";
import BottomLinks from "../components/partials/BottomLinks.vue";
export default {
  components: {
    HomeSlider,
    HomeServices,
    HomeNews,
    HomePrices,
    HomeTrade,
    HomeCharts,
    BottomLinks,
  },
};
</script>
, HomePrices
