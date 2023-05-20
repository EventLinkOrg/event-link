  <template>
<div class="app-wraper">
  <div class="app">
   <Navigation/>
<router-view/>   
<Footer v-if="showFooter" />
  </div>
</div>
<!-- </div> -->
  </template>





<script >
import Footer from './views/Footer.vue';
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
    router,
    Footer

  },
  data() {
    return {
      showFooter: false
    };
  },
  watch: {
    $route(to) {
      // Check the route and update the showFooter value accordingly
      if (to.name === 'Dashboard' || to.name === 'Profile-Settings') {
        this.showFooter = false;
      } else {
        this.showFooter = true;
      }
    }
  },


  computed: {
    showCarousel() {
      return this.$route.name === 'carousel';
    }
  }
  
}

</script>



<style>

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

.Footer {
  position: relative;
  bottom: 0;
  width: 100%;
}

 /* body{
  display: flex;
  flex-direction:column;
  height: auto;
}  */

</style>
