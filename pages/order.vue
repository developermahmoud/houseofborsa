<template>
  <div>
    <v-card flat class="background">
      <v-card-title class="justify-center">
        {{$route.query.page === 'invest' ? 'Open': 'Close'}}  Position
      </v-card-title>
      <v-card-text class="text-center">
        <v-responsive class="mt-10">
          <v-avatar size="100" color="green">
            <v-icon x-large>mdi-file-check-outline</v-icon>
          </v-avatar>
          <h2 class="my-5">Done</h2>
          <div class="grey--text">
            <strong class="red--text">SELL</strong> 50.00 / 50.00<br />
            Ripple at market<br />
            #89654788
          </div>
        </v-responsive>
      </v-card-text>
      
    </v-card>
    <v-btn block absolute bottom center plain @click="$router.push(`/${$route.query.page}`)"
        >Close</v-btn
      >
  </div>
</template>

<script>
export default {
  layout: 'order'
};
</script>

<style>
</style>