import Vue from "vue";
import Vuex from "vuex";
import { ref, listAll, getDownloadURL } from "firebase/storage";
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
    reviews: [],
  },
  getters: {},
  mutations: {
    SET_REVIEWS_URLS(state, payload) {
      state.reviews.push(payload);
    },
  },
  actions: {
    async getMetaData({ commit }) {
      const listRef = ref(storage, "/reviews");
      listAll(listRef)
        .then((res) => {
          res.items.forEach((itemRef) => {
            getDownloadURL(ref(storage, itemRef._location.path))
              .then((res) => {
                commit("SET_REVIEWS_URLS", res);
              })
              .catch((err) => console.log(err));
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
