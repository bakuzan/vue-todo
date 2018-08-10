<template>
  <div class="main">
    <input 
      type="checkbox" 
      class="todo__checkbox todo__toggle-all" 
      v-model="allChecked"
    />
    <ul class="todo-list">
      <todo-list-item 
        v-for="todo in filteredTodos" 
        :key="todo.id" 
        :item="todo"
        :is-edit="isEditing(todo.id)"
        @edit="onEdit"
        @update="onUpdate"
        @cancel="onCancel"
        @remove="onRemove"
      >
      </todo-list-item>
    </ul>
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem.vue';
import filters from '@/utils/filters';

export default {
  name: 'TodoList',
  components: {
    TodoListItem
  },
  props: {
    items: Array,
    filter: String,
    editItem: Object
  },
  computed: {
    filteredTodos: function() {
      return filters[this.filter](this.items);
    },
    remaining: function() {
      return filters.active(this.items).length;
    },
    allChecked: {
      get: function() {
        return this.remaining === 0;
      },
      set: function(value) {
        this.items.forEach(function(todo) {
          todo.isComplete = value;
        });
      }
    }
  },
  methods: {
    isEditing: function(id) {
      return !!(this.editItem && this.editItem.id === id);
    },
    onEdit: function(id) {
      this.$emit('on-edit', id);
    },
    onUpdate: function(id, event) {
      console.log('UPDATE CALLED BY ', event);
      this.$emit('on-update', id);
    },
    onCancel: function(todo, event) {
      console.log('cancelled!', event);
      this.$emit('on-cancel', todo);
    },
    onRemove: function(id) {
      this.$emit('on-remove', id);
    }
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
