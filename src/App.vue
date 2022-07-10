<template>
  <div id="app">
    <nav
      class="navbar navbar-expand-lg navbar-dark fixed-top shadow py-0"
      :class="isShow"
    >
      <div class="container-fluid justify-content-between">
        <a class="navbar-brand oswald fw-bold mx-3" href="#">CR.</a>
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
              <a class="nav-link" href="#about">Sobre Claudio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#galery">Galerías</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#collection">Colecciones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#reviews">Reseñas</a>
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
    <router-view />
    <BackToTop />
    <footer class="navbar navbar-expand-lg navbar-dark bg-dark">
      Contacto (1 subpágina: correo electrónico e instagram)
    </footer>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import BackToTop from "@/components/BackToTop.vue";
export default {
  name: "app",
  data() {
    return {
      isShow: "",
    };
  },
  components: {
    BackToTop,
  },
  methods: {
    ...mapActions(["getImages", "getMetaData"]),
    watchScroll() {
      if (window.scrollY > 350) {
        return "dark-bg";
      } else return "bg-transparent";
    },
  },
  computed: {
    ...mapState(["material"]),
  },
  created() {
    this.getImages();
    this.getMetaData();
    window.addEventListener("scroll", () => {
      this.isShow = this.watchScroll();
    });
  },
};
</script>
<style lang="scss">
*,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  position: relative;
}
footer {
  position: absolute;
  bottom: 0;
}
nav {
  transition: all 0.8s ease-in-out;
}
.dark-bg {
  background-color: $color-dark;
}
</style>
<style lang="scss" scoped>
.navbar-expand-lg .navbar-nav .dropdown-menu {
  @media (min-width: 992px) {
    position: absolute;
    left: -120px;
  }
}
.navbar-brand {
  font-size: 1.7rem;
}
</style>
