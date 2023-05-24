<template>
  <div class="container">
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-uppercase mb-0">Manage Users</h5>
            </div>
            <div class="table-responsive">
                <table class="table no-wrap user-table mb-0">
                  <thead>
                    <tr>
                      <th scope="col" class="border-0 text-uppercase font-medium pl-4">#</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Name</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Occupation</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Email</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Added</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Category</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Manage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="pl-4">1</td>
                      <td>
                          <h5 class="font-medium mb-0">Daniel Kristeen</h5>
                          <span class="text-muted">Texas, Unitedd states</span>
                      </td>
                      <td>
                          <span class="text-muted">Visual Designer</span><br>
                          <span class="text-muted">Past : teacher</span>
                      </td>
                      <td>
                          <span class="text-muted">daniel@website.com</span><br>
                          <span class="text-muted">999 - 444 - 555</span>
                      </td>
                      <td>
                          <span class="text-muted">15 Mar 1988</span><br>
                          <span class="text-muted">10: 55 AM</span>
                      </td>
                      <td>
                        <select class="form-control category-select" id="exampleFormControlSelect1">
                          <option v-for="role in roles" :key="role">{{ role }}</option>

                        </select>
                      </td>
                      <td>
                        <button v-for="button in buttons" :key="button.icon" type="button" :class="button.class">
                                 <i :class="button.icon"></i>
                            </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="pl-4">2</td>
                      <td>
                          <h5 class="font-medium mb-0">Emma Smith</h5>
                          <span class="text-muted">Texas, Unitedd states</span>
                      </td>
                      <td>
                          <span class="text-muted">Visual Designer</span><br>
                          <span class="text-muted">Past : teacher</span>
                      </td>
                      <td>
                          <span class="text-muted">daniel@website.com</span><br>
                          <span class="text-muted">999 - 444 - 555</span>
                      </td>
                      <td>
                          <span class="text-muted">15 Mar 1855</span><br>
                          <span class="text-muted">10: 00 AM</span>
                      </td>
                      <td>
                        <select class="form-control category-select" id="exampleFormControlSelect1">
                          <option v-for="role in roles" :key="role">{{ role }}</option>

                        </select>
                      </td>
                      <td>
                        <button v-for="button in buttons" :key="button.icon" type="button" :class="button.class">
                                 <i :class="button.icon"></i>
                            </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="pl-4">3</td>
                      <td>
                          <h5 class="font-medium mb-0">Olivia Johnson</h5>
                          <span class="text-muted">Texas, Unitedd states</span>
                      </td>
                      <td>
                          <span class="text-muted">Visual Designer</span><br>
                          <span class="text-muted">Past : teacher</span>
                      </td>
                      <td>
                          <span class="text-muted">daniel@website.com</span><br>
                          <span class="text-muted">999 - 444 - 555</span>
                      </td>
                      <td>
                          <span class="text-muted">17 Aug 1988</span><br>
                          <span class="text-muted">12: 55 AM</span>
                      </td>
                      <td>
                        <select class="form-control category-select" id="exampleFormControlSelect1">
                          <option v-for="role in roles" :key="role">{{ role }}</option>

                        </select>
                      </td>
                      <td>
                        <button v-for="button in buttons" :key="button.icon" type="button" :class="button.class">
                                 <i :class="button.icon"></i>
                            </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="pl-4">4</td>
                      <td>
                          <h5 class="font-medium mb-0">Isabella Williams</h5>
                          <span class="text-muted">Texas, Unitedd states</span>
                      </td>
                      <td>
                          <span class="text-muted">Visual Designer</span><br>
                          <span class="text-muted">Past : teacher</span>
                      </td>
                      <td>
                          <span class="text-muted">daniel@website.com</span><br>
                          <span class="text-muted">999 - 444 - 555</span>
                      </td>
                      <td>
                          <span class="text-muted">26 Mar 1999</span><br>
                          <span class="text-muted">10: 55 AM</span>
                      </td>
                      <td>
                        <select class="form-control category-select" id="exampleFormControlSelect1">
                          <option v-for="role in roles" :key="role">{{ role }}</option>

                        </select>
                      </td>
                      <td>
                        <button v-for="button in buttons" :key="button.icon" type="button" :class="button.class">
                                 <i :class="button.icon"></i>
                            </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="pl-4">5</td>
                      <td>
                          <h5 class="font-medium mb-0">Sophia Jones</h5>
                          <span class="text-muted">Texas, Unitedd states</span>
                      </td>
                      <td>
                          <span class="text-muted">Visual Designer</span><br>
                          <span class="text-muted">Past : teacher</span>
                      </td>
                      <td>
                          <span class="text-muted">daniel@website.com</span><br>
                          <span class="text-muted">999 - 444 - 555</span>
                      </td>
                      <td>
                          <span class="text-muted">16 Aug 2001</span><br>
                          <span class="text-muted">10: 55 AM</span>
                      </td>
                      <td>
                        <select class="form-control category-select" id="exampleFormControlSelect1">
                          <option v-for="role in roles" :key="role">{{ role }}</option>
                   
                        </select>
                      </td>
                      <td>
                        <button v-for="button in buttons" :key="button.icon" type="button" :class="button.class">
                                 <i :class="button.icon"></i>
                            </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="pl-4">6</td>
                      <td>
                          <h5 class="font-medium mb-0">Charlotte Brown</h5>
                          <span class="text-muted">Texas, Unitedd states</span>
                      </td>
                      <td>
                          <span class="text-muted">Visual Designer</span><br>
                          <span class="text-muted">Past : teacher</span>
                      </td>
                      <td>
                          <span class="text-muted">daniel@website.com</span><br>
                          <span class="text-muted">999 - 444 - 555</span>
                      </td>
                      <td>
                          <span class="text-muted">15 Mar 1988</span><br>
                          <span class="text-muted">10: 55 AM</span>
                      </td>
                      <td>
                        <select class="form-control category-select" id="exampleFormControlSelect1">
                          <option v-for="role in roles" :key="role">{{ role }}</option>
                          <!-- <option>User</option> -->
                        </select>
                      </td>
                      <td>
                        <button v-for="button in buttons" :key="button.icon" type="button" :class="button.class">
                                 <i :class="button.icon"></i>
                            </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
// import '@/path/to/font-awesome.min.css';

export default {

  data(){
    return {

      buttons: [
        { class: 'btn btn-outline-info btn-circle btn-lg btn-circle', icon: 'fa fa-key' },
        { class: 'btn btn-outline-info btn-circle btn-lg btn-circle ml-2', icon: 'fa fa-trash' },
        { class: 'btn btn-outline-info btn-circle btn-lg btn-circle ml-2', icon: 'fa fa-edit' },
        { class: 'btn btn-outline-info btn-circle btn-lg btn-circle ml-2', icon: 'fa fa-upload' },
      ],
      roles: ['Admin', 'User'],
  
    }
  },
  

}
</script>

<style>

</style>