<template>
  <div>
    <h3 class="mb-3">Latest Community Feed</h3>
    <v-slide-group :show-arrows="false">
      <v-slide-item v-for="n in 15" :key="n">
        <v-card tile class="secondary mr-2" width="200" falt outlined>
          <v-img height="150" src="/news/1.jpg" />
          <div class="ml-4 mt-2 font-weight-bold text-truncate">
            Tata Motors to Hike Prices of CVs
          </div>
          <v-card-text>
            <p>Tata Motors to hike prices of CVs by 2.5% from</p>
            <nuxt-link
              class="text-uppercase white--text text-decoration-none"
              to="/"
              >Read More »</nuxt-link
            >
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions
            ><span class="ml-2 caption primary--text"
              >December 6, 2021</span
            ></v-card-actions
          >
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
