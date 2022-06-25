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
    <h3 class="primary--text">
      Invest weth Multi-Asset global Investment Boutique
    </h3>
    <p class="caption">
      One investment account for trading globally. Easily open accounts to from any device with tight spreads and low-to-zero commission.
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
    <h3 class="text-center my-3 primary--text">
      WHY TRADE WITH HOUSE OF BORSE ?
    </h3>
    <p class="body-2 text-center text-uppercase">
      We’re a trusted MULTI-ASSET GLOBAL INVESTMENT BOUTIQUE with competitive
      pricing
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
    <v-img src="/cover-img-xs.jpg" height="320" class="mb-3">
      <div class="py-10">
        <h2 class="text-center primary--text">
          MULTI-ASSET GLOBAL INVESTMENT BOUTIQUE
        </h2>
        <h2 class="ml-3">Invest And Trade up .</h2>
        <h2 class="ml-3">Switch to HOB Now.</h2>
        <v-list-item>
          <v-list-item-avatar tile>
            <v-img src="/live.png" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Open</v-list-item-title>
            <v-list-item-subtitle>Live Account</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar tile>
            <v-img src="/demo.png" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Open</v-list-item-title>
            <v-list-item-subtitle>Demo Account</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-img>
    <h3 class="mb-3 text-center">Start Trading in 4 Steps</h3>
    <v-row>
      <v-col cols="12" md="3" sm="12">
        <div class="text-center">
          <div style="height: 89px">
            <img src="/reg/register.png" />
          </div>
          <h3 class="primary--text">Register</h3>
          <p class="caption">Apply for your ICM Direct</p>
        </div>
      </v-col>
      <v-col cols="12" md="3" sm="12">
        <div class="text-center">
          <div style="height: 89px">
            <img src="/reg/verify.png" />
          </div>
          <h3 class="primary--text">Verify</h3>
          <p class="caption">
            Submit your ID and Proof of Residency and get verified
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="3" sm="12">
        <div class="text-center">
          <div style="height: 89px">
            <img src="/reg/fund.png" />
          </div>
          <h3 class="primary--text">Fund</h3>
          <p class="caption">Deposit Funds in your live account</p>
        </div>
      </v-col>
      <v-col cols="12" md="3" sm="12">
        <div class="text-center">
          <div style="height: 89px">
            <img src="/reg/trade.png" />
          </div>
          <h3 class="primary--text">Trade</h3>
          <p class="caption">
            Enjoy being a part of the global financial markets
          </p>
        </div>
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
