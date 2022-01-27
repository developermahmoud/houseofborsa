<template>
  <div>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card class="secondary">
        <v-toolbar flat class="secondary">
          <v-btn icon @click="$emit('close-dialog')">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-toolbar-title class="ml-2">Mahmoud Ahmed</v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-tabs
          fixed-tabs
          right
          active-class="secondary"
          background-color="secondary"
          class="mb-5"
        >
          <v-tab>Following</v-tab>
          <v-tab>Followers</v-tab>
          <v-tabs-slider color="primary"></v-tabs-slider>
        </v-tabs>
        <v-list class="transparent">
          <v-list-item>
            <v-list-item-avatar size="30">
              <v-img src="/avatar.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-title
              >Mahmoud
              <v-chip x-small color="blue"
                >Pro+</v-chip
              ></v-list-item-title
            >
            <v-list-item-action-text>
              <v-btn  x-small outlined>Following</v-btn>
            </v-list-item-action-text>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-avatar size="30">
              <v-img src="/avatar.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-title
              >Mahmoud
              <v-chip x-small color="primary"
                >Platinum</v-chip
              ></v-list-item-title
            >
            <v-list-item-action-text>
              <v-btn  x-small outlined>Following</v-btn>
            </v-list-item-action-text>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-avatar size="30">
              <v-img src="/avatar.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-title
              >Mahmoud
              <v-chip x-small color="primary"
                >Platinum</v-chip
              ></v-list-item-title
            >
            <v-list-item-action-text>
              <v-btn x-small outlined>Following</v-btn>
            </v-list-item-action-text>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialog: {
      required: true,
      type: Boolean,
    },
  },
};
</script>

<style>
</style>