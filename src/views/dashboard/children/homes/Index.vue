<template>
  <v-card min-height="600px">
    <v-app-bar dark color="grey">
       <v-icon class="icon-title px-5 py-3">mdi-account-multiple</v-icon>
      <v-toolbar-title>Clientes</v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-btn @click="newClient">
        <v-icon>mdi-account-multiple-plus</v-icon>
      </v-btn>     
    </v-app-bar>

    <v-card-title></v-card-title>
    <v-card-text>
      <List :clients="clients" @onClientShow="showClient" @onClientRemove="removeClient"/>
    </v-card-text>
  </v-card>
</template>

<script>
import List from '../../../../components/clients/List.vue'

import Client from  '../../../../api/clients'

export default {
  components:{
     List
  },
  data(){
    return{
      clients: []
    }
  },
  mounted() {
    this.list()
  },
  methods: {
    list() {
      Client.list().then(response => {
        console.log(response.data)
        this.clients = response.data
      }).catch(e => {
        console.log(e);
      });
    },
    newClient() {
      this.$router.push("/clients/new")
    },
    showClient(id){
      this.$router.push(`/clients/${id}`);
    },
    removeClient(id){
      if(confirm('Deseja excluir esse cliente?' ))
      {
        Client.remove(id).then(response => {
          console.log(response.data);
          this.list();
        }).catch( e => {
          console.log(e)
        })
      }
    }
  }

  // props: {
  //   client: {}
  // },
  // components:{
  //   List
  // },
  // computed: mapState({
  //     clients: state => state.clients
  //   }),
  // mounted() {
  //   this.$store.dispatch('fecthClients')
  // },
  
}
</script>