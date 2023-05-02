<template>
    
    <div class="container">
      
  <div class="row justify-content-center mt-5">
    <div class="col-md-5 vh-100">
      <div class="card">
        <div class="card-header bg-primary text-white">
          <h4>Login | EventLink</h4>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
            <p>Don't have account yet? <router-link class="nav-link" :to="{name: 'Register'}"><b>Register</b></router-link></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
    name: 'Login'

}
</script>

<style>
.container{
      margin-top: 150px;
      
      
}

/* .card{
 height: 400px;
} */

</style>