<template>
  <div>
    <top title="Premium" />
    <div class="text-center">
      <v-progress-circular
        :rotate="360"
        :size="100"
        :width="15"
        :value="value"
        color="primary"
      >
        {{ value }}
      </v-progress-circular>
      <h4 class="text-center my-5">Stock analysis & reports</h4>
      <div class="mx-2 text-center">
        <p class="grey--text">
          Get access to detailed stock analysis and reports from Refinitiv with
          analyst estimates on share price movement
        </p>
        <v-btn block @click="firstStep = true" text class="primary my-5"
          >Try Premium for free</v-btn
        >
        <nuxt-link to="/user" class="text-decoration-none white--text"
          >No, Thank</nuxt-link
        >
      </div>
    </div>
    <v-bottom-sheet v-model="firstStep">
      <v-sheet class="secondary">
        <div class="pa-3">
          <h2>Free 7-day trial</h2>
          <p class="grey--text">Cancel the trial anytime before day 7</p>
          <v-timeline clipped dense>
            <v-timeline-item color="primary" small fill-dot>
              <v-list-item class="">
                <v-list-item-content>
                  <v-list-item-title>Today</v-list-item-title>
                  <v-list-item-subtitle
                    >Unlock all the paid<br />fetatures for
                    free</v-list-item-subtitle
                  >
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-lock</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-timeline-item>
            <v-timeline-item color="background" small fill-dot>
              <v-list-item class="">
                <v-list-item-content>
                  <v-list-item-title>Day 7</v-list-item-title>
                  <v-list-item-subtitle
                    >We will charge you the<br />subscribtion
                    amount</v-list-item-subtitle
                  >
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-database</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-timeline-item>
          </v-timeline>
          <div class="mx-2">
            <v-btn
              class="primary"
              block
              text
              @click="
                firstStep = false;
                secondStep = true;
              "
            >
              Select Plan
            </v-btn>
          </div>
        </div>
      </v-sheet>
    </v-bottom-sheet>
    <v-bottom-sheet v-model="secondStep">
      <v-sheet class="secondary">
        <div class="pa-3">
          <h2>Subscription</h2>
          <p class="grey--text">
            Select an option and start your 7-day free trial
          </p>
          <v-row class="my-5">
            <v-col>
              <v-card
                class="background pb-3"
                style="border: solid 1px green !important"
                flat
              >
                <v-card-title>Yearly</v-card-title>
                <v-card-subtitle class="pb-1 text-decoration-line-through"
                  >AED99.00</v-card-subtitle
                >
                <h4 class="ml-4">AED369.99</h4>
                <span class="grey--text ml-4 caption">AED8.25/month</span>
                <br />
                <span class="ml-4">Billed yearly</span>
              </v-card>
            </v-col>
            <v-col>
              <v-card flat class="secondary">
                <v-card-title class="pb-0">Monthly</v-card-title>
                  <h4 class="ml-4">AED9.9</h4>
                  <span class="ml-4">Billed Monthly</span>
              </v-card>
            </v-col>
          </v-row>
          <strong>What's included</strong>
          <ul>
            <li>Refinitiv stock analysis + reports</li>
            <li>Investment Themes</li>
          </ul>
          <div class="text-center caption my-5">
            By continuing, you agree on our<br />
            <nuxt-link to="/">Terms & Conditions</nuxt-link> and
            <nuxt-link to="/">Privacy Policy</nuxt-link>
          </div>
          <div class="mx-2">
            <v-btn class="primary" block text @click="secondStep = false">
              Select Plan
            </v-btn>
          </div>
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
import Top from "../../components/partials/Top.vue";
export default {
  components: { Top },
  layout: "internal",
  data() {
    return {
      firstStep: false,
      secondStep: false,
      interval: {},
      value: 0,
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  },
};
</script>

<style scoped>
</style>