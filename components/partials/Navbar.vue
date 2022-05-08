<template>
  <div>
    <v-app-bar fixed class="background" flat app>
      <nuxt-link class="text-decoration-none" link to="/support"
        ><v-icon size="20">fa-question-circle</v-icon></nuxt-link
      >
      <v-spacer></v-spacer>
      <div class="text-center">
        <div class="primary--text">HÓB</div>
        <div style="font-size:14px;">
        <template v-if=" $nuxt.$route.path === '/user'">$9238.31</template>
        <template v-else>HOUSE OF BÖRSE</template>
        </div>
       
      </div>
      <v-spacer></v-spacer>
      <nuxt-link class="text-decoration-none" link to="/messages"
        ><v-icon size="18">fa-envelope-open-text</v-icon></nuxt-link>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
