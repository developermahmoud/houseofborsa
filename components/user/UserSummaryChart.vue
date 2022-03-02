<template>
  <div>
    <div class="summaryCard rounded-lg mb-5">
      <div>
         <h4 class="mb-2">Performance |  last 12 Month</h4>
         <v-icon>mdi-chart</v-icon>
      </div>
     
      <div class="d-flex justify-space-between mb-2">
        <div class="black rounded-lg px-2 py-4 text-center" style="width:100%;">
          <h6>RETURN <v-icon @click="showDetails=!showDetails" small>mdi-information</v-icon></h6>
          <strong class="green--text">+20%</strong>
        </div>
        <div class="black rounded-lg mx-2 px-2 py-4 text-center" style="width:100%;">
          <h6>MaxDD <v-icon @click="showDetails=!showDetails" small>mdi-information</v-icon></h6>
          <strong class="red--text">-16%</strong>
        </div>
        <div class="black rounded-lg px-2 py-4 text-center" style="width:100%;">
          <h6>Risk Level <v-icon @click="showDetails=!showDetails" small>mdi-information</v-icon></h6>
          <strong class="white--text">6</strong>
        </div>
      </div>
      <div class="d-flex justify-space-between mb-2">
        <div class="black rounded-lg px-2 py-4 text-center" style="width:100%;">
          <h6>AVG Profit <v-icon @click="showDetails=!showDetails" small>mdi-information</v-icon></h6>
          <strong class="green--text"><v-icon color="green" small>mdi-arrow-up</v-icon>98.2%</strong>
        </div>
        <div class="black rounded-lg mx-2 px-2 py-4 text-center" style="width:100%;">
          <h6>AVG Loss <v-icon @click="showDetails=!showDetails" small>mdi-information</v-icon></h6>
          <strong class="red--text"><v-icon color="red" small>mdi-arrow-down</v-icon>14.4%</strong>
        </div>
        <div class="black rounded-lg px-2 py-4 text-center" style="width:100%;">
          <h6>Total Trades <v-icon @click="showDetails=!showDetails" small>mdi-information</v-icon></h6>
          <strong class="white--text">50</strong>
        </div>
      </div>
      <v-row no-gutters>
        <v-col cols="12" md="6" sm="12">
          <v-chart style="width: 95%;" class="chart text-center" :option="option" />
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <v-list dense class="pa-0 transparent mb-2">
            <v-list-item style="min-height: 20px; height: 35px">
              <v-list-item-icon>
                <v-icon color="#ed6d77">mdi-square-rounded</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="body-1">Stock</v-list-item-title>
              <v-list-item-action class="black--text">10%</v-list-item-action>
            </v-list-item>
            <v-list-item style="min-height: 20px; height: 35px">
              <v-list-item-icon>
                <v-icon color="#4992ff">mdi-square-rounded</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="body-1">ETFs</v-list-item-title>
              <v-list-item-action class="black--text">35%</v-list-item-action>
            </v-list-item>
            <v-list-item style="min-height: 20px; height: 35px">
              <v-list-item-icon>
                <v-icon color="#7cffb2">mdi-square-rounded</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="body-1">Cryptocurrency</v-list-item-title>
              <v-list-item-action class="black--text">35%</v-list-item-action>
            </v-list-item>
            <v-list-item style="min-height: 20px; height: 35px">
              <v-list-item-icon>
                <v-icon color="#f9dd60">mdi-square-rounded</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="body-1">Indices</v-list-item-title>
              <v-list-item-action class="black--text">20%</v-list-item-action>
            </v-list-item>
            <v-list-item style="min-height: 20px; height: 35px">
              <v-list-item-icon>
                <v-icon color="black">mdi-square-rounded</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="body-1">Commodities</v-list-item-title>
              <v-list-item-action class="black--text">40%</v-list-item-action>
            </v-list-item>
            <v-list-item style="min-height: 20px; height: 35px">
              <v-list-item-icon>
                <v-icon color="purple">mdi-square-rounded</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="body-1">Metals</v-list-item-title>
              <v-list-item-action class="black--text">30%</v-list-item-action>
            </v-list-item>
            <v-list-item style="min-height: 20px; height: 35px">
              <v-list-item-icon>
                <v-icon color="orange">mdi-square-rounded</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="body-1">FOREX</v-list-item-title>
              <v-list-item-action class="black--text">50%</v-list-item-action>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
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
    <v-dialog max-width="700" v-model="showDetails">
      <v-card class="secondary">
        <v-card-title class="justify-center">Show Details</v-card-title>
        <v-card-text>
          <p>This card shows the user's past performance in a way that is simple to understand yet complex in design.</p>
          <p>The monthly stats calculate the user's change in equity from the beginning of the month until the end of the month and offsets any deposits/withdrawals. The yearly figures are calculated by compounding the monthly gains hroughout the year.</p>
          <p>Please click here for the full details and the exact formulas used.</p>
        </v-card-text>
      </v-card>
    </v-dialog>
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
      showDetails: false,
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
