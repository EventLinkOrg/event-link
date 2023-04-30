<template>
  <div> 
    <Navigation/>
<!-- <Carousel/> -->
     <router-view/>



  </div>

</template>





<script >

import About from './views/About.vue'
import Navigation from './views/Navigation.vue'
import Home from './views/Home.vue'
import router from './router'
export default{
  name:'App',
  components: {
    Home,
    About,
    Navigation,
    router

  },
  computed: {
    showCarousel() {
      return this.$route.name === 'carousel';
    }
  }
  
}

</script>



<style scoped>


</style>
