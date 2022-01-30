<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Regulations</h4>
    <p class="grey--text"></p>
    <v-divider class="mb-4"></v-divider>
    <h4>FINANCIAL CONDUCT AUTHORITY (FCA)</h4>
    <p class="grey--text">House of Borse Limited is authorised and regulated by the Financial Conduct Authority(FCA) of the UK under Firm Reference Number (FRN) 631382.</p>
    <p class="grey--text">The FCA’s key objectives include: protecting consumers, improving levels of integrity within the financial system and promoting competition with the interests of consumers in mind.</p>
    <p class="grey--text">As an FCA regulated firm, House of Borse is obligated to meet the stringent standards set by the FCA, submit financial reports on a regular basis and undertake detailed annual audits. This includes ensuring that client funds are held in an FCA approved Tier 1 bank.</p>
    <p class="grey--text">House of Borse performs daily client money reconciliations in accordance with FCA requirements.</p>
    <p class="grey--text">You can learn about the FCA from their website www.fca.org.uk/</p>
    <v-divider class="my-4"></v-divider>
     <h4>MIFID</h4>
    <p class="grey--text">The Markets in Financial Instruments (MiFID) directive 2004/39/EC came into effect on 1/11/2007 with the aim of regulating the markets of financial instruments and the provision of investment services and activities within the European Economic Area (EEA).</p>
    <p class="grey--text">The key objectives of the European Union’s Markets in Financial Instruments Directive (MiFID) are: to improve levels of efficiency, to increase financial transparency, to promote competition and to effectively protect consumers.</p>
    <p class="grey--text">House of Börse Limited operates under ‘The Markets in Financial Instruments Directive (MiFID)’, which strives to ensure the highest levels of protection for investors and to maximise the competitiveness in the investment services market.In 2018 the EU undertook revisions to the MiFID legislation, which took effect from January 2018, and is called MiFID II.  </p>
    <v-divider class="my-4"></v-divider>
     <h4>MIFID II</h4>
    <p class="grey--text">The aim of MIFID II is to ensure appropriate levels of protection for investors and consumers of investment services across the European Union (EU). MiFID II introduces stricter conduct rules to encourage firms to provide improved information for customers about the nature of their products and services, the application of best execution requirements for firms to obtain the best possible result for their clients, regulatory reporting to avoid market abuse, and suitability requirements, pre- and post-trade transparency requirements on a range of investment services.</p>
    <v-divider class="my-4"></v-divider>
     <h4>Reference Data Reporting</h4>
    <p class="grey--text">MiFID II creates enhanced reporting obligations for House of Borse whenever we execute trades on behalf of a client. This includes identifying eligible clients whenever they trade.</p>
    <v-divider class="my-4"></v-divider>
     <h4>Best Execution</h4>
    <p class="grey--text">MiFID II seeks to enhance the best execution framework first introduced under MiFID I where House of Borse was required to take “reasonable steps” to obtain the best possible results for its customers, while under MiFID II the requirement is for House of Borse to take “all sufficient steps”, to obtain the best possible results for its clients.</p>
    <p class="grey--text">For further information customers can access our Order Execution Policy.</p>
    <v-divider class="my-4"></v-divider>
     <h4>Disclosures</h4>
    <p class="grey--text">Under MiFID II House of Borse is required to make cost disclosures to clients both on ex-ante and ex-post basis. The information disclosure will include the total consideration on all costs and charges. Clients can access the total consideration via the client portal.</p>
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
          text: "Regulations",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>