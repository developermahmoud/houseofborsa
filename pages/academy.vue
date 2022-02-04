<template>
  <div>
    <home-slider class="mb-2" />
    <div class="d-flex justify-space-between align-center mb-2">
      <h4>Educational videos</h4>
      <nuxt-link class="text-decoration-none" to="#">Show all</nuxt-link>
    </div>
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
    <v-divider class="mt-7 mb-5"></v-divider>
    <div class="d-flex justify-space-between align-center mb-2">
      <h4>Educational articles</h4>
      <nuxt-link class="text-decoration-none" to="#">Show all</nuxt-link>
    </div>
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
    <v-divider class="mt-7 mb-5"></v-divider>
    <div class="d-flex justify-space-between align-center mb-2">
      <h4>Webinars and Interviews</h4>
      <nuxt-link class="text-decoration-none" to="#">Show all</nuxt-link>
    </div>
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
    <v-divider class="mt-7 mb-5"></v-divider>
    <div class="d-flex justify-space-between align-center mb-2">
      <h4>Webinars are coming</h4>
      <nuxt-link class="text-decoration-none" to="#">Show all</nuxt-link>
    </div>
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
    <v-divider class="mt-7 mb-5"></v-divider>
    <div class="d-flex justify-space-between align-center mb-2">
      <h4>Training and exams</h4>
      <nuxt-link class="text-decoration-none" to="#">Show all</nuxt-link>
    </div>
    <v-slide-group>
      <v-slide-item v-for="(item, i) in exams" :key="i">
        <v-card
          :class="`${item.color} mr-2`"
          width="200"
          falt
          outlined
        >
        <v-card-title>{{ item.title }}</v-card-title>
          <v-responsive class="text-center">
            <v-avatar size="100">
              <v-icon size="80">{{ item.icon }}</v-icon>
            </v-avatar>
          </v-responsive>
          <v-card-text>
            1 Mintue
          </v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
import HomeSlider from '../components/home/HomeSlider.vue';
export default {
  components: { HomeSlider },
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
      exams: [
        {
          title: "What is meant by stock split?",
          icon: "mdi-chart-bar-stacked",
          color: "brown",
        },
        {
          title: "What is meant by stock split?",
          icon: "mdi-aws",
          color: "teal",
        },
        {
          title: "What is meant by stock split?",
          icon: "mdi-chart-timeline-variant-shimmer",
          color: "indigo",
        },
        {
          title: "What is meant by stock split?",
          icon: "mdi-chart-donut",
          color: "lime",
        },
      ],
    };
  },
};
</script>

<style>
</style>