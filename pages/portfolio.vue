<template>
  <div>
    <v-card class="primary mb-8" tile>
      <v-card-title class="pb-0">
        <v-btn icon @click="orderDialog = true">
          <v-icon color="white">mdi-format-align-center</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="showCalendar = true">
          <v-icon color="white">mdi-calendar</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="text-center white--text">
        <div>
          <span class="font-weight-bold" style="font-size: 20px"
            >Portfolio P/L($)</span
          >
          <v-icon @click="isBlur = !isBlur">{{
            isBlur ? "mdi-eye-off-outline" : "mdi-eye"
          }}</v-icon>
        </div>
        <div>
          <v-icon @click="dialog = true" large class="mb-5">mdi-cards</v-icon
          >$<strong :class="isBlur ? 'blur-text display-2' : 'display-2'"
            >9238.31</strong
          >
          <v-icon
            @click="
              showMargin = !showMargin;
              showChart = false;
            "
            class="mb-3"
            >mdi-arrow-expand</v-icon
          >
        </div>
        <span class="font-weight-bold body-1"> P/L(22.1%)</span
        ><v-icon class="pa-0 mb-1">mdi-arrow-up-thin</v-icon>
      </v-card-text>
      <v-btn
        fab
        class="white"
        bottom
        right
        absolute
        @click="
          showChart = !showChart;
          showMargin = false;
        "
      >
        <v-icon color="primary">mdi-selection-ellipse</v-icon>
      </v-btn>
    </v-card>

    <template v-if="showChart">
      <v-chart class="chart" :option="option" />
      <v-list dense class="pa-0 transparent mb-2">
        <v-list-item style="min-height: 20px; height: 35px">
          <v-list-item-icon>
            <v-icon color="#ed6d77">mdi-square-rounded</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="body-1">Stock</v-list-item-title>
          <v-list-item-action>10%</v-list-item-action>
        </v-list-item>
        <v-list-item style="min-height: 20px; height: 35px">
          <v-list-item-icon>
            <v-icon color="#4992ff">mdi-square-rounded</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="body-1">ETFs</v-list-item-title>
          <v-list-item-action>35%</v-list-item-action>
        </v-list-item>
        <v-list-item style="min-height: 20px; height: 35px">
          <v-list-item-icon>
            <v-icon color="#7cffb2">mdi-square-rounded</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="body-1">Cryptocurrency</v-list-item-title>
          <v-list-item-action>35%</v-list-item-action>
        </v-list-item>
        <v-list-item style="min-height: 20px; height: 35px">
          <v-list-item-icon>
            <v-icon color="#f9dd60">mdi-square-rounded</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="body-1">Indices</v-list-item-title>
          <v-list-item-action>20%</v-list-item-action>
        </v-list-item>
      </v-list>
    </template>
    <template v-if="showMargin">
      <v-tabs background-color="transparent" fixed-tabs v-model="tab">
        <v-tab href="#open">Open <v-badge inline content="4"></v-badge></v-tab>
        <v-tab href="#closed">Closed</v-tab>
        <v-tab href="#pending">Pending</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab" class="transparent">
        <v-tab-item value="open">
          <v-list class="pa-0 transparent mb-2">
            <v-list-item style="min-height: 30px">
              <v-list-item-title>Portfolio Balance</v-list-item-title>
              <v-list-item-action-text :class="isBlur ? 'blur-text' : ''"
                >$00.00</v-list-item-action-text
              >
            </v-list-item>
            <v-list-item style="min-height: 30px">
              <v-list-item-title>Portfolio Value</v-list-item-title>
              <v-list-item-action-text :class="isBlur ? 'blur-text' : ''"
                >$00.00</v-list-item-action-text
              >
            </v-list-item>
            <v-list-item style="min-height: 30px">
              <v-list-item-title>invested Value</v-list-item-title>
              <v-list-item-action-text :class="isBlur ? 'blur-text' : ''"
                >$00.00</v-list-item-action-text
              >
            </v-list-item>
            <v-list-item style="min-height: 30px">
              <v-list-item-title>Available cash now</v-list-item-title>
              <v-list-item-action-text :class="isBlur ? 'blur-text' : ''"
                >$00.00</v-list-item-action-text
              >
            </v-list-item>
            <v-list-item style="min-height: 30px">
              <v-list-item-title
                >Margin Level%
                <v-icon @click="infoDialog = true" small
                  >mdi-information-outline</v-icon
                ></v-list-item-title
              >
              <v-list-item-action-text :class="isBlur ? 'blur-text' : ''"
                >$00.00</v-list-item-action-text
              >
            </v-list-item>
          </v-list>
        </v-tab-item>
        <v-tab-item value="closed">
          <v-list-item style="min-height: 30px">
            <v-list-item-title>Total Profits</v-list-item-title>
            <v-list-item-action-text :class="isBlur ? 'blur-text' : ''"
              >$00.00</v-list-item-action-text
            >
          </v-list-item>
          <v-list-item style="min-height: 30px">
            <v-list-item-title>Returns(%)</v-list-item-title>
            <v-list-item-action-text :class="isBlur ? 'blur-text' : ''"
              >$00.00</v-list-item-action-text
            >
          </v-list-item>
          <v-list-item style="min-height: 30px">
            <v-list-item-title>commission</v-list-item-title>
            <v-list-item-action-text :class="isBlur ? 'blur-text' : ''"
              >$00.00</v-list-item-action-text
            >
          </v-list-item>
          <v-list-item style="min-height: 30px">
            <v-list-item-title>Dividends</v-list-item-title>
            <v-list-item-action-text :class="isBlur ? 'blur-text' : ''"
              >$00.00</v-list-item-action-text
            >
          </v-list-item>
          <v-list-item style="min-height: 30px">
            <v-list-item-title>Fees</v-list-item-title>
            <v-list-item-action-text :class="isBlur ? 'blur-text' : ''"
              >$00.00</v-list-item-action-text
            >
          </v-list-item>
          <v-list-item style="min-height: 30px">
            <v-list-item-title>Taxes</v-list-item-title>
            <v-list-item-action-text :class="isBlur ? 'blur-text' : ''"
              >$00.00</v-list-item-action-text
            >
          </v-list-item>
          <v-list-item style="min-height: 30px">
            <v-list-item-title>Swap</v-list-item-title>
            <v-list-item-action-text :class="isBlur ? 'blur-text' : ''"
              >$00.00</v-list-item-action-text
            >
          </v-list-item>
          <v-list-item style="min-height: 30px">
            <v-list-item-title>Net Balance</v-list-item-title>
            <v-list-item-action-text :class="isBlur ? 'blur-text' : ''"
              >$00.00</v-list-item-action-text
            >
          </v-list-item>
          <v-list-item style="min-height: 30px">
            <v-list-item-title>Total Withdrawals</v-list-item-title>
            <v-list-item-action-text :class="isBlur ? 'blur-text' : ''"
              >$00.00</v-list-item-action-text
            >
          </v-list-item>
          <v-list-item style="min-height: 30px">
            <v-list-item-title>Net deposit Amount</v-list-item-title>
            <v-list-item-action-text :class="isBlur ? 'blur-text' : ''"
              >$00.00</v-list-item-action-text
            >
          </v-list-item>
        </v-tab-item>
        <v-tab-item value="pending"> Pending </v-tab-item>
      </v-tabs-items>
    </template>

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
            <v-icon>mdi-arrow-right-thin</v-icon>
            30.15</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-action-text class="green--text">
          <div class="font-weight-bold">$ 395.00</div>
          <div style="font-size: 0.875rem; text-align: left">+1.92%</div>
        </v-list-item-action-text>
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
            <v-col cols="12" class="mb-2">
              <v-select
                v-model="selectedItem"
                :items="[0, 1]"
                dense
                class="pt-2"
                label="Account *"
                hide-details
                outlined
              >
                <template v-slot:selection="{}"> HOB 125.22 </template>
              </v-select>
            </v-col>
            <v-col cols="12" class="mb-2">
              <v-slide-group
                v-model="toggle_btn"
                mandatory
                active-class="primary"
                :show-arrows="false"
              >
                <v-slide-item v-slot="{ active, toggle }">
                  <v-btn
                    small
                    class="secondaryBackground mr-1"
                    :input-value="active"
                    @click="toggle"
                  >
                    1m
                  </v-btn>
                </v-slide-item>
                <v-slide-item v-slot="{ active, toggle }">
                  <v-btn
                    small
                    class="secondaryBackground mr-1"
                    :input-value="active"
                    @click="toggle"
                  >
                    3m
                  </v-btn>
                </v-slide-item>
                <v-slide-item v-slot="{ active, toggle }">
                  <v-btn
                    small
                    class="secondaryBackground mr-1"
                    :input-value="active"
                    @click="toggle"
                  >
                    6m
                  </v-btn>
                </v-slide-item>
                <v-slide-item v-slot="{ active, toggle }">
                  <v-btn
                    small
                    class="secondaryBackground mr-1"
                    :input-value="active"
                    @click="toggle"
                  >
                    1y
                  </v-btn>
                </v-slide-item>
                <v-slide-item v-slot="{ active, toggle }">
                  <v-btn
                    small
                    class="secondaryBackground mr-1"
                    :input-value="active"
                    @click="toggle"
                  >
                    3y
                  </v-btn>
                </v-slide-item>
                <v-slide-item v-slot="{ active, toggle }">
                  <v-btn
                    small
                    class="secondaryBackground mr-1"
                    :input-value="active"
                    @click="toggle"
                  >
                    All time
                  </v-btn>
                </v-slide-item>
              </v-slide-group>
            </v-col>
            <v-col cols="12" class="mb-2">
              <v-text-field
                dense
                hide-details
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
    <v-dialog v-model="orderDialog" fullscreen hide-overlay>
      <v-card class="secondary">
        <v-card-title>
          Accounts
          <v-spacer></v-spacer>
          <v-btn icon @click="orderDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <div class="mt-4 mx-2">
          <h3>Currently Logged In</h3>
          <v-list-item dense class="px-0 my-2">
            <v-list-item-icon class="px-0 mr-2">
              <v-btn icon class="green">
                <v-icon>mdi-currency-usd</v-icon>
              </v-btn>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>HÓB - USD</v-list-item-title>
              <v-list-item-subtitle class="green--text"
                >0.00$</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-chip small label color="grey">6091858</v-chip>
          <v-chip small label color="blue">MT5</v-chip>
          <v-chip small label color="green">LIVE</v-chip>
        </div>
        <div class="mt-4 mx-2">
          <h3>Your Trading Account</h3>
          <v-list-item dense class="px-0 my-2">
            <v-list-item-icon class="px-0 mr-2">
              <v-btn icon class="green">
                <v-icon>mdi-currency-usd</v-icon>
              </v-btn>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>HÓB - USD</v-list-item-title>
              <v-list-item-subtitle class="green--text"
                >10.000.00$</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-chip small label color="grey">6091858</v-chip>
          <v-chip small label color="blue">MT5</v-chip>
          <v-chip small label color="red">DEMO</v-chip>
        </div>
      </v-card>
    </v-dialog>
    <v-dialog v-model="infoDialog" fullscreen hide-overlay>
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
      tab: "open",
      toggle_btn: undefined,
      showMargin: true,
      isBlur: false,
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
          text: "Exposure",
          left: "center",
        },
        legend: {
          show: false,
        },
        series: [
          {
            name: "HOB charts",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: "Stock" },
              { value: 310, name: "ETFs" },
              { value: 234, name: "Cryptocurrency" },
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
  padding: 0;
  widows: 300px;
  height: 260px;
}
</style>