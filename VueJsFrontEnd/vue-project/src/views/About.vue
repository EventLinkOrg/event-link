<template>
  <v-card class="about-us">
    <v-card-title class="text-center">
      <h2>About Us</h2>
    </v-card-title>
    <v-card-text class="content">
      <p class="description">We are a team of passionate developers who love building amazing web applications using the latest technologies.</p>
      <p class="description">Our mission is to help businesses achieve their goals by providing innovative solutions that deliver real results.</p>
    </v-card-text>

    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="eventPic"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

  </v-card>
</template>

<script>
import eventPic from '../assets/EventsPhoto/EventPic.jpg'
// import { aliases, mdi } from 'vuetify/iconsets/mdi'




export default {
 name: 'About',

// //  icons: {
//     defaultSet: 'mdi',
//     aliases,
//     sets: {
//       mdi,
//     }
//   },

    data(){
        return{
            eventPic: eventPic,
            show: false,
        }
    },

   
  

}
</script>

<style scoped>
.about-us {
  padding: 64px 0;
}

.about-us h2 {
  font-size: 32px;
  font-weight: bold;
}
.content {
    margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.description {
  font-size: 18px;
  line-height: 0.5;
  text-align: center;
  margin-bottom: 32px;
}

.media {
  position: relative;
  padding: 0;
}

.event-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
}

.event-description {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 32px;
}

</style>

