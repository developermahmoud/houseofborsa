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
        ><v-icon size="20" class="mr-1" color="primary">mdi-check</v-icon>About
        HÓB
      </v-col>
      <v-col cols="12"
        ><v-icon size="20" class="mr-1" color="primary">mdi-check</v-icon>HOB –
        Why Us?
      </v-col>
      <v-col cols="12"
        ><v-icon size="20" class="mr-1" color="primary">mdi-check</v-icon
        >Regulations
      </v-col>
      <v-col cols="12"
        ><v-icon size="20" class="mr-1" color="primary">mdi-check</v-icon
        >Financial Ombudsman Service
      </v-col>
      <v-col cols="12"
        ><v-icon size="20" class="mr-1" color="primary">mdi-check</v-icon
        >Protecting Client Funds
      </v-col>
      <v-col cols="12"
        ><v-icon size="20" class="mr-1" color="primary">mdi-check</v-icon
        >Treating Customers Fairly
      </v-col>
      <v-col cols="12"
        ><v-icon size="20" class="mr-1" color="primary">mdi-check</v-icon
        >Professional Clients
      </v-col>
      <v-col cols="12"
        ><v-icon size="20" class="mr-1" color="primary">mdi-check</v-icon>House
        Of Borse Careers
      </v-col>
      <v-col cols="12"
        ><v-icon size="20" class="mr-1" color="primary">mdi-check</v-icon
        >Financial Terms
      </v-col>
      <v-col cols="12"
        ><v-icon size="20" class="mr-1" color="primary">mdi-check</v-icon
        >Trading Hours
      </v-col>
      <v-col cols="12"
        ><v-icon size="20" class="mr-1" color="primary">mdi-check</v-icon
        >Download Center
      </v-col>
      <v-col cols="12"
        ><v-icon size="20" class="mr-1" color="primary">mdi-check</v-icon>TERMS
        OF USE
      </v-col>
      <v-col cols="12"
        ><v-icon size="20" class="mr-1" color="primary">mdi-check</v-icon>RISK
        DISCLOSURE STATEMENT
      </v-col>
      <v-col cols="12"
        ><v-icon size="20" class="mr-1" color="primary">mdi-check</v-icon
        >PRIVACY POLICY
      </v-col>
      <v-col cols="12"
        ><v-icon size="20" class="mr-1" color="primary">mdi-check</v-icon
        >COOKIES POLICY
      </v-col>
      <v-col cols="12"
        ><v-icon size="20" class="mr-1" color="primary">mdi-check</v-icon>PILLAR
        3 DISCLOSURE
      </v-col>
      <v-col cols="12"
        ><v-icon size="20" class="mr-1" color="primary">mdi-check</v-icon>Terms
        and Conditions
      </v-col>
      <v-col cols="12"
        ><v-icon size="20" class="mr-1" color="primary">mdi-check</v-icon>Order
        Execution Policy
      </v-col>
    </v-row>
    <h3 class="ml-3 mt-5">HÓB Academy</h3>
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