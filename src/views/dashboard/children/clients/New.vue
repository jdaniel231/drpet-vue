<template>
  <v-card min-height="600px">
    <v-app-bar dark @submit.prevent='save'>
      <v-icon class="icon-title px-5 py-3">mdi-account-plus-outline</v-icon>
      <v-toolbar-title>Cadastro  </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon @click="back">
        <v-icon>mdi-arrow-left-thick</v-icon>
      </v-btn>
      <v-btn icon @click="save">
        <v-icon icon >mdi-content-save</v-icon>
      </v-btn>     
    </v-app-bar>

    <v-row>
      <v-col>
        <Form :client="client"/>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Form from "../../../../components/clients/Form.vue"
import Client from "../../../../api/clients"
export default {
  data: () => ({
    client: {},
  }),
  components: {
    Form
  },
  methods: {
    save: function(){
     Client.create(this.client).then(() => { 
        alert('Salvo com sucesso!')   
        this.back(); 
     });
    },
    back() {
      this.$router.push("/")
    }, 
  },
}
</script>