<template>
  <div class="home">
    <div>
      <div
        id="presentation"
        class="d-flex align-items-center justify-content-center"
      >
        <h1 class="pb-5 display-2 oswald">Claudio Rodríguez</h1>
      </div>
      <div class="w-100 d-flex justify-content-center light-bg">
        <div
          class="p-5 d-flex justify-content-center align-items-center flex-column flex-lg-row"
        >
          <div class="m-4 p-lg-5 pe-lg-0">
            <div class="shadow-lg" id="firstPicture"></div>
          </div>
          <div>
            <p
              class="quote m-4 p-lg-5 ps-lg-0 overflow-hidden text-align-justify"
            >
              <!-- eslint-disable-next-line -->
              Para Claudio Rodríguez, la pintura deviene en actividad sanadora,
              en una terapéutica que, a la manera del psicoanálisis, busca en el
              inconsciente el origen de la pérdida del objeto.
              <br />
              <em class="font-italic"
                >“Cada cuadro que hago es la investigación de mí mismo, es un
                conocimiento profundo del yo, es un sentimiento y un pensamiento
                profundo y doloroso de nosotros mismos, yo mismo yo.”</em
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <ReviewsComponent class=""></ReviewsComponent>
    <div id="galery"></div>
    <div id="collection" class=""></div>
  </div>
</template>

<script>
import ReviewsComponent from "@/components/Reviews.vue";
export default {
  name: "HomeView",
  components: {
    ReviewsComponent,
  },
};
</script>
<style lang="scss" scoped>
#presentation {
  background: url("https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/hero.jpg?alt=media&token=d50761af-08ac-4aa2-bd75-0376f3a44a6c");
  background-position-y: -500px;
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: 2000px;
  height: 500px; /*borrar despues*/
}
#galery {
  background-color: #212121;
}
#firstPicture {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/first.png?alt=media&token=e8ac4ab1-59fa-48fa-84cf-3200f725a62b");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 350px;
  width: 450px;
}
h1 {
  font-family: "Nunito", sans-serif;
  color: $color-light;
}
p {
  font-size: 0.8rem;
}
.quote {
  text-align: justify;
  font-size: 1.1rem;
}
</style>
