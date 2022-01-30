<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Professional Clients</h4>
    <p class="grey--text">
      House of Borse only accepts professional, elective professional and
      corporate clients that are experienced and capable of making their own
      investment decisions.
    </p>
    <v-divider class="mb-4"></v-divider>
    <h4>What Is a professional Client?</h4>
    <p class="grey--text">
      A professional client can be either an Elective Professional or a Per Se
      professional, and may be either an individual or an entity.
    </p>
    <v-divider class="my-4"></v-divider>
    <h4>
      The Elective Professional Client categorisation is assigned to a client
      who satisfies two of the following conditions (the “quantitative test”):
    </h4>
    <p class="grey--text">
      A. The client has carried out transactions, in significant size, on the
      relevant market at an average frequency of 10 per quarter over the
      previous four quarters;
    </p>
    <p class="grey--text">
      B. The size of the client’s financial instrument portfolio, defined as
      including cash deposits and financial instruments, exceeds EUR 500,000;
    </p>
    <p class="grey--text">
      C. The client works or has worked in the financial sector for at least one
      year in a professional position, which requires knowledge of the
      transactions or services envisaged.
    </p>
    <p class="grey--text">
      Furthermore, the Elective Professional Client must have the expertise,
      experience and knowledge to be capable of making his/ her/ its own
      investment decisions (the “qualitative test”).
    </p>
    <v-divider class="my-4"></v-divider>
    <h4>
      The Professional Client per se categorisation is assigned to a client who
      falls under any of the following (A-D):
    </h4>
    <p class="grey--text">
      A. An entity required to be authorised or regulated to operate in the
      financial markets including: (a) credit institution; (b) investment firm;
      (c) insurance companies; (d) authorised collective investment schemes or
      the management company of such schemes; (e) pension funds or the
      management company of a pension fund; (f) other authorised or regulated
      financial institutions; (g) commodity or commodity derivative dealers; (h)
      locals; (i) other institutional investor.
    </p>
    <p class="grey--text">
      B. A company meeting two of the following size requirements: (a) Balance
      sheet of EUR 20 million; (b) Net turnover of EUR 40 million; and/ or (c)
      Own funds of EUR 2 million.
    </p>
    <p class="grey--text">
      C. A national or regional government or public body that manage public
      debt, central bank, international and supranational institution (e.g.
      World Bank, the IMF, the ECP), or other similar international
      organisation. D. Another institutional investor whose main activity in to
      invest in financial instruments.
    </p>
    <p class="grey--text">
      The Elective Eligible Counterparty categorisation is assigned to a client
      who includes any of the following and carries out eligible counterparty
      business: A. the client is an undertaking and a professional client per
      se; B. the client is an undertaking and requests such categorisation and
      is an elective professional client but only in respect of the services or
      transactions for which it could be treated as a professional
    </p>
    <v-divider class="my-4"></v-divider>
    <h4>
      The Eligible Counterparty per se categorisation is assigned to a client
      who includes any of the following:
    </h4>
    <p class="grey--text">A. credit institution;</p>
    <p class="grey--text">B. investment firm;</p>
    <p class="grey--text">C. insurance companies;</p>
    <p class="grey--text">
      D. authorised collective investment schemes or the management company of
      such schemes;
    </p>
    <p class="grey--text">
      E. pension funds or the management company of a pension fund;
    </p>
    <p class="grey--text">
      F. other authorised or regulated financial institutions;
    </p>
    <p class="grey--text">
      G. certain own account dealers in commodities or commodity derivatives;
    </p>
    <p class="grey--text">H. locals;</p>
    <p class="grey--text">
      I. national government or its corresponding office;
    </p>
    <p class="grey--text">J. central banks;</p>
    <p class="grey--text">K. supranational organisations.</p>
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
          text: "Professional Clients ",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>