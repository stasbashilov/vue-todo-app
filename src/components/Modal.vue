<template>
  <div class="modal" v-if="showModal">
    <button
        class="close"
        @click="closeModal"
    >
      x
    </button>
    <h3>Title</h3>
    <p>Description</p>
  </div>
</template>

<script>

export default {
  name: 'modal',
  props: ['showModal'],
  data: function () {
    return {

    }
  },
  methods: {
    closeModal: function () {
      this.$emit('hideModal')
    }
  }
}
</script>

<style scoped>
.modal {
  position: relative;
  width: 300px;
  z-index: 9999;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
}

.close{
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
