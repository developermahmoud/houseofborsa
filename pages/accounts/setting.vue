<template>
  <div>
    <top title="Account Setting" />
    <v-list class="transparent">
      <v-list-item>
        <v-list-item-title>Change Language</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-chevron-down</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>Change Password</v-list-item-title>
        <v-list-item-icon>
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>2-Step Verification</v-list-item-title>
        <v-list-item-icon>
          Off <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>Passcode & TouchID</v-list-item-title>
        <v-list-item-icon>
           Off <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>Allow custom push notifications</v-list-item-title>
        <v-list-item-icon>
           Off <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>Emails</v-list-item-title>
        <v-list-item-icon>
           Off <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>Dark Mode</v-list-item-title>
        <v-list-item-action class="pr-4">
          <v-switch class="mr-2"></v-switch>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>Private Account</v-list-item-title>
        <v-list-item-action class="pr-4">
          <v-switch class="mr-2"></v-switch>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import Top from "../../components/partials/PartialsTop.vue";
export default {
  components: { Top },
  layout: "internal",
};
</script>

<style>
</style>