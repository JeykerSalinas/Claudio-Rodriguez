import Vue from "vue";
import Vuex from "vuex";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "@/utils/firebaseconfig";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    material: [
      {
        main: "CATALOGO ARTE FUNDAC POLAR",
        files: ["POLAR01.jpg", "POLAR02.jpg", "POLAR03.jpg", "POLAR04.jpg"],
      },
      {
        main: "ENTRE TROPICOS 1992",
        files: [
          "entretropicos01.jpg",
          "entretropicos02.jpg",
          "entretropicos03.jpg",
          "entretropicos04.jpg",
          "entretropicos05.jpg",
        ],
      },
      {
        main: "FABULADORES DEL COLOR",
        files: ["fabu 01.bmp", "fabu 02.bmp"],
      },
      {
        main: "FAMA 93 94",
        files: ["fama 01.bmp", "fama 02.bmp", "fama 03.bmp", "fama 04.bmp"],
      },
      {
        main: "FAMA CATALOGO GRANDE",
        files: [
          "FAMACAT01.jpg",
          "FAMACAT02.jpg",
          "FAMACAT03.jpg",
          "FAMACAT04.jpg",
          "FAMACAT05.jpg",
          "FAMACAT06.jpg",
          "FAMACAT07.jpg",
          "FAMACAT08.jpg",
          "FAMACAT09.jpg",
          "FAMACAT10.jpg",
          "FAMACAT11.jpg",
          "FAMACAT12.jpg",
          "FAMACAT13.jpg",
        ],
      },
      {
        main: "FESTIVAL",
        files: [
          "FESTIVAL01.jpg",
          "FESTIVAL02.jpg",
          "FESTIVAL03.jpg",
          "FESTIVAL04.jpg",
          "FESTIVAL05.jpg",
          "FESTIVAL06.jpg",
        ],
      },
      {
        main: "I BIENAL ARTES PLASTICAS MERIDA",
        files: [
          "BIENAL 01.bmp",
          "BIENAL 02.bmp",
          "BIENAL 03.bmp",
          "BIENAL 04.bmp",
        ],
      },
      {
        main: "IDENTIDADES",
        files: [
          "IDENTIDADES01.jpg",
          "IDENTIDADES02.jpg",
          "IDENTIDADES03.jpg",
          "IDENTIDADES04.jpg",
          "IDENTIDADES05.jpg",
          "IDENTIDADES06.jpg",
        ],
      },
      {
        main: "II BIENAS ARTES PLASTICAS MRD",
        files: [
          "IIBIENAL01.jpg",
          "IIBIENAL02.jpg",
          "IIBIENAL03.jpg",
          "IIBIENAL04.jpg",
          "IIBIENAL05.jpg",
        ],
      },
      {
        main: "LABERINTOS DE IDENTIDAD",
        files: [
          "LABERINT01.jpg",
          "LABERINT02.jpg",
          "LABERINT03.jpg",
          "LABERINT04.jpg",
          "LABERINT05.jpg",
          "LABERINT06.jpg",
          "LABERINT07.jpg",
          "LABERINT08.jpg",
          "LABERINT09.jpg",
          "LABERINT10.jpg",
          "LABERINT11.jpg",
        ],
      },
      {
        main: "MUSEO ALEJANDRO OTERO",
        files: [
          "YOMISMOY01.bmp",
          "YOMISMOY02.bmp",
          "YOMISMOY03.bmp",
          "YOMISMOY04.bmp",
          "YOMISMOY05.bmp",
        ],
      },
      {
        main: "NUEVAS ADQUISIC MERIDA",
        files: [
          "NUEVASADQUIS01.bmp",
          "NUEVASADQUIS02.bmp",
          "NUEVASADQUIS03.bmp",
        ],
      },
      {
        main: "REFIGURACIONES",
        files: [
          "REFIG01.jpg",
          "REFIG02.jpg",
          "REFIG03.jpg",
          "REFIG04.jpg",
          "REFIG05.jpg",
          "REFIG06.jpg",
          "REFIG07.jpg",
          "REFIG08.jpg",
          "REFIG09.jpg",
          "REFIG09a.jpg",
          "REFIG10.jpg",
          "REFIG11.jpg",
          "REFIG12.jpg",
          "REFIG13.jpg",
          "REFIG14.jpg",
          "REFIG15.jpg",
          "REFIG15a.jpg",
          "REFIG16.jpg",
        ],
      },
      {
        main: "SALON BANCO MERCANT MRD",
        files: ["salonMer01 1986.jpg", "salonMer02y3.jpg", "salonMer04.jpg"],
      },
      {
        main: "SALON NAC AP 1988",
        files: [
          "SNAP01.jpg",
          "SNAP02.jpg",
          "SNAP03.jpg",
          "SNAP04.jpg",
          "SNAP05.jpg",
          "SNAP06.jpg",
          "SNAP07.jpg",
          "SNAP08.jpg",
          "SNAP09.jpg",
          "SNAP10.jpg",
          "SNAP11.jpg",
          "SNAP12.jpg",
          "SNAP13.jpg",
        ],
      },
      {
        main: "SALON PIRELLI",
        files: [
          "PIRELLI01.jpg",
          "PIRELLI02.jpg",
          "PIRELLI03.jpg",
          "PIRELLI04.jpg",
          "PIRELLI05.jpg",
          "PIRELLI06.jpg",
          "PIRELLI07.jpg",
        ],
      },
      {
        main: "SOTAVENTO 1988",
        files: [
          "IMG.psd",
          "SOTA 01.jpg",
          "SOTA 02.jpg",
          "SOTA 03.jpg",
          "SOTA 04.jpg",
          "SOTA 06.jpg",
        ],
      },
      {
        main: "UN SIGLO DE FLORES",
        files: [
          "SIGLO FLORES 01.jpg",
          "SIGLO FLORES 02.jpg",
          "SIGLO FLORES 03.jpg",
          "SIGLO FLORES 04.jpg",
          "SIGLO FLORES 05.jpg",
          "SIGLO FLORES 06.jpg",
          "SIGLO FLORES 07.jpg",
        ],
      },
      { main: "ZOO", files: ["ZOO 01.bmp", "ZOO 02.bmp"] },
    ],
    reviews: [
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
    reviewsUrls: [],
  },
  getters: {},
  mutations: {
    SET_REVIEWS_URLS(state, payload) {
      state.reviewsUrls.push(payload);
    },
  },
  actions: {
    async getImages({ commit, state }) {
      state.reviews.forEach(async (review) => {
        const response = await getDownloadURL(
          ref(storage, `reviews/${review}`)
        );
        try {
          commit("SET_REVIEWS_URLS", response);
        } catch (error) {
          console.log(error);
        }
      });
    },
  },
  modules: {},
});
