  <template>
  <div id="image-viewer">
    <CloseButton @close="close" />
    <transition name="slide-fade">
      <div class="outside-link" v-if="link_open">
        <CloseButton @close="link_open = false; selected_link = null;" />
        <iframe frameborder="0" :src="selected_link" />
      </div>
    </transition>
    <div class="item-group">
      <div class="item-container" v-for="(item, index) in items" :key="index">
        <div class="image-container">
          <img :src="item.image" />
        </div>
        <div class="text-container" v-if="item">
          <h1 v-text="item.title" />
          <h2 v-text="item.secondary_title" />
          <p v-if="item.text" v-text="item.text" />
          <button
            class="link"
            v-if="item.link"
            v-text="'Discubre mas...'"
            @click="selectLink(item.link)"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseButton from "./CloseButton";

export default {
  components: {
    CloseButton,
  },
  props: {
    object_data: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      link_open: false,
      selected_link: null,
      item_index: 0,
    };
  },
  computed: {
    items() {
      return this.object_data ? this.object_data.items : [];
    },
    current_item() {
      return this.items.length > 0 && this.items.length > this.item_index
        ? this.items[this.item_index]
        : null;
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    selectLink(link) {
      this.selected_link = link;
      this.link_open = true;
    },
  },
};
</script>
<style lang="scss" scoped>
#image-viewer {
  position: absolute;
  top: 60px;
  left: 50px;
  background: white;
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  @include box-shadow;
  .outside-link {
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    z-index: 99999;
  @include box-shadow;

    iframe {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
  .item-group {
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: 100%;
    grid-auto-rows: minmax(400px, 50%);
    grid-auto-flow: row;
    align-content: flex-start;

    padding: 2rem;
    overflow: auto;

    .item-container {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 100%;
      grid-column-gap: 2rem;
      padding-bottom: 2rem;
      .image-container {
        height: 100%;
        background: #eee;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .text-container {
        position: relative;
        width: 100%;
        height: 100%;

        .link {
          position: absolute;
          bottom: 0;
          background: black;
          border: none;
          outline: none;
          color: white;
          padding: 1rem 2rem;
          cursor: pointer;

          -webkit-appearance: none;
          -moz-appearance: none;
        }
      }
    }
  }
}
</style>