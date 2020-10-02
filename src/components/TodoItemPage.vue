<template>
  <div class="todoPage">
    <TodoItem
        :todo="todo"
    />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import {mapGetters} from "vuex";

export default {
  name: "todo-item-page",
  components: {
    TodoItem
  },
  data: function () {
    return {
      todo: {}
    }
  },
  computed: {
    ...mapGetters(['GET_TODO_ITEM']),
  },
  watch: {
    $route: {
      handler: function (route) {
        console.log(route)
        this.todo = this.GET_TODO_ITEM(route.params.id)
        console.log("---------",this.GET_TODO_ITEM(route.params.id))
      },
      immediate: true
    },
  }
}
</script>

<style scoped>

</style>
