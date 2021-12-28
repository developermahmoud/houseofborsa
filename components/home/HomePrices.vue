<template>
  <div>
    <v-card class="secondary" flat tile>
      <v-card-text class="text-center">
        <v-btn-toggle
          mandatory
          dense
          group
          v-model="toggle_exclusive"
          background-color="transparent"
          color="primary"
        >
          <v-btn rounded small outlined>Forex</v-btn>
          <v-btn rounded small outlined>Indices</v-btn>
          <v-btn rounded small outlined>ETFs</v-btn>
        </v-btn-toggle>
      </v-card-text>
      <v-simple-table class="secondary">
        <template v-slot:default>
          <thead>
            <tr>
              <th>Market</th>
              <th>Bid</th>
              <th>Ask</th>
              <th>Spread</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EURUSD</td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><span class="red--text">0.5</span></td>
            </tr>
            <tr>
              <td>AUDCAD</td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><span class="success--text">0.5</span></td>
            </tr>
            <tr>
              <td>EURGBP</td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><span class="red--text">0.5</span></td>
            </tr>
            <tr>
              <td>CADCHF</td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><span class="success--text">0.5</span></td>
            </tr>
            <tr>
              <td>USDJPY</td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><span class="red--text">0.5</span></td>
            </tr>
            <tr>
              <td>USDNOK</td>
              <td>1.12485</td>
              <td>1.12493</td>
              <td><span class="success--text">10.5</span></td>
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
