  <template>
  <div>
      <Navigation/>
  <div>
      
  <router-view></router-view>
  </div>

      <Footer/>

  </div>
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
  computed: {
    showCarousel() {
      return this.$route.name === 'carousel';
    }
  }
  
}

</script>



<style>
/* body{
  display: flex;
  flex-direction:column;
  height: auto;
} */

</style>
