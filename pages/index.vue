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
    <h3 class="mb-2">Vitality index</h3>
    <div class="mb-6">
      <v-row>
        <v-col cols="4" class="pb-0">
          <v-card flat class="secondary text-center">
            <v-card-text>
              <v-progress-circular
                :rotate="360"
                :size="50"
                :width="4"
                :value="100"
                color="primary"
              >
                100
              </v-progress-circular>
              <h5 class="white--text mt-3">Forex</h5>
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
                100
              </v-progress-circular>
              <h5 class="white--text mt-3">Commodities</h5>
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
                :value="100"
                color="primary"
              >
                100
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
                :value="92"
                color="primary"
              >
                92
              </v-progress-circular>
              <h5 class="white--text mt-3">Cryptocurrency</h5>
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
                :value="100"
                color="primary"
              >
                100
              </v-progress-circular>
              <h5 class="white--text mt-3">U.S.</h5>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" class="pb-0 pt-2">
          <v-card flat class="secondary text-center">
            <v-card-text>
              <v-avatar class="background">
                <v-icon>mdi-brightness-2</v-icon>
              </v-avatar>
              <h5 class="white--text mt-3">Europe</h5>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <home-charts class="mb-3" />
    <h3 class="mb-3">HÓB platforms</h3>
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
import BottomLinks from '../components/partials/BottomLinks.vue';
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
