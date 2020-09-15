<template>
  <div id="image-viewer">
    <button class="close" @click="close" />
    <div class="image-container"></div>
    <div class="text-container" v-if="object_data">
      <h1 v-text="object_data.title" />
      <h2 v-text="object_data.secondary_title" />
      <p v-text="object_data.text" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    object_data: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      test: 0,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss" scoped>
#image-viewer {
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 0.5fr;
  grid-column-gap: 2rem;
  align-content: center;
  padding: 2rem;
  button.close {
    position: absolute;
    top: 0;
    right: 0;
    background: red;

    width: 50px;
    height: 50px;
    transform: translateY(-50px);
  }
  .image-container {
    width: 100%;
    height: 100%;
    background: teal;
  }
  .text-container {
    width: 100%;
    height: 100%;
  }
}
</style>