<template>
  <div class="main">
    <input type="checkbox" class="todo__checkbox todo__toggle-all" />
    <ul class="todo-list">
      <todo-list-item 
        v-for="todo in items" 
        :key="todo.id" 
        :item="todo"
        v-on:remove="$emit('onRemove')"
      >
      </todo-list-item>
    </ul>
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem.vue';

export default {
  name: 'TodoList',
  props: {
    items: Array
  },
  components: {
    TodoListItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
}
.todo__toggle-all {
  position: absolute;
  top: -55px;
  left: -12px;
  width: 60px;
  height: 34px;
  text-align: center;
  border: none;
  margin: 0;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-appearance: none;
  appearance: none;
}
.todo__toggle-all:before {
  content: '❯';
  font-size: 22px;
  color: #e6e6e6;
  padding: 10px 27px 10px 27px;
}
.todo__toggle-all:checked:before {
  color: #737373;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
