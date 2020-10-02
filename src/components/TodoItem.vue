<template>
  <div class="todoItem">
    <router-link :to="`todo/${todo.id}`">
      <span :class="{resolved: todo.itemState === 'done'}" >{{todo.title}}</span>
    </router-link>
    <div class="buttons-holder">
      <button @click="onRemoveItem(todo.id)">remove</button>
      <button @click="onDoneItem(todo.id)">close</button>
    </div>
  </div>
</template>

<script>


export default {
  name: 'todo-item',
  props: ['todo', 'id', 'isLink'],
  methods: {
    onRemoveItem: function (id) {
      this.$emit('removeItem', id)
    },
    onDoneItem: function (id) {
      this.$emit('doneItem', id)
    },
  },
}
</script>

<style scoped>
  .todoItem{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-style: italic;
    color: darkolivegreen;
  }
  .buttons-holder{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .resolved{
    text-decoration: line-through;
  }
</style>
