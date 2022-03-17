<template>
  <v-card height="650">
    <v-card-title>
      <span class="headline">Cliente - {{client.name}} </span>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col>
          <v-text-field
            label="Nome"
            v-model="client.name"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            label="Telefone"
            v-model="client.phone"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>

      <div>
        <v-divider class="mb-5"></v-divider>

      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    client: {
      id:"",
      name:"",
      phone:"",
    }
  },
  // // data(){
  // //   return{
  // //     client: {
  // //       name:'',
  // //       phone:'',
  // //     }
  // //   }
  // },
}
</script>