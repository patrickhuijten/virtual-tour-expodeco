<template>
  <div id="overlay">
    <transition name="fade">
      <SketchfabViewer v-if="sketchfabOpen" @close="this.disableSketchfab" :uid="uid" />
    </transition>
  </div>
</template>
<script>
import SketchfabViewer from "./SketchfabViewer"
export default {
  components: {
    SketchfabViewer,
  },
  data() {
    return {
      sketchfabOpen: false,
      uid: null
    };
  },
  methods: {
    enableSketchfab(uid) {
      this.uid = uid
      this.sketchfabOpen = true
      console.log(uid)
    },
    disableSketchfab() {
      this.sketchfabOpen = false
    },
  },
  mounted() {
    window.enableSketchfab = this.enableSketchfab
    window.disableSketchfab = this.disableSketchfab
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