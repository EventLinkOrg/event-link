<template>


<!-- 
<a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Link with href
</a>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-bs-target
</button> -->

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
        <li><a class="dropdown-item" href="#">Tickets</a></li>
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
  <Users v-if="showUsersComponent" />
  <EventsCard v-if="showEventsComponent"/>


</div>
  </template>


  <script>
  import EventsCard from '../components/EventsCard.vue'
  import Users from '../components/Users.vue'
  export default {
    name: 'Dashboard',
    components: {
        Users,
        EventsCard
    },
    data() {
      return {
        showUsersComponent: false,
        showEventsComponent: false,
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
    },
    toggleEvents() {
      this.showEventsComponent = false; 
    },
    showEvents() {
      this.showEventsComponent = true;
      this.showUsersComponent = false;
    },
    // showComponent(componentName) {
    //   this.showComponent = true;
    //   this.activeComponent = componentName;
    // },
//     computed: {
//     showComponent() {
//     this.showComponent = true;

//       return this.activeComponent;
//     }
//   }
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
  