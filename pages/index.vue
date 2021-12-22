<template>
  <div>
    <home-slider />
    <home-services />
    <home-news />
    <home-prices />
    <v-card class="transparent mb-8" flat>
      <v-card-title></v-card-title>
      <v-card-text class="text-center">
        <img src="/home.png" style="width: 100%" />
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import HomeNews from "../components/home/HomeNews.vue";
import HomePrices from "../components/home/HomePrices.vue";
import HomeServices from "../components/home/HomeServices.vue";
import HomeSlider from "../components/home/HomeSlider.vue";
export default {
  components: { HomeSlider, HomeServices, HomeNews, HomePrices },
};
</script>
, HomePrices
