<template>
  <div class="form">
    <div class="form-wrapper">
      <span>My to-do list</span>
      <button @click="addNew">addNew</button>
    </div>
    <input
        type="text"
        v-model="newTodo"
        v-show="ok"
        v-on:keyup.enter="onSubmit"
    />
  </div>
</template>

<script>

import {mapMutations} from "vuex";

export default {
  name: 'Form',
  // props: ["todos"],
  data: function () {
    return {
      newTodo: 'Add New Todo',
      ok: false
    }
  },
  computed: {
  },
  methods: {
    addNew: function () {
      this.ok = !this.ok
    },
    // onSubmit: function(){
    //   if (this.newTodo === 'Add New Todo') {
    //     return;
    //   }
    //   this.todos.push({title:this.newTodo, id: Date.now(), itemState: 'active'});
    //   this.newTodo = '';
    // }
    ...mapMutations(['add_todo']),
    onSubmit(){
      this.add_todo(this.newTodo)
    },
  },
}
</script>

<style scoped>
  .form{
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .form input{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 98%;
  }
  .form-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 22px;
  }
</style>
