<template>
  <div>
    <v-dialog
      v-model="dialog"
      max-width="700"
      scrollable
      @click:outside="$emit('close-dialog')"
    >
      <v-card class="summaryCard pt-5">
        <v-row no-gutters>
          <v-col cols="12" sm="6" md="12">
            <v-chart
              style="width: 250px"
              class="chart text-center"
              :option="option"
            />
          </v-col>
          <v-col cols="12" sm="6" md="12">
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
                <v-list-item-title class="body-1"
                  >Cryptocurrency</v-list-item-title
                >
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
                <v-list-item-title class="body-1"
                  >Commodities</v-list-item-title
                >
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
                  <v-icon color="white">mdi-square-rounded</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="body-1">FOREX</v-list-item-title>
                <v-list-item-action class="black--text">50%</v-list-item-action>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
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
};
</script>

<style scoped>
.chart {
  margin-right: 50px !important;
  width: 300px;
  height: 230px;
}
.summaryCard {
  padding: 5px;
  background-image: linear-gradient(to right, red, yellow);
}
</style>
