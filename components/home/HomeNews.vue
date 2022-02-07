<template>
  <div>
    <div class="mb-3 d-flex justify-space-between align-center">
      <h4 class="text-truncate">Community posts & latest news</h4>
      <nuxt-link to="/" class="text-decoration-none" style="font-size:12px;">Show All</nuxt-link>
    </div>
    <v-slide-group :show-arrows="false">
      <v-slide-item v-for="n in 15" :key="n">
        <v-card tile class="secondary mr-2" width="200" falt outlined>
          <v-img height="150" src="/news/shutterstock_756585199.webp">
            <div class="mt-3 ml-3">
              <v-icon>mdi-lightning-bolt-circle</v-icon> BTC-Stories
            </div>
          </v-img>
          <v-card-title class="body-1">
            Top Economic events of this weeks
          </v-card-title>
          <v-card-text class="grey--text">
            <v-icon size="20" color="grey" class="mr-1"
              >mdi-heart-outline</v-icon
            >
            33
            <v-icon size="20" color="grey" class="mx-1"
              >mdi-comment-outline</v-icon
            >
            2
          </v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    <div class="my-3 d-flex justify-space-between align-center">
      <h4>Traders Ranking | Top</h4>
      <nuxt-link to="/" class="text-decoration-none" style="font-size:12px;">Show All</nuxt-link>
    </div>
    <v-slide-group :show-arrows="false">
      <v-slide-item v-for="n in 15" :key="n">
        <v-card tile class="secondary mr-2" width="220" falt outlined>
          <v-card-title class="justify-center"> FRK technque </v-card-title>
          <v-card-actions class="justify-center align-center">
            <v-icon small class="mr-1">mdi-account-multiple-outline</v-icon> 205
            <v-rating
              v-model="rating"
              background-color="white"
              color="yellow accent-4"
              dense
              half-increments
              hover
              size="20"
            ></v-rating>
          </v-card-actions>
          <v-sparkline
            height="110"
            :fill="fill"
            :gradient="selectedGradient"
            :line-width="width"
            :padding="padding"
            :smooth="radius || false"
            :value="value"
            auto-draw
          ></v-sparkline>
          <v-row>
            <v-col>
              <div class="text-center caption grey--text">Total profit</div>
              <div class="text-center caption green--text">+331.002%</div>
            </v-col>
            <v-col>
              <div class="text-center caption grey--text">Followers equity</div>
              <div>215.252 BTC</div>
              <div class="green--text caption">= 100,714 USD</div>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-btn class="primary" block>Follow</v-btn>
          </v-card-actions>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];
export default {
  data() {
    return {
      fill: true,
      rating: 10,
      selectedGradient: gradients[3],
      gradients,
      padding: 8,
      radius: 10,
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      width: 2,
    };
  },
};
</script>

<style></style>
