<template>
  <div>
    <top title="Trading Accounts" />
    <v-container>
      <h3 class="primary--text">Trading Account Types</h3>
      <p>
        House of Borse offers a number of different accounts to cater for
        different types of traders. So whatever your trading strategy, level of
        funding or appetite for risk, from micro to unlimited trade sizes, there
        is an account to match your needs.
      </p>
      <v-alert class="info">
        House of Borse offers three different levels of account – Silver, Gold
        and Platinum. The type of account is dependent on volume. We like to
        reward loyalty – so the more you trade the more you save! See our FX
        rates are below.
      </v-alert>
      <v-card
        class="secondary mb-5 v-shadow"
        flat
        v-for="(plan, i) in plans"
        :key="i"
      >
        <v-card-title
          class="justify-center"
          :style="`background:${plan.titleBg}`"
          >{{ plan.title }}</v-card-title
        >
        <v-card-text class="text-center mt-5">
          <div class="d-flex align-center justify-center">
            <strong class="display-3 primary--text">{{ plan.number }}</strong>
            <div
              class="white--text"
              style="font-size: 20px"
              v-html="plan.numberTitle"
            ></div>
          </div>
          <div class="body-1">TRADE PER MONTH</div>
          <div class="my-5">
            <div class="d-flex justify-space-between white--text">
              <div>
                <h1 class="primary--text">$5</h1>
                <div class="font-weight-bold mt-2">COMMISSION</div>
              </div>
              <div>
                <h1 class="primary--text">14%</h1>
                <div class="font-weight-bold mt-2">LOWER</div>
              </div>
            </div>
          </div>
          <div class="body-1">PER USD 100K TRADED</div>
        </v-card-text>
        <v-card-actions
          class="justify-center display-1"
          :style="`background:${plan.titleBg}`"
        >
          JOIN
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Top from "../../components/partials/Top.vue";
export default {
  components: { Top },
  layout: "internal",
  data() {
    return {
      plans: [
        {
          title: "SILVER TRADER",
          titleBg: "#b4b1b3",
          number: "100",
          numberTitle: "Less Than<br />Million",
        },
        {
          title: "GOLD TRADER",
          titleBg: "#b2a579",
          number: "1",
          numberTitle: "Up To<br />YARD",
        },
        {
          title: "PLATINUM TRADER",
          titleBg: "#3d3d3d",
          number: "1",
          numberTitle: "More Than<br />YARD",
        },
      ],
    };
  },
};
</script>

<style>
</style>