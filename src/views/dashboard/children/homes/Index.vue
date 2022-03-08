<template>
  <v-card min-height="600px">
    <v-app-bar dark color="grey">
       <v-icon class="icon-title px-5 py-3">mdi-account-multiple</v-icon>
      <v-toolbar-title>Clientes</v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-btn>
        <v-icon>mdi-account-multiple-plus</v-icon>
      </v-btn>     
    </v-app-bar>

    <v-card-title></v-card-title>
    <v-card-text>
      <List :clients="clients" />
    </v-card-text>
  </v-card>
</template>

<script>
import List from '../../../../components/clients/List.vue'

export default {
  data() {
    return {
      clients: [],
      client: {}
    }
  },
  mounted(){
    this.fecthClients()
  },
  methods: {
    fecthClients() {
      this.$http.get("http://localhost:3000/api/clients")
        .then(response => {
          console.log(response)
          this.clients = response.data
        })
        .catch(err => console.log(err.response))
    }
  },

  components: {
    List
  }
}
</script>