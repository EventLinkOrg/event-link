<template>
<footer class="section-footer border-top bg">
    <div class="container">
      <section class="footer-top  padding-y">
        <div class="row">
          <aside class="col-md col-6">
            <h6 class="title">Help</h6>
            <ul class="list-unstyled">
              <li> <a href="#">Contact us</a></li>
              <li> <a href="#">Money refund</a></li>
              <li> <a href="#">Order status</a></li>
              <li> <a href="#">Event info</a></li>
              <!-- <li> <a href="#">Open dispute</a></li> -->
            </ul>
          </aside>
          <aside class="col-md col-6">
            <h6 class="title">Account</h6>
            <ul class="list-unstyled">
              <li> <a href="#"> User Login </a></li>
              <li> <a href="#"> User register </a></li>
              <li> <a href="#"> Account Setting </a></li>
              <li> <a href="#"> My Orders </a></li>
            </ul>
          </aside>
          <aside class="col-md">
            <h6 class="title">Social</h6>
            <ul class="list-unstyled">
              <li><a href="#"> <i class="fab fa-facebook"></i> Facebook </a></li>
              <li><a href="#"> <i class="fab fa-twitter"></i> Twitter </a></li>
              <li><a href="#"> <i class="fab fa-instagram"></i> Instagram </a></li>
              <li><a href="#"> <i class="fab fa-youtube"></i> Youtube </a></li>
            </ul>
          </aside>
        </div> <!-- row.// -->
      </section>  <!-- footer-top.// -->
  
      <section class="footer-bottom row">
        <div class="col-md-2">
          <p class="text-muted">   2023 EventLink </p>
        </div>
        <div class="col-md-8 text-md-center">
          <span  class="px-2">info@eventlink.com</span>
          <span  class="px-2">+000-000-0000</span>
          <!-- <span  class="px-2">Street name 123, ABC</span> -->
        </div>
        <div class="col-md-2 text-md-end text-muted">
          <i class="fab fa-lg fa-cc-visa"></i> 
          <i class="fab fa-lg fa-cc-paypal"></i> 
          <i class="fab fa-lg fa-cc-mastercard"></i>
        </div>
      </section>
    </div><!-- //container -->
  </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',

    };
  </script>
  
  <style scoped>
 /* footer {
  /* margin-top: auto; */
  /* position: absolute; */
  /* bottom: 0;
  width: 100%;
  height: 200px;
  background-color: #222;
  color: #fff;
  display: flex; */
  /* height: auto; */


 /* footer a {
  color: #ccc;
  transition: color 0.15s ease-in-out;
  text-align: center;
}

footer a:hover {
  color: #fff;
}

footer h3{
    font-size: 1.5rem;
     text-align: center;
     font-weight: 600;
     margin-bottom: 1rem;
    
}
footer i {
    align-items: center ;
    font-size: 1.5rem;
    margin-right: 0.5rem;
    justify-content: center;
    align-items: center;
    display: inline-block;


  }
 
  footer p {
    margin: 1rem 0 0;
  }
  
  @media (min-width: 640px) {
    footer {
      display: flex;
      justify-content: space-between;
    }
  
    footer > div {
      width: 50%;
    }
  
    footer h3 {
      font-size: 1.5rem;
    }
  
    footer i {
      font-size: 1.75rem;
    }
  }  
 */



 footer{
  display: flex;
  background-color: lightgray;
  position: relative;
  bottom: 0;
  width: 100%;
  /* height: auto;
  flex-shrink: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%; */

 }

 li a{
  text-decoration: none;
 }

</style>

