<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>About House of Borse</h4>
    <p class="grey--text">
      House of Borse is an international financial services firm that is
      authorized and regulated by the Financial Conduct Authority, under Firm
      Reference Number (FRN) 631382. Through House of Borse, and the globally
      renowned Metatrader 4 platform, our clients can trade a wide variety of
      markets, including foreign exchange, commodities and indices 24/ 5. Take
      advantage of deep liquidity, tight spreads, mobile trading and much more.
    </p>
    <v-divider class="mb-4"></v-divider>
    <v-alert border="left" color="secondary">
      House of Borse (HoB) is a financial services firm specializing in online
      Forex and CFD trading for professional and corporate clients in a diverse
      range of markets 24 hours a day. Through House of Borse, and the globally
      renowned Metatrader 4 platform, our professional and institutional clients
      can trade a wide variety of markets, including foreign exchange,
      commodities and indices all over the world.
    </v-alert>
    <p>
      House of Borse operates under the ECN/DMA trading model. This means that
      the company does not take any risk and all client trades are passed
      straight through to the market, and there is no conflict of interest.
      House of Borse connects traders directly to the Interbank Market, and uses
      aggregated prices from multiple liquidity providers, including tier 1
      banks, to provide the best possible prices to our clients.
    </p>
    <p>
      In just a short time House of Borse has managed to establish itself as a
      leading financial firm that is recognized for its solid reputation,
      transparency and stability at a time of unprecedented uncertainty in the
      financial services sector.
    </p>
    <v-divider class="my-5"></v-divider>
    <h4>Connectivity Infrastructure</h4>
    <p class="grey--text">
      Our servers are located in London in the Equinix data centre LD4. This
      helps ensure low latency and ultra fast trade execution.
    </p>
    <v-divider class="my-5"></v-divider>
    <h4>Strong Liquidity Offering</h4>
    <p class="grey--text">
      HoB provides direct market access to a wide range Tier 1 liquidity
      providers, including banks, non-banks, MTFs and ECNs. Our aggregation of
      these liquidity providers helps ensure deep market liquidity, fast
      execution and tight spreads across our quoted markets.
    </p>
    <v-divider class="my-5"></v-divider>
    <h4>HOB Mission</h4>
    <p class="grey--text">
      HoB’s mission is to become the preferred trading partner for the
      discerning investor who seeks competitive pricing and deep liquidity in
      the online trading space. HoB wants to provide its clients with the best
      possible experience in all aspects of its trading services – from trade
      execution, to deep liquidity, trading platform all the way through to the
      customer support experience. Our strong focus on technology and
      established connections in the financial markets means that we are ideally
      placed to service the needs and demands for all types of trades, from
      professional through to the ultra-high net worth.
    </p>
    <p class="grey--text">
      While our ambitions are very much global, our emerging markets roots –
      together with deep experience of these markets – means we aim to maintain
      strong expertise and specialization in this region.
    </p>
    <p class="grey--text">
      HoB strives to provide an unparalleled service to its clients and to fully
      understand the needs of today’s modern investor. For this reason we want
      to create a company that achieves a loyal following by being the best in
      all it offers – from price, to execution, to trading choice to customer
      support.
    </p>
    <p class="grey--text">
      HoB wants to be known as the trusted brand in the online trading space
      globally.
    </p>
    <v-divider class="my-5"></v-divider>
    <h4>Product and Services</h4>
    <p class="grey--text">
      House of Borse focusses exclusively on professional and institutional clients. Our client base is global, from the UK to the Middle East and beyond. HoB’s online trading platform and services allows our clients to instantly access their portfolio and trading account. The platform allows our clients to quickly and easily access and trade all available instruments from one place. Clients are able to access their account 24/7 and place orders or trades on any open market at any time. We believe that in order for you to be successful in your trades you also need the right support and resources. That’s why we provide a range of tools to aid your trade making decisions, including charts with technical analysis tools, news feed as well as a customer service team who are available to all of your questions and make sure your trading experience with us is as rewarding as possible.
    </p>
    <v-divider class="my-5"></v-divider>
    <h4>Team</h4>
    <p class="grey--text">
      House of Borse was founded by people that have decades of experience in the online trading space and have a proven track record in delivering results. Our team comprises of highly skilled and experienced individuals working together to provide our clients with the most superior trading experience. This gives us a clear advantage over our competitors. We have a presence in UK and the Middle East and our presence is growing all the time.
    </p>
    <v-divider class="my-5"></v-divider>
    <h4>Market</h4>
    <p class="grey--text">The growing trend of investors wanting to be in control of their own portfolios and trading decisions has seen triple figure year-on-year growth since 2001. This is largely due to the penetration of high speed internet, the development of technology and the huge increase in professional investors. The FX Brokerage industry has changed significantly since the onset of the financial crisis.</p>
    <p class="grey--text">Many banks have been forced to deleverage to meet stringent capital and liquidity requirements and, as a result, have stopped providing access to liquidity to small and medium sized funds, money managers, prop funds and retail brokers. At the same time, demand for better liquidity and execution services continues to rise as new entrants come into the market. To access liquidity, they are turning to a new generation of brokers who can service them in a viable way.</p>
    <v-divider class="my-5"></v-divider>
    <h4>Target</h4>
    <p class="grey--text">We believe that giving clients what they need when they need it is essential to our success. We believe we are able to meet our clients’ needs through our combination of price, product and support from some of the most experienced people in the business. Our goal is to provide competitive rates, deep liquidity and the best possible execution in the market. Our setup allows helps our clients seize opportunities wherever they present themselves. We aim to cement investor trust and loyalty in our brand by offering transparency and quality in everything we do.</p>
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
          text: "About HOB",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>