<template>
  <div>
       <h3 class="mb-5">Latest Market News</h3>
    <v-slide-group :show-arrows="false">
      <v-slide-item v-for="n in 15" :key="n">
        <v-card class="secondary mr-5" width="250" falt outlined>
          <v-img height="200" src="/news/1.jpg" />
          <v-card-title class="subtitle-2"
            >Tata Motors to Hike Prices of CVs by 2.5% From Jan</v-card-title
          >
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
            ><span class="ml-2 caption grey--text"
              >December 6, 2021</span
            ></v-card-actions
          >
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>