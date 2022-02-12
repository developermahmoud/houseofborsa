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
          <iframe
            width="100%"
            height="200"
            :src="item.src"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
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
    <div class="d-flex justify-space-between align-center mb-2 mt-7">
      <h4>Educational articles</h4>
      <nuxt-link class="text-decoration-none" to="#">Show all</nuxt-link>
    </div>
    <v-slide-group>
      <v-slide-item v-for="(item, i) in exams" :key="i">
        <v-card
          :class="`${item.color} mr-2`"
          width="200"
          falt
          outlined
          link
          to="/articles"
        >
          <v-card-title>{{ item.title }}</v-card-title>
          <v-responsive class="text-center">
            <v-avatar size="100">
              <v-icon size="80">{{ item.icon }}</v-icon>
            </v-avatar>
          </v-responsive>
          <v-card-text> 1 Mintue </v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    <div class="d-flex justify-space-between align-center mb-2 mt-7">
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
    <div class="d-flex justify-space-between align-center mb-2 mt-7">
      <h4>Webinars are coming</h4>
      <nuxt-link class="text-decoration-none" to="#">Show all</nuxt-link>
    </div>
    <v-slide-group>
      <v-slide-item v-for="item in webinars" :key="item">
        <img style="width: 200px" class="mr-2" :src="item" />
      </v-slide-item>
    </v-slide-group>
    <div class="d-flex justify-space-between align-center mb-2 mt-7">
      <h4>Training and exams</h4>
    </div>
    <v-card class="mb-5 secondary" flat rounded>
      <v-card-title>Academy</v-card-title>
      <v-card-text class="pb-0"
        >Learn on-th-go: question taht keep you sharp and help you get an
        edge</v-card-text
      >
      <v-card-actions>
        <img style="width: 70px" src="/cov-yield.875d03a81a9cb1ce.png" />
        <v-spacer></v-spacer>
        <v-btn text small class="primary">start earning</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import HomeSlider from "../components/home/HomeSlider.vue";
export default {
  components: { HomeSlider },
  data() {
    return {
      firstCatgegories: [
        {
          name: "MT5 multi asset HoB",
          type: "Financial & BTC",
          src: "https://www.youtube.com/embed/heEXtQaWK-Q",
        },
        {
          name: "MT5 multi asset HoB",
          type: "Financial & BTC",
          src: "https://www.youtube.com/embed/heEXtQaWK-Q",
        },
        {
          name: "MT5 multi asset HoB",
          type: "Financial & BTC",
          src: "https://www.youtube.com/embed/heEXtQaWK-Q",
        },
        {
          name: "MT5 multi asset HoB",
          type: "Financial & BTC",
          src: "https://www.youtube.com/embed/heEXtQaWK-Q",
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
      webinars: [
        "/webinar/1.jpeg",
        "/webinar/2.jpeg",
        "/webinar/3.jpeg",
        "/webinar/4.jpeg",
        "/webinar/5.jpeg",
        "/webinar/6.jpeg",
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