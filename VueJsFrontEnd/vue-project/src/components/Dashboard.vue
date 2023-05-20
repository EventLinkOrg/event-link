<template>

<div class="offcanvas.show offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas.show-header">
    <h5 class="offcanvas.show-title" id="offcanvasExampleLabel">EventLink Dashboard</h5>
    <!-- <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> -->
  </div>
  <div class="offcanvas.show-body">
    <!-- <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div> -->
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
       MENU
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#"  @click="showUsers">Users</a></li>
        <li><a class="dropdown-item" href="#" @click="showEvents">Events</a></li>
        <li><a class="dropdown-item" href="#" @click="showTickets">Tickets</a></li>
    
      </ul>
    </div>
  </div>
  <Users v-if="showUsersComponent" />
  <EventsCard v-if="showEventsComponent"/>
  <Tickets v-if="showTicketsComponent"/>


</div>
  </template>


  <script>
  import EventsCard from '../components/EventsCard.vue'
  import Users from '../components/Users.vue'
  import Tickets from '../components/Tickets.vue'
  export default {
    name: 'Dashboard',
    components: {
        Users,
        EventsCard,
        Tickets,
    },
    data() {
      return {
        showUsersComponent: false,
        showEventsComponent: false,
        showTicketsComponent: false,
    //     showComponent: false,
    //   activeComponent: null,
      };

    },
    methods: {
    toggleUsers() {
      this.showUsersComponent = false; 
    },
    showUsers() {
      this.showUsersComponent = true;
      this.showEventsComponent = false;
      this.showTicketsComponent = false;
    },
    toggleEvents() {
      this.showEventsComponent = false; 
    },
    showEvents() {
      this.showEventsComponent = true;
      this.showUsersComponent = false;
      this.showTicketsComponent = false;
    },
    toggleTickets() {
      this.showTicketsComponent = false;
    },
    showTickets() {
      this.showTicketsComponent = true;
      this.showUsersComponent = false;
      this.showEventsComponent = false;
    }
  },





  };
  </script>
  
  <style scoped>

#offcanvasExampleLabel{
    text-align: center;
    font-size: 40px;

}

#offcanvasExample{

  margin-top: 100px;
  width: 100%;
}

.btn{
    width: 100%;
    font-size: 30px;
}
.dropdown{
    width: auto;

}
.dropdown-menu{
    width: 100%;
    font-size: 20px;
}

  </style>
  