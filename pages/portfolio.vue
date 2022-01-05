<template>
  <div>
    <v-card class="primary mb-8" tile>
      <v-card-title>
        <v-btn icon @click="orderDialog = true">
          <v-icon color="white">mdi-format-align-center</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        Portfolio Value
        <v-spacer></v-spacer>
        <v-btn icon @click="showCalendar = true">
          <v-icon color="white">mdi-calendar</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="text-center white--text">
        <div class="mb-2">
          <v-icon @click="dialog = true" large class="mb-5">mdi-cards</v-icon
          ><strong class="display-1">9238.31</strong>
        </div>
        <span>+ $ 170.25 (22.1%) </span>
      </v-card-text>
      <v-btn
        fab
        class="white"
        bottom
        right
        absolute
        @click="showChart = !showChart"
      >
        <v-icon color="primary">mdi-selection-ellipse</v-icon>
      </v-btn>
    </v-card>
    <template v-if="showChart">
      <v-chart class="chart" :option="option" />
    </template>
    <v-list v-else class="pa-0 transparent mb-2">
      <v-list-item style="min-height: 30px">
        <v-list-item-title>Total Invested</v-list-item-title>
        <v-list-item-action-text>$00.00</v-list-item-action-text>
      </v-list-item>
      <v-list-item style="min-height: 30px">
        <v-list-item-title>AAvailable cash</v-list-item-title>
        <v-list-item-action-text>$00.00</v-list-item-action-text>
      </v-list-item>
      <v-list-item style="min-height: 30px">
        <v-list-item-title
          >Margin Level%
          <v-icon @click="infoDialog = true" small
            >mdi-information-outline</v-icon
          ></v-list-item-title
        >
        <v-list-item-action-text>$00.00</v-list-item-action-text>
      </v-list-item>
    </v-list>
    <v-list three-line class="mx-2 mb-13 transparent">
      <v-list-item class="secondary rounded mb-3" v-for="i in 5" :key="i">
        <v-list-item-avatar>
          <v-img src="/opengraph.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title
            >AWS,
            <span class="primary--text">buy 500.00</span></v-list-item-title
          >
          <v-list-item-subtitle
            >30.94
            <v-icon>mdi-arrow-right-thin</v-icon> 30.15</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-action class="red--text">
          -395.00
          <br />
          +1.92%
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-dialog v-model="showCalendar" max-width="700" scrollable>
      <v-card class="secondary">
        <v-tabs
          fixed-tabs
          right
          active-class="primary"
          background-color="secondary"
          class="mb-5"
        >
          <v-tab
            >Trading<br />
            history</v-tab
          >
          <v-tab
            >Transfer<br />
            history</v-tab
          >
        </v-tabs>
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="12">
              <v-select
                v-model="selectedItem"
                :items="[0, 1]"
                dense
                class="pt-2"
                label="Account *"
                outlined
              >
                <template v-slot:selection="{ index }">
                  <v-avatar size="30" v-if="index === 0">
                    <v-img src="/opengraph.png"></v-img>
                  </v-avatar>
                  HOB 125.22
                </template>
              </v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field
                dense
                placeholder="From"
                outlined
                append-icon="mdi-calendar"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                hide-details
                dense
                placeholder="To"
                outlined
                append-icon="mdi-calendar"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn block class="background" text
            ><v-icon>mdi-filter</v-icon></v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog" max-width="700" scrollable>
      <v-row no-gutters>
        <v-col cols="4">
          <v-card tile class="secondary py-2 text-center" outlined>
            <v-icon color="primary">mdi-arrow-up-thin</v-icon>
            <br />
            Deposit
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card tile class="secondary py-2 text-center" outlined>
            <v-icon color="primary">mdi-swap-horizontal</v-icon>
            <br />
            Transfer
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card tile class="secondary py-2 text-center" outlined>
            <v-icon color="primary">mdi-arrow-down-thin</v-icon>
            <br />
            Withdraw
          </v-card>
        </v-col>
      </v-row>
    </v-dialog>
    <v-dialog v-model="orderDialog" max-width="700" scrollable>
      <v-card class="secondary">
        <v-card-title class="justify-center">Orders</v-card-title>
        <v-slide-group mandatory v-model="toggle_exclusive">
          <v-slide-item v-slot="{ active, toggle }">
            <v-btn
              :input-value="active"
              active-class="primary"
              @click="toggle"
              tile
              small
              text
              >Active
            </v-btn>
          </v-slide-item>
          <v-slide-item v-slot="{ active, toggle }">
            <v-btn
              :input-value="active"
              active-class="primary"
              @click="toggle"
              tile
              small
              text
              >Pending
            </v-btn>
          </v-slide-item>
          <v-slide-item v-slot="{ active, toggle }">
            <v-btn
              :input-value="active"
              active-class="primary"
              @click="toggle"
              tile
              small
              text
              >Closed
            </v-btn>
          </v-slide-item>
        </v-slide-group>
        <v-card-text></v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog fullscreen hidden v-model="infoDialog">
      <v-card class="secondary">
        <v-toolbar flat class="secondary">
          <v-icon @click="infoDialog = false">mdi-close</v-icon>
          <v-toolbar-title class="ml-2">Margin info</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="pa-0">
          <div class="px-2 mb-2" style="font-size: 11px; line-height: 17px">
            we show you the margin level in real-time to protect your funds the
            calculation consists of your equity (available money) and the margin
            used in all of your currently opened trades the calculation of the
            levels is as follows: (Equity/margin used)*100
          </div>
          <div class="mb-2 mx-1">
            <div class="px-2 red--text" style="background: #5a303c">-100%</div>
            <div
              class="px-2 secondaryBackground"
              style="font-size: 10px; line-height: 17px"
            >
              in the margin level drops below 100% your positions will start
              closing beginning from the most unprofitable one, until there is
              enough margin in your account to sustain any remaining open
              positions . we notify you via App notification and e-mail
            </div>
          </div>
          <div class="mb-2 mx-1">
            <div class="px-2 amber--text" style="background: #463931">
              -120%
            </div>
            <div
              class="px-2 secondaryBackground"
              style="font-size: 10px; line-height: 17px"
            >
              if your margin level is below 120% we recommended to fund your
              account or close some losing position we notify you via app
              notification and e-mail
            </div>
          </div>
          <div class="mb-2 mx-1">
            <div class="px-2 green--text" style="background: #354b3f">
              >120%
            </div>
            <div
              class="px-2 secondaryBackground"
              style="font-size: 10px; line-height: 17px"
            >
              if margin level is above 120% everything is fine
            </div>
          </div>
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
  layout: "portfolio",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "dark",
  },
  data() {
    return {
      showChart: false,
      infoDialog: false,
      toggle_exclusive: null,
      showCalendar: false,
      dialog: false,
      orderDialog: false,
      selectedItem: 0,
      option: {
        backgroundColor: "#181e2e",
        title: {
          text: "HOB chart",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["BTC", "CB", "ADA", "OTH"],
        },
        series: [
          {
            name: "HOB charts",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "BTC" },
              { value: 310, name: "CB" },
              { value: 234, name: "ADA" },
              { value: 135, name: "OTH" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.chart {
  height: 300px;
}
</style>