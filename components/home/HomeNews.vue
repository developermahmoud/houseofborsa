<template>
  <div>
    <div class="mb-3 d-flex justify-space-between align-center">
      <h4 class="text-truncate">Community posts & latest news</h4>
      <nuxt-link to="/" class="text-decoration-none" style="font-size: 12px"
        >Show All</nuxt-link
      >
    </div>
    <v-slide-group :show-arrows="false">
      <v-slide-item v-for="n in 15" :key="n">
        <v-card tile class="secondary mr-2" width="200" falt outlined>
          <v-img height="150" src="/news/shutterstock_756585199.webp">
            <div class="mt-3 ml-3" style="cursor: pointer;" @click="$router.push('/profile')">
              <v-avatar size="26">
                <img src="/avatar.jpg" alt="John" />
              </v-avatar>
              BTC-Stories
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
    <!-- <div class="mb-3 my-5 d-flex justify-space-between align-center">
      <h4 class="text-truncate">Traders Ranking | Top</h4>
      <nuxt-link
        to="/traders-ranking"
        class="text-decoration-none"
        style="font-size: 12px"
        >Show All</nuxt-link
      >
    </div>
    <v-slide-group class="mb-5" :show-arrows="false">
      <v-slide-item v-for="n in 15" :key="n">
        <v-card tile class="secondary mr-2" width="230" falt outlined>
          <v-list-item link to="/profile">
            <v-list-item-action class="mr-4">
              <v-badge overlap bottom offset-y="19" color="transparent" right>
                <template v-slot:badge>
                  <v-icon size="30" color="amber">mdi-star</v-icon>
                </template>
                <v-avatar tile size="40">
                  <v-img src="/avatar.jpg"></v-img>
                </v-avatar>
              </v-badge>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Jean-marclenfa</v-list-item-title>
              <v-list-item-subtitle
                ><v-icon small>mdi-flag</v-icon> USA</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-card-text>
            <div class="d-flex justify-space-between align-center">
              <div>
                <div>
                  <v-icon small color="green">mdi-arrow-up</v-icon
                  ><strong class="green--text title">5.71%</strong>
                </div>
                <div>RETURN</div>
                <div>(LAST 12M)</div>
              </div>
              <div class="text-center">
                <v-icon>mdi-account-arrow-left-outline</v-icon>
                <div class="text-center">1,1005</div>
              </div>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <div class="d-flex justify-space-between">
              <div>
                <div class="text--grey">Followers equity</div>
                <div class="green--text">215.252%</div>
              </div>
              <v-btn class="background"><v-icon>mdi-plus</v-icon></v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group> -->
    <!-- <div class="my-3 d-flex justify-space-between align-center">
      <h4>Traders Ranking | Top</h4>
      <nuxt-link to="/" class="text-decoration-none" style="font-size: 12px"
        >Show All</nuxt-link
      >
    </div>
    <v-slide-group :show-arrows="false">
      <v-slide-item v-for="n in 15" :key="n">
        <v-card tile class="secondary mr-2" width="200" falt outlined>
          <v-card-title>
            <v-avatar size="26" class="mr-1">
              <img src="/avatar.jpg" alt="John" />
            </v-avatar>
            FRK technque
          </v-card-title>
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
          <v-row no-gutters>
            <v-col>
              <div class="caption grey--text">Total profit</div>
              <div class="caption green--text">+331.002%</div>
            </v-col>
            <v-col>
              <div class="text-center caption grey--text">Followers equity</div>
              <div class="caption">215.252 BTC</div>
              <div class="green--text caption">= 100,714 USD</div>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-btn class="primary" block>Follow</v-btn>
          </v-card-actions>
        </v-card>
      </v-slide-item>
    </v-slide-group> -->
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
