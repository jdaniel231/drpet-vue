<template>
  <v-navigation-drawer
    v-model="drawer"    
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="barImage"
    v-bind="$attrs"
    mobile-break-point="960"
    app
    width="260"
  >

    <template v-slot:img="props">
      <v-img
        :gradient="`to bottom, ${barColor}`"
        v-bind="props"
      />
    </template>
    
    <v-divider class="mb-1"></v-divider>

   
    <v-list-item>
      <v-list-item-content
        class="display-1 center" 
      >
        DrPet
      </v-list-item-content>
    </v-list-item>

    <v-divider class="mb-2"></v-divider>

    <v-list nav dense>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon" ></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'sidebar',
  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },
  
  data: () =>({
    items: [
      {
        icon: 'mdi-view-dashboard',
        title: 'dashboard',
        link: '/'
      },
       {
        icon: 'mdi-note-plus',
        title: 'Clientes',
        link: '/clients'
      },
      
      
    ]
  }),

  computed: {
     ...mapState(['barColor']),
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.$store.commit('SET_DRAWER', val)
      },
    }
  }
  
}
</script>

<style lang="sass">
  @import '~vuetify/src/styles/tools/_rtl.sass'

  #core-navigation-drawer
    .v-list-group__header.v-list-item--active:before
      opacity: .24

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
          margin-right: 24px
          margin-left: 12px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px

        +rtl()
          padding-right: 8px

      .v-list-group__header
        +ltr()
          padding-right: 0

        +rtl()
          padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
            margin-right: 8px

          +rtl()
            margin-left: 8px
</style>


