<template>
  <div class="page-holder align-items-center bg-gray-100 vh-100">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 px-lg-4" >
              <div class="card">
                <div class="card-header px-lg-5">
                  <div class="card-heading text-primary">EventLink Register</div>
                </div>
                <div class="card-body p-lg-5">
                  <h3 class="mb-4">Register to EventLink</h3>
                  <p class="text-muted text-sm mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                  <form id="loginForm" action="index.html">
                    <div class="form-floating mb-3">
                      <input class="form-control" id="floatingInput" type="text" placeholder="name@example.com" required>
                      <label for="floatingInput">Name</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input class="form-control" id="floatingInput" type="text" placeholder="name@example.com" required>
                      <label for="floatingInput">Surname</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input class="form-control" id="floatingInput" type="email" placeholder="name@example.com" required>
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input class="form-control" id="floatingPassword" type="password" placeholder="Password" required>
                      <label for="floatingPassword">Password</label>
                    </div>
                    <div class="form-check mb-3">
                      <input class="form-check-input" type="checkbox" name="remember" id="remember">
                      <label class="form-check-label" for="remember">Remember me</label>
                    </div>
                    <button class="btn" type="button">Submit<span></span></button>
                  </form>
                </div>
                <div class="card-footer px-lg-5 py-lg-4">
                  <div class="text text-muted">Already have an account? <router-link :to="{name: 'Login'}">Login</router-link>.</div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-5 ms-xl-auto px-lg-4 text-center text-primary"><img class="img-fluid mb-4" width="300" src="../assets/EventLogo.svg" alt="" style="transform: rotate(10deg)">
              <h1 class="mb-4">EventLink <br class="d-none d-lg-inline">Take your best Event.</h1>
              <p class="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            </div>
            </div>
    </div>
        
      
    
</template>

<script>
export default {
name: 'Register',
}
</script>

<style scoped>

button {
  border: none;
  display: block;
  position: relative;
  padding: 0.7em 2.4em;
  font-size: 18px;
  background: transparent;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  color: royalblue;
  z-index: 1;
  font-family: inherit;
  font-weight: 500;
}

button span {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: -1;
  border: 4px solid royalblue;
}

button span::before {
  content: "";
  display: block;
  position: absolute;
  width: 8%;
  height: 500%;
  background: var(--lightgray);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-60deg);
  transition: all 0.3s;
}

button:hover span::before {
  transform: translate(-50%, -50%) rotate(-90deg);
  width: 100%;
  background: rgb(133, 162, 247);
}

button:hover {
  color: white;
}

button:active span::before {
  background: #354faa;
}









/* .button {
  height: 50px;
  width: 150px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.button:hover {
  box-shadow: .5px .5px 150px #252525;
}

.type1::after {
  content: "Enjoy";
  height: 50px;
  width: 150px;
  background-color: #008080;
  color: #fff;
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translateY(50px);
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
}

.type1::before {
  content: "Submit";
  height: 50px;
  width: 150px;
  background-color: #fff;
  color: #008080;
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translateY(0px) scale(1.2);
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
}

.type1:hover::after {
  transform: translateY(0) scale(1.2);
}

.type1:hover::before {
  transform: translateY(-50px) scale(0) rotate(120deg);
} */


/* ===================================== 
*/



 .card-header:first-child {
  border-radius: calc(2rem - 1px) calc(1rem - 1px) 0 0;
}
.card-header {

  position: relative;
  padding: 2rem 2rem;
  border-bottom: none;
  background-color: white;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
  z-index: 2;
}
.card {
   
  margin-top: 100px;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: none;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  border-radius: 1rem;
}
.bg-gray-100 {
  background-color: #f8f9fa !important;
}
body{
 
  font-family: 'Poppins'!important;
}
.text-primary {
  color: #4650dd !important;
}
h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
 
  font-weight: 700;
  line-height: 1.2;
}
.text-muted {
  color: #6c757d !important;
}
.lead {
  font-size: 1.125rem;
  font-weight: 300;
}
.text-sm {
  font-size: .7875rem !important;
}
h3, .h3 {
  font-size: 1.575rem;
}
.page-holder {
  display: flex;
  overflow-x: hidden;
  width: 100%;
  min-height: calc(100vh - 72px);
flex-wrap: wrap;
}
a {
  color: #4650dd!important;
  text-decoration: underline!important;
  cursor: pointer;
}

</style>