<template>
  <div id="sketchfab-viewer">
    <CloseButton @close="$emit('close')" />
    <div class="sketchfab-embed-wrapper">
      <iframe
        id="sketchfab-embed"
        ref="sketchfab-embed"
        title="A 3D model"
        :src="''"
        frameborder="0"
        allow="autoplay; fullscreen; vr"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      ></iframe>
      <transition name="slide-fade">
        <ImageViewer
          v-if="object_id !== null"
          :object_data="object_data"
          @close="object_id = null"
        />
      </transition>
    </div>

    <div class="backdrop" @click="$emit('close')" />
  </div>
</template>
<script>
import { stand_data } from "../data/stand_data";
import ImageViewer from "./ImageViewer";
import CloseButton from "./CloseButton";

export default {
  components: {
    ImageViewer,
    CloseButton,
  },
  props: {
    uid: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      object_data: null,
      iframe: null,
      object_id: null,
      stand_data: null,
    };
  },
  watch: {
    uid: {
      immediate: true,
      handler(val) {
        this.$nextTick(() => {
          if (val) this.selectStand(val);
        });
      },
    },
  },
  methods: {
    selectStand(uid) {
      this.stand_data = stand_data.stands[uid];
      window.initialize(uid);
    },
    annotationCallback(id) {
      console.log(id);
      if (id >= 0) {
        this.object_id = id;
        this.object_data = this.stand_data.objects[this.object_id.toString()];
      } else {
        this.object_id = null
      }
    },
    configure() {
      this.iframe = this.$refs["sketchfab-embed"];
      window.sketchfabClient = new window.Sketchfab(this.iframe);
      window.annotationCallback = this.annotationCallback;
    },
  },
  mounted() {
    this.configure();
  },
};
</script>
<style lang="scss" scoped>
#sketchfab-viewer {
  position: absolute;

  z-index: 1;
  width: 100%;
  height: 100%;

  .sketchfab-embed-wrapper {
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 200px);
    height: calc(100% - 200px);
    border: white solid 1px;
    background: white;
    @include box-shadow;
    overflow: hidden;

    iframe {
      width: 100%;
      height: calc(100% + 2px);
      z-index: 999;
    }
  }

  .backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>