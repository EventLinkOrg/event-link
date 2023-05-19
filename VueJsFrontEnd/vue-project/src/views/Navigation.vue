<template>
     <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" width="30" height="50">
        <img src="../assets/EventLogo.svg" alt="Bootstrap" width="100" height="50">
    </a>    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" :to="{name: 'Home'}">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'About'}">About us</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'EventsCard'}">Events</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Contact'}">Contact Us</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Dashboard'}">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Login'}">Login/Register</router-link>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link disabled">Link</a>
        </li> -->
      </ul>
      <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
  
</nav>
</template>

<script>
export default {
    name: 'Navigation',

}
</script>

<style>


</style>