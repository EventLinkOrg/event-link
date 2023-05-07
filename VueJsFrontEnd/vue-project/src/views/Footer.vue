<template>
 <footer class="bg-gray-800 text-white">
    <div class="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap justify-between">
        <div class="w-full sm:w-auto mb-6 sm:mb-0">
          <h3 class="text-lg font-medium">Follow Us</h3>
          <div class="flex mt-2">
            <a href="#" class="text-gray-400 hover:text-gray-300 transition duration-150 ease-in-out mr-4">
              <span class="sr-only">Twitter</span>
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-300 transition duration-150 ease-in-out mr-4">
              <span class="sr-only">Facebook</span>
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-300 transition duration-150 ease-in-out mr-4">
              <span class="sr-only">Instagram</span>
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div class="w-full sm:w-auto mb-6 sm:mb-0">
          <h3 class="text-lg font-medium">Contact Us</h3>
          <div class="flex mt-2">
            <a href="#" class="text-gray-400 hover:text-gray-300 transition duration-150 ease-in-out mr-4">
              <span class="sr-only">Email</span>
              <i class="fas fa-envelope"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-300 transition duration-150 ease-in-out mr-4">
              <span class="sr-only">Phone</span>
              <i class="fas fa-phone"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-300 transition duration-150 ease-in-out mr-4">
              <span class="sr-only">Address</span>
              <i class="fas fa-map-marker-alt"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-8 text-sm">
        <p class="text-gray-400">Copyright © 2023
          <a href="#" class="text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out ml-1">My Site Name</a>. All rights reserved.</p>
      </div>
    </div>
  </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
footer {
  background-color: #222;
  color: #fff;
}

footer a {
  color: #ccc;
  transition: color 0.15s ease-in-out;
}

footer a:hover {
  color: #fff;
}

footer h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

footer i {
  font-size: 1.5rem;
  margin-right: 0.5rem;
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
</style>

  