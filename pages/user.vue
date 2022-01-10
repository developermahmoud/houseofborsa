<template>
  <div>
    <v-list-item two-line>
      <v-list-item-avatar size="60">
        <v-img src="/avatar.jpg"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title
          >Mahmoud, 24&nbsp;<v-icon small color="blue"
            >mdi-check-decagram</v-icon
          ></v-list-item-title
        >
        <v-list-item-subtitle
          >35 Following, 10000 Followers</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
    <v-img src="/hobcard.jpg" class="rounded-xl mb-3" />
    <v-row no-gutters>
      <v-col cols="6" class="text-center mb-5">
        <div class="bg-card pa-2 rounded-lg">Funding</div>
      </v-col>
      <v-col cols="6" class="text-center mb-5">
        <div class="bg-card pa-2 rounded-lg">Withdrawal</div>
      </v-col>
      <v-col cols="6" class="text-center mb-5">
        <div class="bg-card pa-2 rounded-lg">Internal Transfer</div>
      </v-col>
      <v-col cols="6" class="text-center mb-5">
        <div class="bg-card pa-2 rounded-lg">HÖB Card</div>
      </v-col>
      <v-col cols="6" class="text-center mb-5">
        <div class="bg-card pa-2 rounded-lg">DEMO ACCOUNT</div>
      </v-col>
      <v-col cols="6" class="text-center mb-5">
        <div class="bg-card pa-2 rounded-lg">LIVE ACCOUNT</div>
      </v-col>
    </v-row>
    <div class="bg-card text-center pa-2 rounded-lg">Account hostry</div>
    <v-list class="transparent">
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Settings</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-arrow-right</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-brightness-4</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Dark Mode</v-list-item-title>
        <v-list-item-action class="pr-4">
          <v-switch class="mr-2"></v-switch>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-earth</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Language</v-list-item-title>
        <v-list-item-action>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list dense class="secondary pa-0">
              <v-list-item>
                <v-list-item-title>عربى</v-list-item-title>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-title>English</v-list-item-title>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-title>中文</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {};
</script>

<style></style>