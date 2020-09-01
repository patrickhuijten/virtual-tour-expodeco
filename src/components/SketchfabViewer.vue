<template>
  <div id="sketchfab-viewer">
    <div class="sketchfab-embed-wrapper">
      <iframe
        id="sketchfab-embed"
        title="A 3D model"
        :src="src"
        frameborder="0"
        allow="autoplay; fullscreen; vr"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      ></iframe>
    </div>
    <div class="backdrop" @click="$emit('close')" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      src: "",
      uid: "e1985362fc304c6a99a3c0787f1ce9fa",

      //   src: 'https://sketchfab.com/models/e1985362fc304c6a99a3c0787f1ce9fa/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1',
      client: null,
      iframe: null,
    };
  },
  methods: {
    initialize() {
      this.client.init(this.uid, {
        success: function onSuccess(api) {
            console.log('hello')
          api.start();
          api.addEventListener("viewerready", function () {
            // API is ready to use
            // Insert your code here
            console.log("Viewer is ready");
          });
          api.addEventListener("annotationFocus", function (index) {
            console.log(index);
          });
        },
        error: function onError() {
          console.log("Viewer error");
        },
      });
    },
  },
  mounted() {
    this.iframe = document.getElementById("sketchfab-embed");
    this.client = new window.Sketchfab(this.iframe);
    this.initialize();
  },
};
</script>
<style lang="scss" scoped>
#sketchfab-viewer {
  position: absolute;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

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
    padding: 20px;
    background: white;
    iframe {
      width: 100%;
      height: 100%;
    }
  }

  .backdrop {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>