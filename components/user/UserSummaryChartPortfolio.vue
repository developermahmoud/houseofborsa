<template>
  <div>
    <div class="summaryCard rounded-lg mb-5">
      <div class="d-flex justify-space-between align-center mb-2">
        <h4>Performance | last 12 Month</h4>
      </div>
      <div class="d-flex justify-space-between mb-2">
        <div class="black rounded-lg px-2 py-4 text-center" style="width: 100%">
          <h6>
            RETURN
            <v-icon @click="showDetails = !showDetails" small
              >mdi-information</v-icon
            >
          </h6>
          <strong class="green--text">+20%</strong>
        </div>
        <div
          class="black rounded-lg mx-2 px-2 py-4 text-center"
          style="width: 100%"
        >
          <h6>
            MaxDD
            <v-icon @click="showDetails = !showDetails" small
              >mdi-information</v-icon
            >
          </h6>
          <strong class="red--text">-16%</strong>
        </div>
        <div class="black rounded-lg px-2 py-4 text-center" style="width: 100%">
          <h6>
            Risk Level
            <v-icon @click="showDetails = !showDetails" small
              >mdi-information</v-icon
            >
          </h6>
          <strong class="white--text">6</strong>
        </div>
      </div>
      <div class="d-flex justify-space-between mb-2">
        <div class="black rounded-lg px-2 py-4 text-center" style="width: 100%">
          <h6>
            AVG Profit
            <v-icon @click="showDetails = !showDetails" small
              >mdi-information</v-icon
            >
          </h6>
          <strong class="green--text"
            ><v-icon color="green" small>mdi-arrow-up</v-icon>98.2%</strong
          >
        </div>
        <div
          class="black rounded-lg mx-2 px-2 py-4 text-center"
          style="width: 100%"
        >
          <h6>
            AVG Loss
            <v-icon @click="showDetails = !showDetails" small
              >mdi-information</v-icon
            >
          </h6>
          <strong class="red--text"
            ><v-icon color="red" small>mdi-arrow-down</v-icon>14.4%</strong
          >
        </div>
        <div class="black rounded-lg px-2 py-4 text-center" style="width: 100%">
          <h6>
            Total Trades
            <v-icon @click="showDetails = !showDetails" small
              >mdi-information</v-icon
            >
          </h6>
          <strong class="white--text">50</strong>
        </div>
      </div>
      <v-row v-if="!showPortfolio" no-gutters>
        <!-- <v-col cols="12" md="6" sm="12">
          <v-chart
            style="width: 95%"
            class="chart text-center"
            :option="option"
          />
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
        </v-col> -->
      </v-row>
    </div>
    <div v-if="showPortfolio">
      <v-card flat class="background" tile>
        <v-card-title v-if="$nuxt.$route.name != 'profile'" class="pb-0">
          <v-btn icon @click="accountsDialog = true">
            <v-icon color="white">mdi-format-align-center</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <div>
            <span style="font-size: 20px">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon color="green" small v-bind="attrs" v-on="on">
                    mdi-chevron-down-circle
                  </v-icon>
                </template>
                <div>
                  <v-chip label small color="black">6091858</v-chip>
                  <v-chip label small color="grey">silver</v-chip>
                  <v-chip label small color="green">live</v-chip>
                </div>
              </v-tooltip>
              Portfolio P/L($)</span
            >
          </div>
          <v-spacer></v-spacer>
          <v-icon @click="dialogWallet = true">mdi-cards</v-icon>
        </v-card-title>
        <v-card-text class="text-center white--text px-0">
          <div class="py-16 circlePortfolio mx-auto mt-5">
            <div v-if="$nuxt.$route.name != 'profile'">
              <div class="d-flex align-center justify-center">
                <v-icon class="" small @click="showMargin = !showMargin"
                  >mdi-arrow-expand</v-icon
                >
                <div class="mx-1">
                  <span class="text-h6">$</span>
                  <strong
                    style="font-size: 24px"
                    :class="isBlur ? 'blur-text' : ''"
                    >9238.31</strong
                  >
                </div>
                <v-icon small @click="isBlur = !isBlur">{{
                  isBlur ? "mdi-eye-off-outline" : "mdi-eye"
                }}</v-icon>
              </div>
            </div>
            <div class="text-center mt-3 green--text">
              <h3 v-if="$nuxt.$route.name == 'profile'" class="white--text">
                Portfolio P/L ( % )
              </h3>
              <span style="font-size: 15px">
                <template v-if="$nuxt.$route.name != 'profile'">P/L</template>
                (<span class="">22.1%</span>)</span
              ><v-icon class="pa-0 mb-1" color="green"
                >mdi-arrow-up-thin</v-icon
              >
            </div>
          </div>
          <div class="text-center mt-5">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn small plain text v-bind="attrs" v-on="on">
                  <v-icon>mdi-chevron-down</v-icon> {{ tab }} Order
                </v-btn>
              </template>
              <v-list class="py-0 secondary" dense>
                <v-list-item
                  :class="`${tab === 'open' ? 'primary' : ''}`"
                  @click="tab = 'open'"
                >
                  <v-list-item-title>Open</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item
                  :class="`${tab === 'pending' ? 'primary' : ''}`"
                  @click="tab = 'pending'"
                >
                  <v-list-item-title>Pending</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item
                  :class="`${tab === 'closed' ? 'primary' : ''}`"
                  @click="tab = 'closed'"
                >
                  <v-list-item-title>History</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-icon size="16" @click="showChart = true"
              >mdi-information-outline</v-icon
            >
          </div>
        </v-card-text>
      </v-card>
      <template v-if="showMargin">
        <v-tabs-items v-model="tab" class="transparent mt-3">
          <v-tab-item value="open">
            <v-list class="pa-0 transparent mb-2">
              <v-list-item style="min-height: 30px">
                <v-list-item-title>Portfolio Balance</v-list-item-title>
                <v-list-item-action-text :class="isBlur ? 'blur-text' : ''"
                  >$00.00</v-list-item-action-text
                >
              </v-list-item>
              <v-list-item style="min-height: 30px">
                <v-list-item-title>Portfolio Equity</v-list-item-title>
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
                <v-list-item-title>Available cash</v-list-item-title>
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
          </v-tab-item>
          <v-tab-item value="pending"></v-tab-item>
        </v-tabs-items>
      </template>
      <v-list two-line class="mx-2 transparent">
        <v-list-item
          class="secondary rounded mb-3 pl-2"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-avatar size="30" class="mr-2">
            <v-img :src="item.src" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title style="cursor: pointer" @click="showClosed"
              >{{ item.name }},
              <span class="primary--text"
                >buy
                <template v-if="$nuxt.$route.name === 'profile'">1%</template>
                <template v-else>500.00</template></span
              ></v-list-item-title
            >
            <v-list-item-subtitle
              ><v-icon
                class="ml-1"
                small
                @click="item.is_open = !item.is_open"
                >{{
                  item.is_open ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon
              >
              30.94
              <v-icon>mdi-arrow-right-thin</v-icon>
              30.15</v-list-item-subtitle
            >
            <template v-if="item.is_open">
              <div v-if="tab == 'closed'">
                2022.01.11 14:18
                <div
                  class="d-flex justify-space-between grey--text"
                  style="font-size: 11px"
                >
                  <div>
                    S/L:
                    <br />
                    Open
                    <br />
                    ID
                  </div>
                  <div>
                    -
                    <br />
                    2021.10.26 16:46:11
                    <br />
                    #84158208
                  </div>
                  <div>T/P:</div>
                  <div>-</div>
                </div>
              </div>
              <div v-else-if="tab == 'pending'">
                2022.01.11 14:18
                <div class="d-flex justify-space-between my-1 mt-3">
                  <div style="width: 50px">S/L:</div>
                  <div style="width: 50px" class="text-center">--</div>
                  <div style="width: 50px">Price</div>
                  <div>0.24000</div>
                </div>
                <v-divider></v-divider>
                <div class="d-flex aling-center justify-space-between my-1">
                  <div style="width: 50px">T/P:</div>
                  <div style="width: 50px" class="text-center">--</div>
                  <div style="width: 50px"></div>
                  <div>#47984</div>
                </div>
              </div>
              <div v-else>
                2022.01.11 14:18
                <div class="d-flex justify-space-between my-1 mt-3">
                  <div>S/L:</div>
                  <div v-if="tab == 'pending'">T/P:</div>
                  <div v-if="tab != 'pending'">Swap</div>
                  <div v-if="tab != 'pending'">0.24$</div>
                </div>
                <v-divider></v-divider>
                <div
                  class="d-flex justify-space-between my-1"
                  v-if="['closed'].includes(tab)"
                >
                  <div>T/P:</div>
                  <div v-if="tab != 'pending'">Commission</div>
                  <div v-if="tab != 'pending'">-0.00$</div>
                </div>
                <v-divider></v-divider>
                <div
                  v-if="tab == 'open'"
                  class="d-flex justify-space-between my-1"
                >
                  <div>T/P:</div>
                  <div>-</div>
                  <div>ID: 47984555</div>
                </div>
                <div
                  v-if="tab == 'pending'"
                  class="d-flex justify-space-between my-1"
                >
                  <div>ID:</div>
                  <div>-</div>
                  <div>#47984555</div>
                </div>
              </div>
            </template>
          </v-list-item-content>
          <v-list-item-action-text v-if="!item.is_open">
            <template v-if="tab == 'pending'">
              <v-btn plain>placed</v-btn>
            </template>
            <template v-else>
              <div class="font-weight-bold">
                <v-chip label small :color="item.color">
                  <template v-if="$nuxt.$route.name === 'profile'">
                    %1
                  </template>
                  <template v-else> ${{ item.amount }} </template>
                </v-chip>
              </div>
              <div
                v-if="$nuxt.$route.name != 'profile'"
                :class="`mt-1 ${item.color}--text`"
                style="font-size: 0.875rem; text-align: left"
              >
                <template v-if="item.color == 'red'">-0.92%</template>
                <template v-else>+1.92%</template>
              </div>
            </template>
          </v-list-item-action-text>
        </v-list-item>
      </v-list>
    </div>
    <div class="mb-5">
      <h4>Investing</h4>
      <h3>$25,143,55</h3>
      <div>
        <span class="green--text"><v-icon color="green" small>mdi-arrow-top-right</v-icon> $1,215.51(4.88%) </span> <span>Past Week</span>
      </div>
      <v-img src="/WhatsApp Image 2022-05-08 at 5.05.21 AM.jpeg"></v-img>
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
              <v-icon small>mdi-alert-box</v-icon> Trading style has changed.
              Part of history is not included in statistics
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
          <p>
            This card shows the user's past performance in a way that is simple
            to understand yet complex in design.
          </p>
          <p>
            The monthly stats calculate the user's change in equity from the
            beginning of the month until the end of the month and offsets any
            deposits/withdrawals. The yearly figures are calculated by
            compounding the monthly gains hroughout the year.
          </p>
          <p>
            Please click here for the full details and the exact formulas used.
          </p>
        </v-card-text>
      </v-card>
    </v-dialog>

    <invest-closed
      v-if="showClosedDialog"
      :dialog="showClosedDialog"
      @close-dialog="showClosedDialog = false"
    />
    <portfolio-dialogs-chart
      v-if="showChart"
      :dialog="showChart"
      @close-dialog="showChart = false"
    />
    <portfolio-dialogs-calendar
      v-if="calendarDialog"
      :dialog="calendarDialog"
      @close-dialog="calendarDialog = false"
    />
    <portfolio-dialogs-wallet
      v-if="dialogWallet"
      :dialog="dialogWallet"
      @close-dialog="dialogWallet = false"
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
import PortfolioDialogsMarginInfo from "../portfolio/dialogs/PortfolioDialogsMarginInfo.vue";
import PortfolioDialogsAccounts from "../portfolio/dialogs/PortfolioDialogsAccounts.vue";
import PortfolioDialogsWallet from "../portfolio/dialogs/PortfolioDialogsWallet.vue";
import PortfolioDialogsCalendar from "../portfolio/dialogs/PortfolioDialogsCalendar.vue";
import PortfolioDialogsChart from "../portfolio/dialogs/PortfolioDialogsChart.vue";
import InvestClosed from "../invest/InvestClosed.vue";
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
  components: {
    VChart,
    PortfolioDialogsMarginInfo,
    PortfolioDialogsAccounts,
    PortfolioDialogsWallet,
    PortfolioDialogsCalendar,
    PortfolioDialogsChart,
    InvestClosed,
  },
  provide: {
    [THEME_KEY]: "dark",
  },
  watch: {
    tab(value) {
      if (value === "closed") {
        this.calendarDialog = true;
      }
    },
  },
  data() {
    return {
      tab: "open",
      showPortfolio: false,
      showClosedDialog: false,
      dialogWallet: false,
      marginInfoDialog: false,
      calendarDialog: false,
      showChart: false,
      showClosedDialog: false,
      accountsDialog: false,
      showDetails: false,
      isBlur: false,
      showMargin: false,
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
      items: [
        {
          name: "Oil",
          color: "green",
          amount: 1555,
          is_open: false,
          src: "/currency/oil.jpg",
        },
        {
          name: "Gold",
          color: "green",
          amount: 1555,
          is_open: false,
          src: "/currency/gold.jpeg",
        },
        {
          name: "Silver",
          color: "red",
          amount: 123,
          is_open: false,
          src: "/currency/silver.jpg",
        },
        {
          name: "FB",
          color: "green",
          amount: 1555,
          is_open: false,
          src: "/currency/fb.png",
        },
        {
          name: "TWTR",
          color: "red",
          amount: 23,
          is_open: false,
          src: "/currency/TWTR.png",
        },
        {
          name: "TSLA",
          color: "red",
          amount: 341,
          is_open: false,
          src: "/currency/tesla--600.png",
        },
        {
          name: "AMZN",
          color: "green",
          amount: 1555,
          is_open: false,
          src: "/opengraph.png",
        },
        {
          name: "Ripple XRP ",
          color: "green",
          amount: 1555,
          is_open: false,
          src: "/currency/symbol-Ripple.jpg",
        },
        {
          name: "BTC",
          color: "red",
          amount: 33,
          is_open: false,
          src: "/currency/1.png",
        },
        {
          name: "SPY. ETF",
          color: "green",
          amount: 1555,
          is_open: false,
          src: "/currency/150x150.png",
        },
      ],
    };
  },
  mounted() {
    if (this.$nuxt.$route.name === "profile") {
      this.showPortfolio = true;
    }
  },
  methods: {
    showClosed() {
      if (this.tab === "open") {
        this.showClosedDialog = true;
      }
    },
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
.circlePortfolio {
  width: 200px;
  border-radius: 100%;
  border-style: solid;
  border-width: 4px;
  border-bottom-color: orange;
  border-left-color: orange;
  border-right-color: cyan;
  border-top-color: green;
}
</style>
