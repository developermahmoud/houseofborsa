<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>MetaTrader 5 (MT5) Trading Platform</h4>
    <p class="grey--text"></p>
    <v-divider class="mb-4"></v-divider>
    <p>
      The House of Borse MT5 Trading Platform: An evolution in trading
      capability
    </p>
    <p>
      Continuing its predecessor’s impressive legacy, MetaTrader 5 is a powerful
      all-in-one platform that provides you with everything you need to trade
      the financial markets. The House of Borse MT5 trading platform is both
      powerful and easy to use, allowing you to customise its layout to suit
      your trading style. Built in with a large selection of pre-installed
      technical indicators and graphical objects, the House of Borse MT5 enables
      you to analyse the markets, place orders and manage your exposure with
      ease.
    </p>
    <p>
      Successful traders from around the world have chosen the MetaTrader 5
      multi-asset platform to meet their trading needs. As well as superior
      tools for technical and fundamental analysis, MetaTrader 5 can also trade
      automatically by using trading robots and trading signals. In addition to
      the desktop and mobile versions, the platform is available on the web and
      can be accessed from any device.
    </p>
    <h4>Security and Convenience</h4>
    <p class="grey--text">
      The Metatader 5 platform is designed with the highest standards of
      security in mind.
    </p>
    <ul>
      <li>
        All data between client terminal and platform server is always
        encrypted.
      </li>
      <li>The platform also supports the use of RSA digital signature.</li>
    </ul>
    <v-divider class="my-4"></v-divider>
    <h4>Trading and Order Execution</h4>
    <p class="grey--text">
      The MT5 trading platform allows traders to execute a variety of order
      types and facilitate various trading strategies.
    </p>
    <ul>
      <li>One click trading</li>
      <li>Trade from charts</li>
      <li>Multi Asset Trading – Trade on FX, commodities and Indices</li>
      <li>
        Various order types supported - Market Order, Pending Order, Stop Loss
        and Take Profit.
      </li>
    </ul>
    <v-divider class="my-4"></v-divider>
    <h4>Key features</h4>
    <ul>
      <li>Market Watch Window</li>
      <li>Navigator Window</li>
      <li>Different order types</li>
      <li>Interactive charts with technical indicators</li>
      <li>Expert Advisors - Automated trading</li>
      <li>Strategy tester</li>
      <li>Access to all major trading instruments</li>
      <li>Alerts and financial news</li>
      <li>Multi-currency/language support</li>
      <li>Support for iOS and Android OS</li>
    </ul>
    <div class="my-5">
      <v-img src="https://www.houseofborse.com/img/mt4-app.jpg" />
    </div>
    <h4>MT5 TRADING PLATFORM HERE</h4>
    <v-list class="secondary py-0 mt-2">
      <v-list-item
        link
        href="https://download.mql5.com/cdn/web/house.of.borse/mt5/houseofborse5setup.exe"
      >
        <v-list-item-avatar color="background">
          <v-icon>mdi-microsoft-windows-classic</v-icon></v-list-item-avatar
        >
        <v-list-item-title>Windows</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link href="https://trade.houseofborse.com/">
        <v-list-item-avatar color="background">
          <v-icon>mdi-web</v-icon></v-list-item-avatar
        >
        <v-list-item-title>HOB WebTrader</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item
        link
        href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg"
      >
        <v-list-item-avatar color="background">
          <v-icon>mdi-desktop-mac</v-icon></v-list-item-avatar
        >
        <v-list-item-title>MAC</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item
        link
        href="https://download.mql5.com/cdn/mobile/mt5/ios?server=HouseOfBorse-Multi%20Assets"
      >
        <v-list-item-avatar color="background">
          <v-icon>mdi-apple-ios</v-icon></v-list-item-avatar
        >
        <v-list-item-title>IOS</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item
        link
        href="https://download.mql5.com/cdn/mobile/mt5/android?server=HouseOfBorse-Multi%20Assets"
      >
        <v-list-item-avatar color="background">
          <v-icon>mdi-android</v-icon></v-list-item-avatar
        >
        <v-list-item-title>Andriod</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: "Platforms",
          disabled: false,
          to: "/services/platforms",
        },
        {
          text: "(MT5) Trading Platform ",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>