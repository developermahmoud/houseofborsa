<template>
  <div>
    <home-slider />
    <div class="d-flex my-2">
      <v-icon>mdi-bullhorn</v-icon>
      <marquee class="mx-2">CFDs and FX are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Professional clients can lose more than they deposit. All trading involves risk</marquee>
      <v-icon>mdi-format-list-bulleted</v-icon>
    </div>

    <home-services />
    <home-trade class="mb-3" />
    <home-charts class="mb-3" />
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
    <h3 class="mb-3">HÓB platforms</h3>
    <v-img width="100%" src="/platform.png" />
    <home-news class="mb-3" />
    <home-prices />
  </div>
</template>
<script>
import HomeCharts from "../components/home/HomeCharts.vue";
import HomeNews from "../components/home/HomeNews.vue";
import HomePrices from "../components/home/HomePrices.vue";
import HomeServices from "../components/home/HomeServices.vue";
import HomeSlider from "../components/home/HomeSlider.vue";
import HomeTrade from "../components/home/HomeTrade.vue";
export default {
  components: {
    HomeSlider,
    HomeServices,
    HomeNews,
    HomePrices,
    HomeTrade,
    HomeCharts,
  },
};
</script>
, HomePrices
