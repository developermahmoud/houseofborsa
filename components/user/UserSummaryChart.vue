<template>
  <div class="summaryCard rounded-lg">
    <h4 class="mb-2">Summary of trades | Closed (Last Week)</h4>
    <div class="d-flex justify-space-between mb-2">
      <div class="black rounded-lg pa-2">
        <h5>Closed Trades</h5>
        <strong class="white--text">40</strong>
      </div>
      <div class="black rounded-lg pa-2">
        <h5>Total profit made</h5>
        <strong class="green--text">1,464,84$</strong>
      </div>
    </div>
    <div class="d-flex">
      <v-chart class="chart text-center" :option="option" />
      <div>
        <div>
          <v-chip small class="px-2" color="indigo darken-4">
            <v-icon small color="green">mdi-circle</v-icon> VIX (16)
          </v-chip>
        </div>
        <div>
          <v-chip small class="px-2" color="indigo darken-4">
            <v-icon small color="yellow">mdi-circle</v-icon> GBPJPY (8)
          </v-chip>
        </div>
        <div>
          <v-chip small class="px-2" color="indigo darken-4">
            <v-icon small color="orange">mdi-circle</v-icon> CADJPY (7)
          </v-chip>
        </div>
        <div>
          <v-chip small class="px-2" color="indigo darken-4">
            <v-icon small color="grey">mdi-circle</v-icon> Other (9)
          </v-chip>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);
export default {
  props: {
    dialog: {
      required: true,
      type: Boolean,
    },
  },
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "dark",
  },
  data() {
    return {
      option: {
        backgroundColor: "rgba(0, 0, 200, 0.0)",
        title: {
          text: "Top traded assets",
          left: "left",
        },
        legend: {
          show: false,
        },
        series: [
          {
            name: "HOB charts",
            type: "pie",
            radius: ["40%", "70%"],
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "10",
                fontWeight: "normal",
              },
            },
            data: [
              { value: 335, name: "Stock" },
              { value: 310, name: "ETFs" },
              { value: 234, name: "Crypto" },
              { value: 135, name: "Indices" },
            ],
          },
        ],
      },
    };
  },
}
</script>

<style scoped>
.chart {
  margin-right: 50px!important;
  width: 300px;
  height: 230px;
}
.summaryCard {
  padding: 5px;
  background-image: linear-gradient(to right, red , yellow);
}
</style>
