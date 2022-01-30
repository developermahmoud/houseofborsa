<template>
  <div>
    <h3 class="mb-2">Chat and Contact</h3>
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
    <h3 class="mt-1">HÓB Academy</h3>
    <v-list class="py-0 transparent" dense>
      <v-list-item>
        <v-list-item-icon class="mr-3">
          <v-icon size="20"> fas fa-film</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Educational videos</v-list-item-title>
        <v-list-item-action>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-icon class="mr-3">
          <v-icon size="20"> far fa-newspaper</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Educational articles</v-list-item-title>
        <v-list-item-action>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-icon class="mr-3">
          <v-icon size="18"> fas fa-chalkboard-teacher</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Webinars and Interviews</v-list-item-title>
        <v-list-item-action>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-icon class="mr-3">
          <v-icon size="18"> fas fa-hourglass-start</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Webinars are coming</v-list-item-title>
        <v-list-item-action>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
    <h3 class="mt-5">Help Center</h3>
    <v-list class="py-0 transparent" dense>
      <v-list-item>
        <v-list-item-title>House Of Borse Careers </v-list-item-title>
        <v-list-item-action>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>Financial Terms </v-list-item-title>
        <v-list-item-action>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>Trading Hours </v-list-item-title>
        <v-list-item-action>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>Download Center </v-list-item-title>
        <v-list-item-action>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>TERMS OF USE </v-list-item-title>
        <v-list-item-action>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <h3 class="mt-5">Legal information</h3>
    <v-list class="py-0 transparent" dense>
      <v-list-item>
        <v-list-item-title>RISK DISCLOSURE STATEMENT </v-list-item-title>
        <v-list-item-action>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>PRIVACY POLICY</v-list-item-title>
        <v-list-item-action>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>COOKIES POLICY </v-list-item-title>
        <v-list-item-action>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>PILLAR 3 DISCLOSURE </v-list-item-title>
        <v-list-item-action>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>Terms and Conditions </v-list-item-title>
        <v-list-item-action>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title>Order Execution Policy </v-list-item-title>
        <v-list-item-action>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
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