<template>
  <button class="close" @click="$emit('close')" @keydown.esc="$emit('close')" ref="close" >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 299.2 299.2"
      style="enable-background:new 0 0 299.2 299.2;"
      xml:space="preserve"
      class
    >
      <path
        d="M177.2,149.6l122,122l-27.6,27.6l-122-122l-122,122L0,271.7l122-122L0,27.6L27.6,0l122,122l122-122l27.6,27.6L177.2,149.6z"
        fill="#ddd"
      />
    </svg>
  </button>
</template>
<script>
export default {
  mounted() {
    this.$refs['close'].focus()
  }
}
</script>
<style lang="scss" scoped>
  button.close {
    position: absolute;
    top: -50px;
    right: 0;
    background: none;
    border: none;
    outline: none;

    width: 50px;
    height: 50px;
    z-index: 99999;

    svg {
        transform: scale(0.5);
    }
  }
</style>