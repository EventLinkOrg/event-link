<template>
    <v-app-bar
    style="padding: 0 90"
    app
    color="white"
    light
    elevation="6"
    elevate-on-scroll
    >
    <v-img
        src="../assets/EventLogo.svg"
        alt="Logo"
        height="40"
        contain
        class="mr-4"
      />
    <v-toolbar-title>
      EventLink
    </v-toolbar-title>
    <v-spacer/>
    <v-list class="d-flex align-center">
      <v-list-item v-for="(menu,index) in menus" :key="index" :to="menu.route">
        <v-list-item-title>
        {{menu.title}}
        </v-list-item-title>
      </v-list-item>
    </v-list>
    </v-app-bar>
</template>

<script>
import EventLogo from '../assets/EventLogo.svg'
export default {


    name:'Header',
     components: {
    EventLogo,
      },

    data(){
    return{
      menus:[
        {title:'Home', route:'/'},
        {title:'About Us', route:'about-us'},
        {title:'Contact', route:'contact'},
        {title:'Login', route:'login'},
        {title:'Events', route:'events'},

      ]
    }
  }

}
</script>

<style scoped>

</style>