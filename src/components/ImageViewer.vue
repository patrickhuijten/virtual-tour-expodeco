<template>
  <div id="image-viewer">
    <button class="close" @click="close">❌</button>
    <div class="image-container">
      <img :src="object_data.image" />
    </div>
    <div class="text-container" v-if="object_data">
      <h1 v-text="object_data.title" />
      <h2 v-text="object_data.secondary_title" />
      <p v-if="object_data.text" v-text="object_data.text" />
      <button
        class="link"
        v-if="object_data.link"
        v-text="'Discubre mas...'"
        @click="link_open = true"
      ></button>

      <transition name="fade">
        <div class="outside-link" v-if="link_open">
          <button class="close" @click="link_open = false">❌</button>
          <iframe :src="object_data.link" />
        </div>
      </transition>
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
      link_open: false,
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
    background: none;
    border-style: none;
    outline: none;

    width: 50px;
    height: 50px;
    transform: translateY(-50px);
    font-size: 2rem;
  }
  .image-container {
    width: 100%;
    height: 100%;
    background: #eee;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .text-container {
    width: 100%;
    height: 100%;

    .link {
      background: black;
      border-style: none;
      outline: none;
      color: white;
    }

    .outside-link {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      iframe {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>