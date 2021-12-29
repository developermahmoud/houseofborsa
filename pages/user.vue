<template>
  <div>
    <v-card class="text-center transparent" flat>
      <v-responsive>
        <v-avatar size="100">
          <v-img src="/avatar.jpg"></v-img>
        </v-avatar>
      </v-responsive>
      <v-card-title class="justify-center">Mahmoud, 24</v-card-title>
      <v-card-subtitle>Fullstack web developer</v-card-subtitle>
      <v-img src="/hobcard.jpg" class="rounded-xl mx-4" />
      <v-card-text>
        <v-row>
          <v-col cols="3" class="text-center">
            <div class="bg-card mb-2 pa-2 rounded-xl">
              <v-icon>mdi-arrow-up-thin</v-icon>
            </div>
            Sent
          </v-col>
          <v-col cols="3" class="text-center">
            <div class="bg-card mb-2 pa-2 rounded-xl">
              <v-icon>mdi-arrow-down-thin</v-icon>
            </div>
            Receive
          </v-col>
          <v-col cols="3" class="text-center">
            <div class="bg-card mb-2 pa-2 rounded-xl">
              <v-icon>mdi-currency-usd</v-icon>
            </div>
            Loan
          </v-col>
          <v-col cols="3" class="text-center">
            <div class="bg-card mb-2 pa-2 rounded-xl">
              <v-icon>mdi-cloud-upload-outline</v-icon>
            </div>
            Topup
          </v-col>
        </v-row>
        <v-row no-gutters class="mt-10">
          <v-col cols="6">
            <div class="bg-card pa-2 rounded-lg">DEMO ACCOUNT</div>
          </v-col>
          <v-col cols="6">
            <div class="bg-card pa-2 rounded-xl">LIVE ACCOUNT</div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
