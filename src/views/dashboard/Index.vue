<template>
  <v-app>
    <Navbar />
    <Sidebar  />
    <v-content>
      <v-container fluid>
        <v-layout align-content-center fill-height >
          <v-flex m12>
            <transition>
              <AppView />
            </transition>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
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

