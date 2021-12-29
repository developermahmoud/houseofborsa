<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>My Wallet</v-list-item-title>
        <v-list-item-subtitle>$42.8 (+2.1%) <v-icon color="green">mdi-arrow-up-thin</v-icon></v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn plain color="cyan">Add COIN</v-btn>
      </v-list-item-action>
    </v-list-item>
    <v-list class="pa-0 transparent">
      <v-list-item class="secondary rounded mb-3" v-for="i in 5" :key="i">
        <v-list-item-avatar>
          <v-img
            src="https://cdn.litemarkets.com/cache/uploads/blog_post/blog_posts/BTC_Price_Analysis/Bitcoin-Price-Prediction.jpg?q=75&w=1000&s=6c20e77623d5230b4c2fdd5d461b9feb"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>BTC</v-list-item-title>
          <v-list-item-subtitle>$ 845</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action style="width: 80px">
          <v-sparkline
            :value="value"
            color="rgba(255, 255, 255, .7)"
            width="150"
            height="80"
            stroke-linecap="round"
            smooth
          >
            <template v-slot:label="item"> ${{ item.value }} </template>
          </v-sparkline>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [423, 446, 675, 510, 590, 610, 760],
    };
  },
};
</script>

<style></style>
