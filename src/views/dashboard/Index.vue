<template>
  <div class="dashboardIndex">
    <Navbar />
    <v-icon>mdi-coffee</v-icon>
    <Sidebar />
  </div>
</template>

<script>
import Navbar from '../partials/navbar/Index.vue'
import Sidebar from '../partials/navbar/Index.vue'

export default {
  name: 'dashboardIndex',
  components: {
    Navbar,
    Sidebar,
  }
 
}
</script>