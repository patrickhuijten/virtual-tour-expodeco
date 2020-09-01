<template>
  <div id="pano" />
</template>

<script>
export default {
  data() {
    return {
      panorama: null,
    };
  },
  methods: {
    register() {
      const plugin = document.createElement("script");
      plugin.setAttribute("src", "./tour.js");
      document.body.appendChild(plugin);
    },
    initialize() {
      setTimeout(() => {
        window.embedpano({
          swf: "tour.swf",
          xml: "tour.xml",
          target: "pano",
          html5: "auto",
          mobilescale: 1.0,
          passQueryParameters: true,
          bgcolor: "#5f5050",
          onready: (context) => {
            this.panorama = context
          }
        });
      }, 1000);
    },
  },
  mounted() {
    this.register();
    this.initialize();
  },
};
</script>
<style lang="scss" scoped>
#pano {
  width: 100%;
  height: 100%;
}
</style>