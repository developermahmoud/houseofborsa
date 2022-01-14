<template>
  <div>
    <h3>Chat and Contact</h3>
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
    <h3>Help Center</h3>
    <v-row no-gutters>
        <v-col cols="12"
        ><v-icon size="20" color="primary">mdi-check</v-icon>About HOB
      </v-col>
        <v-col cols="12"
        ><v-icon size="20" color="primary">mdi-check</v-icon>HOB – Why Us?
      </v-col>
      <v-col cols="12"
        ><v-icon size="20" color="primary">mdi-check</v-icon>Regulations
      </v-col>
       <v-col cols="12"
        ><v-icon size="20" color="primary">mdi-check</v-icon>Financial Ombudsman Service
      </v-col>
        <v-col cols="12"
        ><v-icon size="20" color="primary">mdi-check</v-icon>Protecting Client Funds
      </v-col>
        <v-col cols="12"
        ><v-icon size="20" color="primary">mdi-check</v-icon>Treating Customers Fairly
      </v-col>
        <v-col cols="12"
        ><v-icon size="20" color="primary">mdi-check</v-icon>Professional Clients
      </v-col>
        <v-col cols="12"
        ><v-icon size="20" color="primary">mdi-check</v-icon>House Of Borse Careers
      </v-col>
        <v-col cols="12"
        ><v-icon size="20" color="primary">mdi-check</v-icon>Financial Terms
      </v-col>
        <v-col cols="12"
        ><v-icon size="20" color="primary">mdi-check</v-icon>Trading Hours
      </v-col>
        <v-col cols="12"
        ><v-icon size="20" color="primary">mdi-check</v-icon>Download Center
      </v-col>
        <v-col cols="12"
        ><v-icon size="20" color="primary">mdi-check</v-icon>TERMS OF USE
      </v-col>
        <v-col cols="12"
        ><v-icon size="20" color="primary">mdi-check</v-icon>RISK DISCLOSURE STATEMENT
      </v-col>
        <v-col cols="12"
        ><v-icon size="20" color="primary">mdi-check</v-icon>PRIVACY POLICY
      </v-col>
        <v-col cols="12"
        ><v-icon size="20" color="primary">mdi-check</v-icon>COOKIES POLICY
      </v-col>
       <v-col cols="12"
        ><v-icon size="20" color="primary">mdi-check</v-icon>PILLAR 3 DISCLOSURE
      </v-col>
       <v-col cols="12"
        ><v-icon size="20" color="primary">mdi-check</v-icon>Terms and Conditions
      </v-col>
       <v-col cols="12"
        ><v-icon size="20" color="primary">mdi-check</v-icon>Order Execution Policy
      </v-col>
    </v-row>
    <h3 class="ml-3 mt-5">HOB Academy</h3>
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