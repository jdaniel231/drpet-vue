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
            <v-btn smal color="primary" class="mx-3">
              <v-icon>mdi-eye</v-icon>
            </v-btn>
          </td>
         
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  
</template>

<script>
export default {
  props: {
    clients: Array
  },
}
</script>

