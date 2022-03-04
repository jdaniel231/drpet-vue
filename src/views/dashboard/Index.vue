<template>
  <v-app>
    <Navbar />
    <Sidebar  />
    <AppView />
  </v-app>
</template>

<script>
import Navbar from '../dashboard/partials/navbar/Index.vue'
import Sidebar from '../dashboard/partials/sidebar/Index.vue'
import AppView from '../dashboard/partials/appView/Index.vue'

export default {
  name: 'dashboardIndex',
  data: () => ({
    drawer: false
  }),
  components: {
    Navbar,
    Sidebar,
    AppView,
  },
  methods: {
    toogleMenu: function() {
      this.drawer = !this.drawer;
    },
  } 
}
</script>