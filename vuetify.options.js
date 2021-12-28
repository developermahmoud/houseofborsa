import colors from "vuetify/es5/util/colors";
import "@fortawesome/fontawesome-free/css/all.css";
export default {
  customVariables: ["~/assets/variables.scss"],
  icons: {
    iconfont: "fa",
  },
  rtl: false,
  theme: {
    dark: true,
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: "#FFC107",
        accent: colors.grey.darken3,
        secondary: "#252c3f",
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
        background: "#181e2e",
        secondaryBackground: "#12111f",
      },
    },
  },
};
