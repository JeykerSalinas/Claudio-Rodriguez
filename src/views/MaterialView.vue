<template>
  <div>
    <h2>{{ myMaterial.main }}</h2>
    <div class="galery d-flex flex-wrap justify-content-center">
      <div
        v-for="(item, i) in myMaterial.files"
        :key="i"
        class="material"
        :style="`background-image: url('img/CATALOGOS Y LIBROS/${myMaterial.main}/${item}')`"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MaterialView",
  computed: {
    ...mapState(["material"]),
    myMaterial() {
      return this.material.find(
        (mat) => mat.main === this.$route.params.material
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.galery {
  gap: 20px;
  .material {
    width: 20vw;
    height: 20vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
