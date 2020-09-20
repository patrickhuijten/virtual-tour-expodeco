<template>
  <div id="app">
    <Overlay />
    <Panorama />
  </div>
</template>

<script>
import Panorama from "./components/Panorama";
import Overlay from "./components/Overlay";
export default {
  name: "App",
  components: {
    Panorama,
    Overlay,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  overflow: hidden;
}
#app {
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
