<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Protecting Client Funds</h4>
    <p class="grey--text">
      The protection of client money is of fundamental importance to us.
      Therefore all client funds are held in a segregated bank account and
      separate from House of Borse’s own money.
    </p>
    <v-divider class="mb-4"></v-divider>
    <h4>Protecting Client Funds</h4>
    <p class="grey--text">Client funds are held in a separate bank account and held in trust to safeguard them against counterparty default. As good practice - in providing further transparency - the funds are not mixed with House of Borse funds.</p>
    <v-divider class="my-5"></v-divider>
    <h4>Where Are My Funds Held?</h4>
    <p class="grey--text">House of Borse uses several major banking institutions, which includes Barclays Bank PLC and Citibank. Client funds are only kept in jurisdictions where segregation of client funds is supported by the local legal framework.</p>
    <v-divider class="my-5"></v-divider>
    <h4>What Happens to My Funds?</h4>
    <p class="grey--text">Funds transferred by clients to House of Borse will be received directly into a segregated client bank account at Barclays bank PLC.</p>
    <p class="grey--text">The protection of client money is of fundamental importance to us and a governance structure is in place to ensure ongoing compliance and an appropriate level of protection is afforded to client money.</p>
    <p class="grey--text">The company has comprehensive client money processes and procedures in place to ensure client money is identified and protected at the earliest possible point after receipt as well as governance structures which ensure such activities are effective in providing the maximum protection for client money.</p>
    <v-divider class="my-5"></v-divider>
    <h4>Financial Services Compensation Scheme (FSCS)</h4>
    <p class="grey--text">The Financial Services Compensation Scheme (FSCS) is the UK’s compensation fund of last resort for customers of authorised financial services firms. If a firm becomes insolvent or ceases trading, the FSCS may be able to pay compensation to its customers. The FSCS covers business conducted by firms authorised by the FCA.</p>
    <p class="grey--text">House of Borse is a member of the Financial Services Compensation Scheme (FSCS). Eligibility depends on the status and the nature of the claim, and client classification.</p>
    <v-divider class="my-5"></v-divider>
    <h4>Client Money Safety</h4>
    <p class="grey--text">All client money is held in segregated client bank accounts in accordance with the FCA’s client money rules</p>
    <p class="grey--text">All money held on behalf of clients is held with an FCA approved Bank.</p>
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
          text: "Protecting Client Funds",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>