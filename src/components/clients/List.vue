<template>
  <v-simple-table>
    <template>
      <thead>
        <tr>
          <th class="text-left" >Nome</th>
          <th class="text-center">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in clients" :key="item.id">
          <td class="text-left">{{ item.name }} </td>
          <td class="text-center">
            <v-btn smal color="primary" class="mx-3" @click="show(item.id)">
              <v-icon>mdi-eye</v-icon>
            </v-btn>
            <v-btn smal color="red" class="mx-3" @click="removeClient(item.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </td>
         
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  
</template>

<script>

// import Client from '../../api/clients'

export default {
  props: {
    clients: Array
  },
  methods: {
    show: function(id) {
      this.$emit('onClientShow', id)
    },
    removeClient(id) {
      this.$emit('onClientRemove', id)
    }
  },
}
</script>

