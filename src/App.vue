<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div class="container-fluid justify-content-between">
        <a class="navbar-brand" href="#">Claudio Rodríguez</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto px-4 me-5">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#galery">Galerías</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#collection">Colecciones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#about">Sobre Claudio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#reviews">Reseñas</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Catálogos y Libros
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li v-for="(item, i) in material" :key="i">
                  <router-link class="dropdown-item" :to="item.main">{{
                    item.main
                  }}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->
    <router-view />
    <footer class="navbar navbar-expand-lg navbar-dark bg-dark">
      Contacto (1 subpágina: correo electrónico e instagram)
    </footer>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "app",
  methods: {
    ...mapActions(["getImages"]),
  },
  computed: {
    ...mapState(["material"]),
  },
  created() {
    this.getImages();
  },
};
</script>
<style>
*,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  position: relative;
}
#app {
  margin-top: 56px;
}
footer {
  position: absolute;
  bottom: 0;
}
</style>
<style lang="scss" scoped>
.navbar-expand-lg .navbar-nav .dropdown-menu {
  @media (min-width: 992px) {
    position: absolute;
    left: -120px;
  }
}
</style>
