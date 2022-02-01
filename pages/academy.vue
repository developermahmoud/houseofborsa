<template>
  <div>
    <h3 class="mb-2">Top selling movies</h3>
    <v-slide-group :show-arrows="false">
      <v-slide-item v-for="(item, i) in firstCatgegories" :key="i">
        <v-card class="secondary mr-2" width="200" falt outlined>
          <v-img :src="item.src" />
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-subtitle>{{ item.type }}</v-card-subtitle>
          <v-card-text>
            <div class="d-flex justify-space-between">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text">15.5$</div>
            </div>
          </v-card-text>
        </v-card>
      </v-slide-item></v-slide-group
    >
    <h4 class="mt-5">Copy Trader</h4>
    <div class="grey--text mb-3">Mirror the protfolio of top investors</div>
    <v-slide-group>
      <v-slide-item v-for="i in 10" :key="i">
        <v-card class="secondary mr-2" width="200" falt outlined>
          <v-img
            class="white--text align-end"
            height="200px"
            src="/courses/1.jpg"
          >
            <v-card-title>HLadislave</v-card-title>
            <v-card-subtitle class="green--text pb-0">69.33%</v-card-subtitle>
            <span class="ml-4 grey--text caption">RETURN (12M)</span>
          </v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    <h4 class="mt-5">Trending Assets</h4>
    <div class="grey--text mb-3">Assets among our investors right now</div>
    <v-slide-group>
      <v-slide-item v-for="(item, i) in colors" :key="i">
        <v-card
          :class="`${item.color} mr-2`"
          width="200"
          falt
          outlined
          class="text-center"
        >
          <v-responsive class="mt-5">
            <v-avatar size="100">
              <v-icon size="80">{{ item.icon }}</v-icon>
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <h3>TT</h3>
            <h3>173.25</h3>
            <strong>+1.25%</strong>
          </v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstCatgegories: [
        {
          name: "Venom: Let There Be carnage",
          type: "action & adventure",
          src: "/movies/1.webp",
        },
        {
          name: "Venom: Let There Be carnage",
          type: "action & adventure",
          src: "/movies/2.webp",
        },
        {
          name: "Venom: Let There Be carnage",
          type: "action & adventure",
          src: "/movies/3.webp",
        },
        {
          name: "Venom: Let There Be carnage",
          type: "action & adventure",
          src: "/movies/4.webp",
        },
      ],
      colors: [
        {
          icon: "mdi-facebook",
          color: "blue",
        },
        {
          icon: "mdi-whatsapp",
          color: "green",
        },
        {
          icon: "mdi-twitter",
          color: "cyan",
        },
        {
          icon: "mdi-youtube",
          color: "red",
        },
      ],
    };
  },
};
</script>

<style>
</style>