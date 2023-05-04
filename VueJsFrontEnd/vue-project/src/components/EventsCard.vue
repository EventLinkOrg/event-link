<template>
  <div class="card-group">
    <div v-for="event in events" :key="event.id" class="card">
      <img :src="event.image" class="card-img-top" alt="Hello">
      <!-- <object :src="event.image" type="image/svg+xml" class="card-img-top"></object> -->

      <div class="card-body">
        <h5 class="card-title">{{ event.title }}</h5>
        <p class="card-text">{{ event.description }}</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated {{ event.lastUpdated }} mins ago</small>
      </div>
    </div>
  </div>
 

</template>

<script>
// import image from '../assets/EventLogo.svg';
export default {
    name: 'EventsCard',
    components: {
      // image,
    },

     data(){
      return {
        
        events: [
        {
          id: 1,
          image: "../assets/EventsPhoto/EventPic.jpg",
          title: "Event 1",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          lastUpdated: 10
        },
        {
          id: 2,
          image: "../assets/EventsPhoto/EventPic.jpg",
          title: "Event 2",
          description: "This card has supporting text below as a natural lead-in to additional content.",
          lastUpdated: 20
        },
        {
          id: 3,
          image: "../assets/EventLogo.svg",
          title: "Event 3",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
          lastUpdated: 30
        },
        {
          id: 4,
          image: "../assets/EventLogo.svg",
          title: "Event 4",
          description: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
          lastUpdated: 40
        }
      ]
      }
     },

     computed: {
        lastUpdated(){
          let time = new Date().getMinutes();
          return time 
        },

      },

}
</script>

<style scoped>

.card-group{
  margin-top: 100px;
}

/* .card-group h2{
  text-align: center;
  text-decoration:underline;
} */


/* *{
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
} */


.card{
  padding: 10px;
  max-width: 500px;
  cursor: pointer;
}
.card-body{
  cursor: pointer;
}


</style>