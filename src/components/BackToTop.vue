<template>
  <div>
    <Transition>
      <div
        class="text-end"
        style="position: fixed; right: 5vw; bottom: 5vh"
        v-show="scY > 300"
      >
        <a href="#" class="btn btn-secondary">
          <b-icon-chevron-up></b-icon-chevron-up>
        </a>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
