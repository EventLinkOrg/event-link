<template>
  <div class="aboutus">
<h2>About us</h2>

<h3>A website app for events is a platform designed to facilitate the planning, organizing, and promotion of events such as conferences, concerts, festivals, trade shows, and other gatherings. The app typically provides a range of features and tools to help event organizers manage various aspects of the event, from ticketing and registration to scheduling, marketing, and post-event analytics.</h3>

<h3 class="popularevents">Some of most popular Events</h3>

<EventsCard/>


</div>


</template>

<script>
import EventsCard from '../components/EventsCard.vue'

export default {
    name: 'About',
    components: {
      EventsCard,
    }

 

}
</script>

<style scoped>

.popularevents{
  text-align: center;
  margin-top: 100px; 
  text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
}

  aboutus {
    position: absolute;

  
}


h2{
  text-align: center;
  margin-top: 100px; 
  text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;

}

h3{
  text-align: center;
  margin-bottom: 50px;

}

@media  (min-width: 400px) {
  aboutus{
    margin-bottom: 800px;
  }
  
}




</style>