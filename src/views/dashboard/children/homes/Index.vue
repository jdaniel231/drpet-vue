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
      <List />
    </v-card-text>
  </v-card>
</template>

<script>
import List from '../../../../components/clients/List.vue'

export default {
  components: {
    List
  }
}
</script>