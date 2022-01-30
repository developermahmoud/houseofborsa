<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Treating Customers Fairly</h4>
    <p class="grey--text">
      A firm must pay due regard to the interests of its customers and treat
      them fairly
    </p>
    <v-divider class="mb-4"></v-divider>
    <v-alert border="left" color="secondary">
      House of Borse is committed to offering our customers the highest possible
      standards of service.
    </v-alert>
    <p>
      We are therefore committed to ensuring that the FCA principle of Treating
      Customers Fairly (TCF) is applied in all aspects of our business
      activities.
    </p>
    <p>
      The FCA requires all regulated firms to undertake business with its
      clients in a certain way: “A firm must pay due regard to the interests of
      its customers and treat them fairly”
    </p>
    <p>
      We recognise that both our customers and House of Borse will benefit
      substantially if we look after our customer’s best interests and treat
      them fairly in all aspects of our dealings with them.
    </p>
    <h4>Our Commitment to you</h4>
    <ul>
      <li>Provide you with clear information about the products and service we offer, including any fees and charges.</li>
      <li>Keep you suitably informed about the firm, its products and services at all times.</li>
      <li>Ensure that all financial promotions are clear, fair and not misleading.</li>
      <li>Ensure our products perform as you expect they should.</li>
      <li>Ensure all customers have been notified of the risks inherent in FX and CFD trading.</li>
      <li>Encourage you to ask if there’s anything you don’t understand.</li>
      <li>Give you access to a formal complaints procedure should you become unhappy with our service and ensure that all complaints are handled fairly and promptly with all clients provided the opportunity to express their point of view.</li>
    </ul>
    <v-divider class="my-5"></v-divider>
    <h4>How you can help us</h4>
    <p>To help us provide you with the highest possible standards of service, we kindly request you to:</p>
    <ul>
      <li>Keep us informed of any changes to your work or home contact details</li>
      <li>Let us know if there is any aspect of our service, or product that you don’t fully understand</li>
      <li>Tell us if you think there are ways we can improve our service</li>
    </ul>
    <p>You can see our full TCF policy by clicking here</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: "About US",
          disabled: false,
          to: "/services/about-us",
        },
        {
          text: "Treating Customers Fairly",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>