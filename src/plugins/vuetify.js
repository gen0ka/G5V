import Vue from "vue";
import Vuetify from "vuetify/lib";
import { colors } from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.deepOrange,
        secondary: colors.orange.darken2,
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: colors.orange.lighten4,
        footer: colors.orange
      },
      dark: {
        primary: colors.indigo.darken4,
        background: colors.grey.darken3,
        footer: colors.indigo.darken4
      }
    }
  }
});
