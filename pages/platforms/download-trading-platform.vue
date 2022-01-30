<template>
  <div>
    <v-breadcrumbs
      class="pl-0"
      :items="breadcrumbs"
      divider=">"
    ></v-breadcrumbs>
    <h4>Download Trading Platform</h4>
    <p class="grey--text">
      MetaTrader4 has established itself as the platform of choice for the
      trading community because of its ease of use, functionality and powerful
      performance. The MT4 platform is ideal for all types traders and all types
      of trading strategies, whether you are a seasoned trader placing trades
      through the client terminal or an API client placing automated trades. Use
      the House of Borse MT4 trader to empower your trading.
    </p>
    <v-divider class="mb-4"></v-divider>
    <v-alert border="left" color="secondary">
      MetaTrader4 has established itself as the platform of choice for the
      trading community because of its ease of use, functionality and powerful
      performance. The MT4 platform is ideal for all types traders and all types
      of trading strategies, whether you are a seasoned trader placing trades
      through the client terminal or an API client placing automated trades. Use
      the House of Borse MT4 trader to empower your trading.
    </v-alert>
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
          text: "Download Trading Platform",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>