<template>
  <div>
    <v-app-bar height="70" fixed class="background" flat app>
      <nuxt-link class="text-decoration-none" link to="/support"
        ><v-icon size="20">fa-question-circle</v-icon></nuxt-link
      >
      <v-spacer></v-spacer>
      <div class="text-center">
        <div v-if=" $nuxt.$route.path !== '/user'" class="primary--text">HÓB</div>
        <div style="font-size: 14px">
          <template v-if="$nuxt.$route.path === '/user'"><strong class="body-1">$9238.31</strong></template>
          <template v-else>
            HOUSE OF BÖRSE
            <div style="font-size: 9px">
              LICENSED AND REGULATED by the FCA UK
            </div>
          </template>
        </div>
      </div>
      <v-spacer></v-spacer>
      <nuxt-link class="text-decoration-none" link to="/messages"
        ><v-icon size="18">fa-envelope-open-text</v-icon></nuxt-link
      >
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
