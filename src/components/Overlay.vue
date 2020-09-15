<template>
  <div id="overlay">
    <transition name="fade">
      <SketchfabViewer v-if="sketchfabOpen" @close="this.disableSketchfab" :uid="'e1985362fc304c6a99a3c0787f1ce9fa'" />
    </transition>
  </div>
</template>
<script>
import SketchfabViewer from "./SketchfabViewer";
export default {
  components: {
    SketchfabViewer,
  },
  data() {
    return {
      sketchfabOpen: false,
    };
  },
  methods: {
    enableSketchfab() {
      this.sketchfabOpen = true;
    },
    disableSketchfab() {
      this.sketchfabOpen = false;
    },
  },
  mounted() {
    window.enableSketchfab = this.enableSketchfab;
    window.disableSketchfab = this.disableSketchfab;
  },
};
</script>
<style lang="scss" scoped>
#overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>