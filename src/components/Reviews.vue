<template>
  <div id="reviews" class="container-fluid bg-dark py-5">
    <div class="row">
      <div
        class="col-6 d-flex flex-column justify-content-center align-items-center"
      >
        <Transition>
          <div
            class="big-review"
            :style="`background-image: url('img/reviews/${currentImg}')`"
            v-if="true"
          ></div>
        </Transition>
        <h4 class="my-3">{{ texts[indexOfCurrImg] }}</h4>
      </div>
      <div class="col-6">
        <div class="h-100 d-flex align-items-center p-3">
          <div class="thumbnails-container d-flex flex-wrap">
            <div
              v-for="(image, i) in reviewsUrls"
              :key="i"
              class="thumbnails"
              :class="i === indexOfCurrImg ? 'current-image' : ''"
              :style="`background-image: url(${image})`"
              @click="$bvModal.show(`modal-${i}`)"
            >
              <b-modal size="xl" :id="`modal-${i}`" title="BootstrapVue">
                <template #modal-header>
                  <b-button class="btn btn-close"></b-button>
                </template>
                <img class="w-100" :src="`${image}`" alt="" />
              </b-modal>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ReviewsComponent",
  data() {
    return {
      images: [
        "1988RevistaDeEconomiaYNegocios.bmp",
        "1988TheDailyJournal30Abril.bmp",
        "1989ElDiarioDeCaracas27DiciembreP24.bmp",
        "1989UltimasNoticias24DiciembreP51.bmp",
        "1990ElNacional19NoviembreCArte.bmp",
        "1990ElNacional27FebreroP.bmp",
        "1990ElUniversal2JunioCulturales.bmp",
        "1990ElUniversal27MayoCulturales.bmp",
        "1991ElNacional2OMarzo.bmp",
        "1991ElNacional15MarzoCulturales.bmp",
        "1991ElNacional17MarzoArte20.bmp",
        "1991ElUniversal13DeMayo.bmp",
        "1991ElUniversal17MarzoP42.bmp",
        "1991ElUniversal24MarzoCulturales.bmp",
        "1991ElUniversal26MarzoPC10.bmp",
        "1992ElNacional9DeOctubrePC18.bmp",
        "1992ElNacional10DeJunioPC12.bmp",
        "1992ElUniversal13OctubreP42.bmp",
        "1994ElUniversal28Enero.bmp",
        "foto_1.bmp",
        "PeriodicoSinIdentificar1986Circa.bmp",
      ],
      texts: [
        "1988 Revista de Economía y Negocios",
        "1988 The Daily Journal 30 Abril",
        "1989 El Diario de Caracas 27 Diciembre P 24",
        "1989 Ultimas Noticias 24 Diciembre P 51",
        "1990 El Nacional 19 Noviembre Carte",
        "1990 El Nacional 27 Febrero P",
        "1990 El Universal 2 Junio Culturales",
        "1990 El Universal 27 Mayo Culturales",
        "1991 El Nacional 2O Marzo",
        "1991 El Nacional 15 Marzo Culturales",
        "1991 El Nacional 17 Marzo Arte 20",
        "1991 El Universal 13 De Mayo",
        "1991 El Universal 17 Marzo P 42",
        "1991 El Universal 24 Marzo Culturales",
        "1991 El Universal 26 Marzo PC 10",
        "1992 El Nacional 9 De Octubre PC 18",
        "1992 El Nacional 10 De Junio PC 12",
        "1992 El Universal 13 Octubre P 42",
        "1994 El Universal 28 Enero",
        "",
        "Periodico Sin Identificar 1986 Circa",
      ],
      currentImg: "1988RevistaDeEconomiaYNegocios.bmp",
    };
  },
  methods: {
    toggleImg() {
      setInterval(() => {
        this.currentImg =
          this.indexOfCurrImg === this.images.length - 1
            ? this.images[0]
            : this.images[this.indexOfCurrImg + 1];
      }, 5000);
    },
  },
  created() {
    this.toggleImg();
  },
  computed: {
    currImg() {
      return this.currentImg;
    },
    indexOfCurrImg() {
      return this.images.indexOf(this.currentImg);
    },
    ...mapState(["reviewsUrls"]),
  },
};
</script>

<style lang="scss" scoped>
* {
  color: #fff;
}
.big-review {
  width: 60%;
  height: 90%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.5s ease-in-out;
}
.thumbnails-container {
  gap: 10px;
  .thumbnails {
    width: 120px;
    height: 200px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  .current-image,
  .thumbnails:hover {
    border: 2px solid grey;
    transform: scale(1.08);
  }
}
</style>
