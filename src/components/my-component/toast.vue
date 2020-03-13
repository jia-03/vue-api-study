<template>
  <div class="toast-wrap" v-if="show">
    <div>{{content}}</div>
    <div>
      <button type="text" @click="callback">知道</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "toast",
  props: {
    content: {
      type: String,
      default: ""
    },
    know: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
        show:true
    };
  },
  methods: {
    callback() {
      this.show = false;
      this.know();
      this.remove();
    },
    remove() {
      setTimeout(() => {
        document.body.removeChild(this.$el);
      }, 300);
    }
  }
};
</script>

<style scoped>
.toast-wrap {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 10px;
}
</style>