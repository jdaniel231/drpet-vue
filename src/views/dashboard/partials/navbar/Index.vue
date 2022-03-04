<template>
  <v-app-bar
    id="app-bar"
    absolute
    app
    flat
    height="75"
  >
    <v-app-bar-nav-icon @click="setDrawer(!drawer)"></v-app-bar-nav-icon>
    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text="$route.name"
    />

    <v-spacer />
    <v-btn
      class="ml-2"
      min-width="0"
      value="Logout"
    >
      <span>Logout</span>
      <v-icon>mdi-arrow-right-bold</v-icon>
     
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
computed: {
    ...mapState(['drawer']),
  },

  methods: {
    ...mapMutations({
      setDrawer: 'SET_DRAWER',
    }),
  }
}
</script>