<template>
  <div id="overlay">
    <transition name="fade">
      <SketchfabViewer v-if="sketchfabOpen" @close="this.disableSketchfab" :uid="'f247bc5818e445e4a51b092a3e584148'" />
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