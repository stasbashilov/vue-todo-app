<template>
  <div class="todoList">
    <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @removeItem="remove"
        @doneItem="done"
    />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  name: "todo-list",
  components: {
    TodoItem
  },
  props: ["todos"],
  methods: {
    remove: function (id) {
      this.$emit('removeInStorage', id)
    },
    done: function (id) {
      const doneTodo = this.todos.find((todo) => todo.id === id)
      if(doneTodo.itemState === 'done'){
        doneTodo.itemState = 'active'
      } else if (doneTodo.itemState === 'active'){
        doneTodo.itemState = 'done'
      }
      this.$emit('doneInStorage')
    }
  },
}
</script>

<style scoped>
  .todoList{
    display: flex;
    flex-direction: column;
  }
</style>
