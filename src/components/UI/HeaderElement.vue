<template>
  <v-app-bar app color="primary" dark>
    <v-spacer />
    <v-btn text @click="logout">Logout</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit('signOut');
      this.$router.push('/')
    }
  }
};
</script>
