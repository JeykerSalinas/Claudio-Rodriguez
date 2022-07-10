<template>
  <div id="reviews" class="container-fluid dark-bg py-5">
    <!-- <div class="row">
      <div
        class="col-6 d-flex flex-column justify-content-center align-items-center"
      >
        <Transition>
          <div
            class="big-review"
            :style="`background-image: url(${reviews[0]})`"
            v-if="true"
          ></div>
        </Transition>
      </div>
      <div class="col-6">
        <div class="h-100 d-flex align-items-center p-3">
          <div class="thumbnails-container d-flex flex-wrap">
            <div
              v-for="(image, i) in reviews"
              :key="i"
              class="thumbnails"
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
    </div> -->
    <div>
      <div class="py-3 mb-3">
        <Transition>
          <div
            class="big-review zoom-in mx-auto"
            :style="`background-image: url(${currentImg})`"
            @click="$bvModal.show(`modal-${1}`)"
            v-if="true"
          ></div>
        </Transition>
      </div>
      <div class="d-flex align-items-center justify-content-center mx-3">
        <div>
          <span role="button" class="fw-bold" @click="scroll('left')"
            ><b-icon icon="chevron-left" font-scale="1.5"></b-icon
          ></span>
        </div>
        <div
          id="reviews-container"
          class="reviews-container d-flex overflow-auto py-2 mx-3"
        >
          <div
            class="review-container"
            v-for="(review, i) in reviews"
            :key="review"
          >
            <div
              role="button"
              class="review-card"
              :style="{ 'background-image': 'url(' + review + ')' }"
              @click="setCurrImg(review)"
            ></div>
            <b-modal
              size="xl"
              :scrollable="true"
              :id="`modal-${i}`"
              body-bg-variant="dark"
            >
              <template #modal-header>
                <b-button
                  class="btn btn-close"
                  @click="$bvModal.hide(`modal-${i}`)"
                ></b-button>
              </template>
              <div>
                <img class="w-100" :src="reviews[1]" alt="" />
              </div>
              <template #modal-footer>
                <span></span>
              </template>
            </b-modal>
          </div>
        </div>
        <div>
          <span role="button" class="fw-bold" @click="scroll('right')"
            ><b-icon icon="chevron-right" font-scale="1.5"></b-icon
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ReviewsComponent",
  data() {
    return {
      currentImg: "",
    };
  },
  methods: {
    // toggleImg() {
    //   setInterval(() => {
    //     this.currentImg =
    //       this.indexOfCurrImg === this.images.length - 1
    //         ? this.images[0]
    //         : this.images[this.indexOfCurrImg + 1];
    //   }, 5000);
    // },
    scroll(direction) {
      const reviews = document.getElementById("reviews-container");
      const right = {
        top: 0,
        left: reviews.scrollLeft + 157,
        behavior: "smooth",
      };
      const left = {
        top: 0,
        left: reviews.scrollLeft - 157,
        behavior: "smooth",
      };
      direction === "right" ? reviews.scrollTo(right) : reviews.scrollTo(left);
    },
    setCurrImg(review) {
      this.currentImg = review;
    },
  },
  created() {
    // this.toggleImg();
    this.currentImg = this.reviews[0];
  },
  computed: {
    // currImg() {
    //   return this.currentImg;
    // },
    // indexOfCurrImg() {
    //   return this.images.indexOf(this.currentImg);
    // },
    ...mapState(["reviews"]),
  },
};
</script>

<style lang="scss" scoped>
* {
  color: #fff;
}
.big-review {
  width: 40vw;
  height: 40vw;
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
.reviews-container {
  gap: 14px;
  .review-container {
    .review-card {
      width: 150px;
      height: 150px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transition: all 0.1s ease-in-out;
      opacity: 0.7;
      &:hover {
        transform: scale(1.04);
        opacity: 1;
      }
    }
  }
}
.reviews-container::-webkit-scrollbar {
  height: 4px;
}
.reviews-container::-webkit-scrollbar-thumb {
  background-color: #68645c;
  border-radius: 2px;
}
/* we will explain what these classes do next! */
</style>
