<template>
  <div class="home">
    <div id="presentation">
      <p>Presentación (1 subpágina) Hero section</p>
    </div>
    <div
      id="galery"
      class="d-md-flex justify-content-around p-5 align-items-center"
    >
      <div class="card bg-dark text-white w-25 h-25 mx-auto">
        <img
          src="https://4.bp.blogspot.com/-IhAGbTZ3osA/UXfo4IVkPaI/AAAAAAABFvU/-gq2rD-C1MY/s1600/pinturas-famosas.jpg"
          class="card-img"
          alt="..."
        />
        <div class="card-img-overlay">
          <h5 class="card-title">Galeria 1</h5>
        </div>
      </div>
      <div class="card bg-dark text-white w-25 h-25 mx-auto">
        <img
          src="https://mymodernmet.com/wp/wp-content/uploads/2020/07/denis-shiryaev-neural-network-art-2.jpg"
          class="card-img"
          alt="..."
        />
        <div class="card-img-overlay">
          <h5 class="card-title">Galeria 2</h5>
        </div>
      </div>
      <div class="card bg-dark text-white w-25 h-25 mx-auto">
        <img
          src="https://i0.wp.com/www.freim.tv/wp-content/uploads/2017/03/la-persistencia-de-la-memoria-salvador-dali-oleo-pintura-D_NQ_NP_954917-MLM27168877544_042018-F.jpg"
          class="card-img"
          alt="..."
        />
        <div class="card-img-overlay">
          <h5 class="card-title">Galeria 3</h5>
        </div>
      </div>
    </div>
    <div id="collection" class="vh-100">
      <p>Algunas colecciones que lo albergan (1 subpágina)</p>
    </div>
    <div id="about" class="vh-100">
      <p>Claudio, calidad expresiva (1 subpágina)</p>
    </div>
    <div id="newspaper" class="vh-100 bg-danger">
      <p>Reseñas en periódicos (18 subpáginas que a su vez..)</p>
    </div>
    <p>
      Catálogos y libros (19 carpetas, que a su vez cada cada una contiene
      varias subpáginas.)
    </p>
    <BackToTop />
  </div>
</template>

<script>
// @ is an alias to /src
import BackToTop from "@/components/BackToTop.vue";
export default {
  name: "HomeView",
  components: {
    BackToTop,
  },
};
</script>
<style scoped>
#presentation {
  background: url("https://simef.cl/imgs_1-966/storage_Arte-moderno-abstracto-famosas-pinturas-de-arte-moderno.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 95vh; /*borrar despues*/
}
#galery {
  background-color: #212121;
}
</style>
