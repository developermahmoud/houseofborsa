<template>
  <div>
    <h4 class="mb-3">Featured Creators</h4>
    <v-slide-group class="mb-5" :show-arrows="false">
      <v-slide-item v-for="n in 15" :key="n">
        <v-card tile class="background mr-2" width="75" falt outlined>
          <v-responsive class="text-center">
            <v-avatar>
              <v-img src="/avatar.jpg" />
            </v-avatar>
          </v-responsive>
          <div class="text-center">Ahmed Ali</div>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    <h4 class="mb-3">Other creators</h4>
    <v-slide-group class="mb-5" :show-arrows="false">
      <v-slide-item v-for="n in 15" :key="n">
        <v-card tile class="background mr-2" width="200" falt outlined>
          <v-img
            class="align-end"
            height="250"
            src="https://i.picsum.photos/id/20/500/300.jpg?hmac=bkIR6-136Q_P9IU1bjU0JeFQlSBRG-FLvaynW1V0pFc"
          >
            <div class="ma-2">
              <v-avatar size="30">
                <v-img src="/avatar.jpg"></v-img>
              </v-avatar>
              <div class="mt-1">
                <v-chip small label style="background-color: rgba(0, 0, 0, 0.5)"
                  >Mahmoud Ahmed <v-icon small>mdi-flag</v-icon></v-chip
                >
              </div>
            </div>
          </v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>
    <h4 class="mb-3">Other creators</h4>
    <v-slide-group class="mb-5" :show-arrows="false">
      <v-slide-item v-for="n in 15" :key="n">
        <v-card tile class="background mr-2" width="200" falt outlined>
          <v-img
            class="align-end"
            height="250"
            src="https://i.picsum.photos/id/20/500/300.jpg?hmac=bkIR6-136Q_P9IU1bjU0JeFQlSBRG-FLvaynW1V0pFc"
          >
            <div class="ma-2">
              <v-avatar size="30">
                <v-img src="/avatar.jpg"></v-img>
              </v-avatar>
              <div class="mt-1">
                <v-chip small label style="background-color: rgba(0, 0, 0, 0.5)"
                  >Mahmoud Ahmed <v-icon small>mdi-flag</v-icon></v-chip
                >
              </div>
            </div>
          </v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>