import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.cyan.darken2,
        secondary: colors.grey.darken3,
        accent: colors.amber.accent4,
        error: colors.red.accent3,
      }
    }
  }
})
