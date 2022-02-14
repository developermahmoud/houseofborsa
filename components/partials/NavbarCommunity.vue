<template>
  <div>
    <v-app-bar fixed class="background" flat app>
      <v-app-bar-title class="primary--text">HÓB</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-badge left offset-x="10" offset-y="10" color="red" content="HOT!" class="mr-3" >
        <v-icon @click="$router.push('/contests')" size="20" color="primary">fa-trophy</v-icon>
      </v-badge>
      <v-icon color="">fa-plus-square</v-icon>
      <v-icon class="mx-3">fa-heart</v-icon>
      <v-icon>mdi-facebook-messenger</v-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>