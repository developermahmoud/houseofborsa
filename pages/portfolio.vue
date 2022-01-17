<template>
  <div>
    <v-card class="primary mb-8" tile>
      <v-card-title class="pb-0">
        <v-btn icon @click="accountsDialog = true">
          <v-icon color="white">mdi-format-align-center</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="calendarDialog = true">
          <v-icon color="white">mdi-calendar</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="text-center white--text">
        <div>
          <span style="font-size: 20px">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon color="green" small v-bind="attrs" v-on="on">
                  mdi-checkbox-blank-circle
                </v-icon>
              </template>
              <span>HOB 5000</span>
            </v-tooltip>
            Portfolio P/L($)</span
          >
          <v-icon @click="isBlur = !isBlur">{{
            isBlur ? "mdi-eye-off-outline" : "mdi-eye"
          }}</v-icon>
        </div>
        <div>
          <div class="d-flex align-center justify-center">
            <v-icon @click="dialog = true" large>mdi-cards</v-icon>
            <div>
              <span class="text-h5">$</span>
              <strong :class="isBlur ? 'blur-text display-1' : 'display-1'">
                9238.</strong
              >
              <span class="text-h5">31</span>
            </div>
            <v-icon
              @click="
                showMargin = !showMargin;
                showChart = false;
              "
              >mdi-arrow-expand</v-icon
            >
          </div>
        </div>
        <div>
          <span class="font-weight-bold body-1"> P/L(22.1%)</span
          ><v-icon class="pa-0 mb-1">mdi-arrow-up-thin</v-icon>
        </div>
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
              <v-list-item-title>Available cash now </v-list-item-title>
              <v-list-item-action-text :class="isBlur ? 'blur-text' : ''"
                >$00.00</v-list-item-action-text
              >
            </v-list-item>
            <v-list-item style="min-height: 30px">
              <v-list-item-title
                >Margin Level(%): 
                <v-icon @click="marginInfoDialog = true" small
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
    <v-list three-line class="mx-2 transparent">
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
    <portfolio-dialogs-calendar
      v-if="calendarDialog"
      :dialog="calendarDialog"
      @close-dialog="calendarDialog = false"
    />
    <portfolio-dialogs-wallet
      v-if="dialog"
      :dialog="dialog"
      @close-dialog="dialog = false"
    />
    <portfolio-dialogs-accounts
      v-if="accountsDialog"
      :dialog="accountsDialog"
      @close-dialog="accountsDialog = false"
    />
    <portfolio-dialogs-margin-info
      v-if="marginInfoDialog"
      :dialog="marginInfoDialog"
      @close-dialog="marginInfoDialog = false"
    />
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
import PortfolioDialogsMarginInfo from "../components/portfolio/dialogs/PortfolioDialogsMarginInfo.vue";
import PortfolioDialogsAccounts from "../components/portfolio/dialogs/PortfolioDialogsAccounts.vue";
import PortfolioDialogsWallet from "../components/portfolio/dialogs/PortfolioDialogsWallet.vue";
import PortfolioDialogsCalendar from "../components/portfolio/dialogs/PortfolioDialogsCalendar.vue";

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
  layout: "internal",
  components: {
    VChart,
    PortfolioDialogsMarginInfo,
    PortfolioDialogsAccounts,
    PortfolioDialogsWallet,
    PortfolioDialogsCalendar,
  },
  provide: {
    [THEME_KEY]: "dark",
  },
  data() {
    return {
      tab: "open",
      showMargin: true,
      isBlur: false,
      showChart: false,
      marginInfoDialog: false,
      toggle_exclusive: null,
      calendarDialog: false,
      dialog: false,
      accountsDialog: false,

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