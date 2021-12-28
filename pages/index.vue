<template>
  <div>
    <home-slider />
    <home-services />
    <home-trade class="mb-3" />
    <home-charts class="mb-3"/>
    <img src="/platform.png" style="width:100%" />
    <home-news class="mb-3" />
    <home-prices class="mb-16"/>
  </div>
</template>
<script>
import HomeCharts from '../components/home/HomeCharts.vue';
import HomeNews from "../components/home/HomeNews.vue";
import HomePrices from "../components/home/HomePrices.vue";
import HomeServices from "../components/home/HomeServices.vue";
import HomeSlider from "../components/home/HomeSlider.vue";
import HomeTrade from '../components/home/HomeTrade.vue';
export default {
  components: { HomeSlider, HomeServices, HomeNews, HomePrices, HomeTrade, HomeCharts },
};
</script>
, HomePrices
