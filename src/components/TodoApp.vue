<template>
  <div class="container" @keydown.esc="close">
    <Form />
    <TodoList
        :todos="filteredTodos"
        @removeInStorage="removeTodo"
        @doneInStorage="saveTodos"
    />
    <div class="buttons-holder">
      <button @click="saveTodos">save</button>
      <button @click="showModal = true">show</button>
      <button @click="showActive">active</button>
      <button @click="showClosed">closed</button>
      <button @click="showAll">all</button>
    </div>
    <div class="overlay" v-if="showModal" @click="showModal = false"/>
    <Modal
        :showModal="showModal"
        v-on:hideModal="close"
    />
  </div>
</template>

<script>
import Form from "@/components/Form";
import TodoList from "@/components/TodoList";
import Modal from "@/components/Modal";
import {mapMutations ,mapGetters} from "vuex";

export default {
  name: 'todo-app',
  components: {
    Modal,
    Form,
    TodoList
  },
  data: function () {
    return {
      showModal: false,
      isActive: null,
      filterKey: '',
    }
  },
  computed: {
    ...mapGetters(['TODOS']),
    filteredTodos() {
      return this.TODOS.filter((item) => {
        switch (this.filterKey) {
          case '':
            return true;
          case 'done':
            return item.itemState === 'done';
          case 'active':
            return item.itemState === 'active'
        }
      } )
    }
  },
  methods: {
    ...mapMutations(['remove_todo', 'save_todos']),
    removeTodo(id){
      this.remove_todo(id)
    },
    saveTodos() {
      this.save_todos()
    },
    close: function () {
      this.showModal = false
    },
    showActive: function (){
      this.filterKey = 'active'
    },
    showClosed: function (){
      this.filterKey = 'done'
    },
    showAll: function (){
      this.filterKey = ''
    }
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}
.container{
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin: auto;
}
.buttons-holder{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
button {
  background-color: #86a8e7;
  border: none;
  color: white;
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: Bad Script;
  font-size: 15px;
  border-radius: 4px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;
  width: 70px;
  min-height: 50px;
}
button:hover{
  background-color: white;
  color: black;
  border: 2px solid #86a8e7;
}
</style>
