<template>
      <div class="container">
      
      <div class="row justify-content-center mt-5">
        <div class="col-md-5 vh-100">
            <h2 class="justify-content-center">Create account | EventLink</h2>
          <div class="card">
            <div class="card-header bg-primary text-white">
              <h4>Create account</h4>
            </div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="email">Name</label>
                  <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                  <label for="email">Surname</label>
                  <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                </div>

                <div class="form-group">
                  <label for="email">Email address</label>
                  <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
                <p>Already have an account? <router-link class="nav-link" :to="{name: 'Login'}"><b>Login</b></router-link></p>
              </form>
            </div>
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

<style>

</style>