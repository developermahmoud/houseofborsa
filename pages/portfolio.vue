<template>
  <div>
    <v-card flat class="background" tile>
      <v-card-title class="pb-0">
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
        <v-icon @click="dialog = true">mdi-cards</v-icon>
      </v-card-title>
      <v-card-text class="text-center white--text px-0">
        <div class="py-15 circlePortfolio mx-auto mt-5">
          <div>
            <div class="d-flex align-center justify-center">
              <v-icon class="" small @click="showMargin = !showMargin"
              >mdi-arrow-expand</v-icon
              >
              <div class="mx-1">
                <span class="text-h6">$</span>
                <strong style="font-size: 24px" :class="isBlur ? 'blur-text' : ''"
                >9238.31</strong
                >
              </div>
              <v-icon small @click="isBlur = !isBlur">{{
                  isBlur ? "mdi-eye-off-outline" : "mdi-eye"
                }}</v-icon>
            </div>
          </div>
          <div class="text-center mt-3 green--text">
            <span style="font-size:12px;"> P/L(<span class="">22.1%</span>)</span
            ><v-icon class="pa-0 mb-1" color="green">mdi-arrow-up-thin</v-icon>
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
          </v-menu>  <v-icon size="16" @click="showChart = true">mdi-information-outline</v-icon>
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
            <span class="primary--text">buy 500.00</span></v-list-item-title
          >
          <v-list-item-subtitle
            ><v-icon class="ml-1" small @click="item.is_open = !item.is_open">{{
              item.is_open ? "mdi-chevron-up" : "mdi-chevron-down"
            }}</v-icon>
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
                <div>
                  T/P:
                  <br />
                  Swap:
                  <br />
                  Commission:
                </div>
                <div>
                  -
                  <br />
                  0.00
                  <br />
                  -3.50
                </div>
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
            <v-btn plain>placed</v-btn> <v-icon icon color="red" @click="items.splice(item, 1)">mdi-delete</v-icon>
          </template>
          <template v-else>
            <div class="font-weight-bold">
              <v-chip label small :color="item.color" style="width: 60px"
                >${{ item.amount }}</v-chip
              >
            </div>
            <div
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
import PortfolioDialogsMarginInfo from "../components/portfolio/dialogs/PortfolioDialogsMarginInfo.vue";
import PortfolioDialogsAccounts from "../components/portfolio/dialogs/PortfolioDialogsAccounts.vue";
import PortfolioDialogsWallet from "../components/portfolio/dialogs/PortfolioDialogsWallet.vue";
import PortfolioDialogsCalendar from "../components/portfolio/dialogs/PortfolioDialogsCalendar.vue";
import PortfolioDialogsChart from "../components/portfolio/dialogs/PortfolioDialogsChart.vue";

export default {
  layout: "internal",
  components: {
    PortfolioDialogsMarginInfo,
    PortfolioDialogsAccounts,
    PortfolioDialogsWallet,
    PortfolioDialogsCalendar,
    PortfolioDialogsChart,
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
      items: [
        {
          name: "Oil",
          color: "green",
          amount: 1555,
          is_open: false,
          src:"/currency/oil.jpg",
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
      tab: "open",
      showMargin: false,
      showClosedDialog: false,
      isBlur: false,
      showChart: false,
      marginInfoDialog: false,
      toggle_exclusive: null,
      calendarDialog: false,
      dialog: false,
      accountsDialog: false,
    };
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
.circlePortfolio {
  width:200px;
  border-radius: 100%;
  border-style: solid;
  border-width: 4px;
  border-bottom-color: orange;
  border-left-color: orange;
  border-right-color: cyan;
  border-top-color: green;
}
</style>
