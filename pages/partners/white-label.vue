<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>White Label</h4>
    <p class="grey--text">
      The House of Borse White Label program can enable your brokerage to offer
      online Forex and CFD trading to your clients. Our White Label Partnership
      offers cutting edge technology, ultra-low latency, competitive spreads and
      a helpful support team to help you grow your business and provide your
      clients with the best possible chance to maximize their returns and
      trading opportunities.
    </p>
    <v-divider class="mb-4"></v-divider>
    <h4>White label Solution</h4>
    <p class="grey--text">
      House of Borse provides a one-stop-shop for all your White Label needs. We
      are able to provide everything a client requires as well as meet any
      bespoke requirements as desired.
    </p>
    <p class="grey--text">
      This cost-effective solution helps boost the efficiency and effectiveness
      of our clients by helping them better control their risk and operations.
    </p>
    <p class="grey--text">
      Whether you are a bank, a broker or wealth manager, House of Borse’s White
      Label solutions are a trusted gateway to trading the world’s major
      markets,
    </p>
    <p class="grey--text">
      Our service is based one of the industry’s most acclaimed trading
      platforms – Metatrader MT5. Catering to a broad range of clients, our
      solutions can be fully branded to meet your needs and allow you to put
      your focus where it should be – on distributing your services and
      nurturing your clients throughout their trading and investing journeys
    </p>
    <div>
      <v-img
        src="https://www.houseofborse.com/hob_uploads/ASSET-CLASSES.png"
      ></v-img>
    </div>

    <h4>Front Office & Trading Support</h4>
    <ul>
      <li>Full hosting and IT services</li>
      <li>Full multi-asset trade execution platform</li>
      <li>Best execution with algo trading</li>
    </ul>
    <v-divider class="my-5"></v-divider>
    <h4>Back Office Processing</h4>
    <ul>
      <li>Rollover of CFD positions to a new Value Date.</li>
      <li>
        Overnight credit/debit charge for customers holding CFDs overnight
      </li>
      <li>Calculation and booking of swaps/ fees to customer accounts</li>
      <li>Daily deduction of predefined commissions from customer accounts</li>
      <li>
        Automatic processing and booking of corporate actions to customer
        accounts
      </li>
      <li>Facilitation of stock transfers to and from customer accounts</li>
      <li>Custody fee handling and booking of Stock holdings</li>
    </ul>
    <v-divider class="my-5"></v-divider>
    <h4>Reporting & Monitoring</h4>
    <ul>
      <li>End-of-Day statements</li>
      <li>Real-time risk management tool to monitor exposure and positions</li>
      <li>
        Access audit trail of trading-related activity and periodic customer
        reporting
      </li>
      <li>
        Relevant regulatory reporting including EMIR, (MiFID) and exchange
        reporting
      </li>
    </ul>
    <v-divider class="my-5"></v-divider>
    <h4>Fully branded and customised solution</h4>
    <ul>
      <li>
        Fully Branded trading solution in a firm’s corporate colours and design
        language
      </li>
      <li>
        Complete value chain services from execution to risk management and back
        office
      </li>
      <li>Hosted by House of Borse at competitive cost</li>
      <li>
        You keep control of your customers using the platform, and own all
        customer and lead information
      </li>
      <li>
        Customise your offering from our range of products to include cash
        equities, CFDs, FX, Commodities
      </li>
      <li>
        Effective risk management through automated margin profiles (stop outs)
        and real-time reporting
      </li>
      <li>Dedicated support services to help with any queries you may have</li>
    </ul>
    <v-divider class="my-5"></v-divider>
    <h4>WHITE LABEL CONNECTIVITY</h4>
    <p class="grey--text">
      WL connectivity allow our clients to focus on their customer relationships
      through the creation of a unique yet tried and tested user experience for
      their customer base.
    </p>
    <div>
      <v-img
        src="https://www.houseofborse.com/hob_uploads/WL-CONNECTIVITY-BENEFITS-MT5.png"
      />
    </div>
    <h4>WL CONNECTIVITY BENEFITS</h4>
    <ul>
      <li>Customised front-end user interface</li>
      <li>Seamless integration with LPs and the underlying market</li>
      <li>
        Rapid transfer of vast quantities of information via HOB FIX protocols
      </li>
      <li>Quick and easy set up and widespread acceptance</li>
      <li>
        Proprietary algorithmic or black-box strategies may be readily created.
      </li>
      <li>Scalable technology</li>
      <li>Multi asset trading – FX, CFDs, Stocks, Commodities</li>
      <li>Seamless connectivity to LPs and exchanges</li>
    </ul>
     <v-divider class="my-5"></v-divider>
    <h4>REPORTING</h4>
    <p class="grey--text">
      The financial services industry is seeing increased complexity within the
      requirements for regulatory and compliance reporting. House of Borse’s,
      White Labels benefit from continuous development, ensuring regulatory
      compliance and eliminating an otherwise costly undertaking.
    </p>
    <p class="grey--text">
      HOB’s White Label solution includes a comprehensive reporting package,
      which covers relevant regulatory reporting.
    </p>
    <v-card class="secondary mt-5">
      <h5 class="text-center grey--text pt-5">
        To Learn more about our White Label service please
      </h5>
      <v-card-title class="justify-center mt-0 pt-0">
        complete form below
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field dense outlined label="Fullname"></v-text-field>
          <v-text-field dense outlined label="Email"></v-text-field>
          <v-text-field dense outlined label="Country"></v-text-field>
          <v-text-field dense outlined label="Phone"></v-text-field>
          <v-text-field dense outlined label="Website"></v-text-field>
          <v-text-field dense outlined label="Company Name"></v-text-field>
          <v-text-field dense outlined label="Your Message"></v-text-field>
          <v-btn class="primary" block text>Send</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: "Partners",
          disabled: false,
          to: "/services/partners",
        },
        {
          text: "White Label",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>