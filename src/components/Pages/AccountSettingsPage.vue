<template>
  <v-container fluid class="fill-height">
    <v-snackbar v-model="snackbar" :timeout="3000" color="success">
      {{ message }}
    </v-snackbar>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-8">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Profile Settings</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="userData.firstName"
                label="First Name"
                prepend-icon="mdi-account"
                :rules="firstNameRules"
              ></v-text-field>
              <v-text-field
                v-model="userData.lastName"
                label="Last Name"
                prepend-icon="mdi-account"
                :rules="lastNameRules"
              ></v-text-field>
              <v-text-field
                v-model="userData.username"
                label="Username"
                prepend-icon="mdi-account"
                :rules="usernameRules"
              ></v-text-field>

              <v-row align="center" justify="center" class="ma-2">
                <v-btn
                  color="primary"
                  class="mr-4"
                  :disabled="!valid"
                  @click="save"
                >
                  Save
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
      snackbar: false,
      message: '',
      userData: { ...this.$store.state.user },
    
      firstNameRules: [
      v => !v || (v.length <= 20) || 'Firstname should be shorter then 20 symbols',
      v => !v || /^[a-zA-Z]+$/.test(v) || 'Firstname may only contain letters'
    ],
    lastNameRules: [
      v => !v || (v.length <= 30) || 'Lastname should be shorter then 30 symbols',
      v => !v || /^[a-zA-Z]+$/.test(v) || 'Lastname may only contain letters'
    ],
      usernameRules: [
        v => !!v || 'Username is required',
        v => /^[a-zA-Z0-9-._]+$/.test(v) || 'Username may only contain letters, numbers, "-", ".", and "_"'
      ]
    }
  },
  methods: {
    save () {
      if (this.$refs.form.validate()) {
        this.$store.commit('setUserData', this.userData)
        this.showSnackbar('Your data has been updated')
      }
    },
    showSnackbar(message) {
      this.message = message
      this.snackbar = true
    }
  }
}
</script>
