<template>
  <div>
    <div class="summaryCard rounded-lg mb-5">
      <h4 class="mb-2">Trades Summary |  last 12 Month</h4>
      <div class="d-flex justify-space-between mb-2">
        <div class="black rounded-lg pa-2" style="width:100%;">
          <h5>ROI</h5>
          <strong class="green--text">+20%</strong>
        </div>
        <div class="black rounded-lg mx-2 pa-2" style="width:100%;">
          <h5>MaxDD</h5>
          <strong class="red--text">-16%</strong>
        </div>
        <div class="black rounded-lg pa-2" style="width:100%;">
          <h5>RiskLevel</h5>
          <strong class="white--text">6</strong>
        </div>
      </div>
      <div class="d-flex justify-space-between mb-2">
        <div class="black rounded-lg pa-2" style="width:100%;">
          <h5>Closed</h5>
          <strong class="white--text">206</strong>
        </div>
        <div class="black rounded-lg mx-2 pa-2" style="width:100%;">
          <h5>Open</h5>
          <strong class="white--text">34</strong>
        </div>
        <div class="black rounded-lg pa-2" style="width:100%;">
          <h5>TotalTrades</h5>
          <strong class="white--text">50</strong>
        </div>
      </div>
      <div class="d-flex">
        <v-chart class="chart text-center" :option="option" />
        <div>
          <div>
            <v-chip small class="px-2" color="indigo darken-4">
              <v-icon small color="green">mdi-circle</v-icon> VIX(20%)
            </v-chip>
          </div>
          <div>
            <v-chip small class="px-2" color="indigo darken-4">
              <v-icon small color="yellow">mdi-circle</v-icon> GBPJPY(20%)
            </v-chip>
          </div>
          <div>
            <v-chip small class="px-2" color="indigo darken-4">
              <v-icon small color="orange">mdi-circle</v-icon> CADJPY(20%)
            </v-chip>
          </div>
          <div>
            <v-chip small class="px-2" color="indigo darken-4">
              <v-icon small color="grey">mdi-circle</v-icon> Other(20%)
            </v-chip>
          </div>
        </div>
      </div>
    </div>
    <v-img src="/chart.jpeg" class="rounded-lg mb-5" />
    <v-simple-table class="secondary">
      <template v-slot:default>
        <thead>
        <tr>
          <th></th>
          <th>Jan</th>
          <th>Feb</th>
          <th>Mar</th>
          <th>Apr</th>
          <th>May</th>
          <th>Jun</th>
          <th>Jul</th>
          <th>Aug</th>
          <th>Sep</th>
          <th>Oct</th>
          <th>Nov</th>
          <th>Dec</th>
          <th>YTD</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2019</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>3.88</td>
          <td>0.00%</td>
        </tr>
        <tr>
          <td>2020</td>
          <td>13.12</td>
          <td>5.95</td>
          <td>10.52</td>
          <td>10.55</td>
          <td>15.25</td>
          <td>15.123</td>
          <td>18.25</td>
          <td>17.55</td>
          <td>19.2</td>
          <td class="primary--text">1.55</td>
          <td class="primary--text">55.455</td>
          <td class="primary--text">455.55</td>
          <td class="primary--text">11.43%</td>
        </tr>
        <tr>
          <td>2021</td>
          <td class="primary--text">15.25</td>
          <td class="primary--text">152.22</td>
          <td class="primary--text">175.25</td>
          <td class="primary--text">652.25</td>
          <td class="primary--text">445.3</td>
          <td class="primary--text">12.33</td>
          <td class="primary--text">14.5</td>
          <td class="primary--text">178.25</td>
          <td class="primary--text">12.55</td>
          <td class="primary--text">17.22</td>
          <td class="primary--text">123.55</td>
          <td class="primary--text">1.22</td>
          <td class="primary--text">0.00%</td>
        </tr>
        <tr>
          <td>2022</td>
          <td class="primary--text">7.33</td>
          <td class="primary--text">5.17</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="primary--text">12.98%</td>
        </tr>
        <tr>
          <td colspan="12">
            <v-icon small>mdi-alert-box</v-icon> Trading style has changed. Part of history is not included in statistics
          </td>
          <td>Total:</td>
          <td class="primary--text">141.10%</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
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
          text: "Asset allocation",
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
