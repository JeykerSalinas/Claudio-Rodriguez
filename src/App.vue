<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div class="container-fluid justify-content-between">
        <a class="navbar-brand" href="#"
          >Claudio Rodríguez Hola soy develop, hola funciono extraño</a
        >
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
        <div
          class="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav px-4">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#galery">Galerías</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#collection">Colecciones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">Sobre Claudio</a>
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
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>

                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />
    <footer class="navbar navbar-expand-lg navbar-dark bg-dark">
      Contacto (1 subpágina: correo electrónico e instagram)
    </footer>
  </div>
</template>

<style>
*,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  margin-top: 56px;
}
</style>
