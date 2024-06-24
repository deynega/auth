<template>
  <v-app>
    <Header v-if="$store.state.user.username" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/UI/HeaderElement.vue';

export default {
  name: 'App',
  components: {
    Header
  },
  created() {
    console.log('store - ', JSON.stringify(this.$store.state, null, 2));
  }
};
</script>
