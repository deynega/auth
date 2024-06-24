<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" xsm="2" sm="6" md="4">
        <v-card class="elevation-8">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title class="flex text-center">Enter your username to continue</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit">
              <v-text-field
                v-model="username"
                label="Login"
                prepend-icon="mdi-account"
                type="text"
                max-width="30%"
                :rules="usernameRules"
              ></v-text-field>

              <v-row align="center" justify="center" class="ma-2">
                <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4"
                @click="submit"
              >
                Sign in
              </v-btn>

              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: true,
      username: '',
      usernameRules: [
        v => !!v || 'Login is required',
        v => /^[a-zA-Z0-9-._]+$/.test(v) || 'Login may only contain letters, numbers, "-", ".", and "_"'
      ]
    }
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.commit('setUserData', { username: this.username })
        this.$router.push('/account-settings')
      } 
    }
  }
}
</script>
