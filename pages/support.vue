<template>
  <div>
    <top title="Support" />
    <h3 class="ml-3 mb-5">Chat and Contact</h3>
    <v-row no-gutters>
      <v-col
        class="text-center mb-3"
        cols="3"
        v-for="(contact, i) in contacts"
        :key="i"
      >
        <v-icon size="20" color="primary" v-text="contact.icon"></v-icon>
        <br />
        <span style="font-size: 11px">{{ contact.text }}</span>
      </v-col>
    </v-row>
    <h3 class="ml-3 mb-5">Help</h3>
    <v-row no-gutters>
      <v-col
        class="text-center mb-3"
        cols="3"
        v-for="(item, i) in helps"
        :key="i"
      >
        <v-icon size="20" color="primary" v-text="item.icon"></v-icon>
        <br />
        <span style="font-size: 11px">{{ item.text }}</span>
      </v-col>
    </v-row>
    <h3 class="ml-3 mb-5">HOB Academy</h3>
    <v-row no-gutters>
      <v-col
        class="text-center mb-3"
        cols="3"
        v-for="(item, i) in helps"
        :key="i"
      >
        <v-icon size="20" color="primary" v-text="item.icon"></v-icon>
        <br />
        <span style="font-size: 11px">{{ item.text }}</span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Top from "../components/partials/Top.vue";
export default {
  components: { Top },
  layout: "internal",
  data() {
    return {
      contacts: [
        {
          icon: "mdi-whatsapp",
          text: "Whatsapp",
        },
        {
          icon: "mdi-cellphone",
          text: "Mobile",
        },
        {
          icon: "mdi-email",
          text: "Email",
        },
        {
          icon: "mdi-chat-outline",
          text: "Chat",
        },
        {
          icon: "mdi-twitter",
          text: "Twitter",
        },
        {
          icon: "mdi-instagram",
          text: "Instagram",
        },
        {
          icon: "mdi-facebook",
          text: "Facebook",
        },
        {
          icon: "mdi-youtube",
          text: "Youtube",
        },
      ],
      helps: [
        {
          icon: "mdi-whatsapp",
          text: "Whatsapp",
        },
        {
          icon: "mdi-cellphone",
          text: "Mobile",
        },
        {
          icon: "mdi-email",
          text: "Email",
        },
        {
          icon: "mdi-chat-outline",
          text: "Chat",
        },
        {
          icon: "mdi-twitter",
          text: "Twitter",
        },
        {
          icon: "mdi-instagram",
          text: "Instagram",
        },
        {
          icon: "mdi-facebook",
          text: "Facebook",
        },
        {
          icon: "mdi-youtube",
          text: "Youtube",
        },
      ],
    };
  },
};
</script>

<style>
</style>