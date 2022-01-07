<template>
  <div>
    <v-card class="secondary" flat tile>
      <v-card-text class="text-center">
        <v-text-field outlined prepend-inner-icon="mdi-magnify" placeholder="Search Coin Pairs" dense filled></v-text-field>
        <v-slide-group mandatory v-model="toggle_exclusive">
          <v-slide-item class="mr-2" v-slot="{ active, toggle }">
            <v-btn
              :input-value="active"
              active-class="primary"
              @click="toggle"
              small
              outlined
              >Favorites
            </v-btn>
          </v-slide-item>
          <v-slide-item class="mr-2" v-slot="{ active, toggle }">
            <v-btn
              :input-value="active"
              active-class="primary"
              @click="toggle"
              small
              outlined
              >Stock
            </v-btn>
          </v-slide-item>
          <v-slide-item class="mr-2" v-slot="{ active, toggle }">
            <v-btn
              :input-value="active"
              active-class="primary"
              @click="toggle"
              small
              outlined
              >ETFs
            </v-btn>
          </v-slide-item>
          <v-slide-item class="mr-2" v-slot="{ active, toggle }">
            <v-btn
              :input-value="active"
              active-class="primary"
              @click="toggle"
              small
              outlined
              >Cryptocurrency
            </v-btn>
          </v-slide-item>
          <v-slide-item class="mr-2" v-slot="{ active, toggle }">
            <v-btn
              :input-value="active"
              active-class="primary"
              @click="toggle"
              small
              outlined
              >Indices
            </v-btn>
          </v-slide-item>
          <v-slide-item class="mr-2" v-slot="{ active, toggle }">
            <v-btn
              :input-value="active"
              active-class="primary"
              @click="toggle"
              small
              outlined
              >Oil
            </v-btn>
          </v-slide-item>
          <v-slide-item class="mr-2" v-slot="{ active, toggle }">
            <v-btn
              :input-value="active"
              active-class="primary"
              @click="toggle"
              small
              outlined
              >Forex
            </v-btn>
          </v-slide-item>
          <v-slide-item class="mr-2" v-slot="{ active, toggle }">
            <v-btn
              :input-value="active"
              active-class="primary"
              @click="toggle"
              small
              outlined
              >Futures
            </v-btn>
          </v-slide-item>
        </v-slide-group>
      </v-card-text>
      <v-simple-table class="secondary">
        <template v-slot:default>
          <thead>
            <tr>
              <th>Market</th>
              <th>Sell</th>
              <th>Buy</th>
              <th>Change%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex">
                  <img
                    src="/currency/1.png"
                    style="width: 18px; height: 18px"
                    class="mr-2"
                  /><span>BTC</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Bitcoin vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><v-chip label small style="width:57px;" class="red">0.5%</v-chip></td>
            </tr>
            <tr>
              <td>
                <div class="d-flex">
                  <img
                    src="/currency/2.png"
                    style="width: 18px; height: 18px"
                    class="mr-2 rounded-circle"
                  /><span>XAU/USD</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Gold vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><v-chip label small class="green">10.5%</v-chip></td>
            </tr>
            <tr>
              <td>
                <div class="d-flex">
                  <img
                    src="/currency/3.png"
                    style="width: 18px; height: 18px"
                    class="mr-2 rounded-circle"
                  /><span>SOL</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Solana Token vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><v-chip label small style="width:57px;" class="red">0.5%</v-chip></td>
            </tr>
            <tr>
              <td>
                <div class="d-flex">
                  <img
                    src="/currency/4.jpg"
                    style="width: 18px; height: 18px"
                    class="mr-2 rounded-circle"
                  /><span>AAPL</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Apple inc.
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><v-chip label small class="green">10.5%</v-chip></td>
            </tr>
            <tr>
              <td>
                <div class="d-flex">
                  <img
                    src="/currency/4.png"
                    style="width: 18px; height: 18px"
                    class="mr-2 rounded-circle"
                  /><span>EUR/USD</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Euro vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><v-chip label small style="width:57px;" class="red">0.5%</v-chip></td>
            </tr>
            <tr>
              <td>
                <div class="d-flex">
                  <img
                    src="/currency/1.png"
                    style="width: 18px; height: 18px"
                    class="mr-2"
                  /><span>ETH</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Ethereum vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><v-chip label small class="green">10.5%</v-chip></td>
            </tr>
            <tr>
              <td>
                <div class="d-flex">
                  <img
                    src="/currency/1.png"
                    style="width: 18px; height: 18px"
                    class="mr-2"
                  /><span>BTC</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Bitcoin vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><v-chip label small style="width:57px;" class="red">0.5%</v-chip></td>
            </tr>
            <tr>
              <td>
                <div class="d-flex">
                  <img
                    src="/currency/1.png"
                    style="width: 18px; height: 18px"
                    class="mr-2"
                  /><span>BTC</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Bitcoin vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><v-chip label small class="green">10.5%</v-chip></td>
            </tr>
            <tr>
              <td>
                <div class="d-flex">
                  <img
                    src="/currency/1.png"
                    style="width: 18px; height: 18px"
                    class="mr-2"
                  /><span>BTC</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Bitcoin vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><v-chip label small class="red">0.5%</v-chip></td>
            </tr>
            <tr>
              <td>
                <div class="d-flex">
                  <img
                    src="/currency/1.png"
                    style="width: 18px; height: 18px"
                    class="mr-2"
                  /><span>BTC</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Bitcoin vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><v-chip label small class="green">10.5%</v-chip></td>
            </tr>
            <tr>
              <td>
                <div class="d-flex">
                  <img
                    src="/currency/1.png"
                    style="width: 18px; height: 18px"
                    class="mr-2"
                  /><span>BTC</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Bitcoin vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><v-chip label small style="width:57px;" class="red">0.5%</v-chip></td>
            </tr>
            <tr>
              <td>
                <div class="d-flex">
                  <img
                    src="/currency/1.png"
                    style="width: 18px; height: 18px"
                    class="mr-2"
                  /><span>BTC</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Bitcoin vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><v-chip label small class="green">10.5%</v-chip></td>
            </tr>
            <tr>
              <td>
                <div class="d-flex">
                  <img
                    src="/currency/1.png"
                    style="width: 18px; height: 18px"
                    class="mr-2"
                  /><span>BTC</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Bitcoin vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><v-chip label small style="width:57px;" class="red">0.5%</v-chip></td>
            </tr>
            <tr>
              <td>
                <div class="d-flex">
                  <img
                    src="/currency/1.png"
                    style="width: 18px; height: 18px"
                    class="mr-2"
                  /><span>BTC</span>
                </div>
                <div class="grey--text" style="font-size: 12px; width: 140px">
                  Bitcoin vs US Dollar
                </div>
              </td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><v-chip label small class="green">10.5%</v-chip></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle_exclusive: null,
    };
  },
};
</script>

<style></style>
