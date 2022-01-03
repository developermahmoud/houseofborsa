<template>
  <div>
    <v-card class="secondary" flat tile>
      <v-card-text class="text-center">
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
              <td>EURUSD</td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><span class="red--text">0.5%</span></td>
            </tr>
            <tr>
              <td>AUDCAD</td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><span class="success--text">0.5%</span></td>
            </tr>
            <tr>
              <td>EURGBP</td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><span class="red--text">0.5%</span></td>
            </tr>
            <tr>
              <td>CADCHF</td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><span class="success--text">0.5%</span></td>
            </tr>
            <tr>
              <td>USDJPY</td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><span class="red--text">0.5%</span></td>
            </tr>
            <tr>
              <td>USDNOK</td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><span class="success--text">10.5%</span></td>
            </tr>
            <tr>
              <td>USDJPY</td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><span class="red--text">0.5%</span></td>
            </tr>
            <tr>
              <td>USDNOK</td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><span class="success--text">10.5%</span></td>
            </tr>
            <tr>
              <td>USDJPY</td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><span class="red--text">0.5%</span></td>
            </tr>
            <tr>
              <td>USDNOK</td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><span class="success--text">10.5%</span></td>
            </tr>
            <tr>
              <td>USDJPY</td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><span class="red--text">0.5%</span></td>
            </tr>
            <tr>
              <td>USDNOK</td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><span class="success--text">10.5%</span></td>
            </tr>
            <tr>
              <td>USDJPY</td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><span class="red--text">0.5%</span></td>
            </tr>
            <tr>
              <td>USDNOK</td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><span class="success--text">10.5%</span></td>
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
