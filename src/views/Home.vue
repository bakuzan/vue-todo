<template>
  <section class="home">
    <header>
      <h1>todos</h1>
      <input 
        type="text" 
        class="new-todo" 
        v-model="newTodo" 
        placeholder="What do you need to do?" 
        autocomplete="off"
        autofocus
        @keyup.enter="addTodo"
      />
    </header>
    <TodoList 
      :items="todos"
      :filter="filter"
      :edit-item="editTodo"
      @on-edit="onEdit"
      @on-update="onUpdate"
      @on-cancel="onCancel"
      @on-remove="onRemove"
      @toggle-all="onToggleAll"
    />
    <Filters
      :count-info="countInfo"
      :active-filter="filter"
      :has-completed="hasCompleted"
      @clear-complete="handleClearComplete"
    ></Filters>
  </section>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue';
import Filters from '@/components/Filters.vue';
import store from '@/utils/store';
import filters from '@/utils/filters';
import * as utils from '@/utils';

export default {
  name: 'home',
  components: {
    TodoList,
    Filters
  },
  data: function() {
    return {
      newTodo: '',
      editTodo: null,
      todos: store.fetch()
    };
  },
  watch: {
    todos: {
      handler: function(todos) {
        store.update(todos);
      },
      deep: true
    }
  },
  computed: {
    filter: function() {
      return this.$route.hash.replace(/.*\//, '');
    },
    countInfo: function() {
      const filteredItems = filters.active(this.todos);
      const number = filteredItems.length;
      return {
        number,
        text: number != 1 ? 'items left' : 'item left'
      };
    },
    hasCompleted: function() {
      return !!filters.complete(this.todos).length;
    }
  },
  methods: {
    onToggleAll: function() {
      const allTrue = this.todos.every((x) => x.isComplete);
      this.todos.forEach((t) => (t.isComplete = !allTrue));
    },
    addTodo: function() {
      const value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }
      console.log('add');

      this.todos.push({
        id: utils.uniqueId(),
        text: this.newTodo,
        isComplete: false
      });
      this.newTodo = '';
    },
    onEdit: function(id) {
      console.log('edit', id);
      const todo = this.todos.find((x) => x.id === id);
      this.editTodo = todo;
    },
    onUpdate: function(id) {
      console.log('update', id);
      if (!this.editTodo) return;

      const todo = this.todos.find((x) => x.id === id);
      todo.text = todo.text.trim();
      if (!todo.text) {
        this.onRemove(todo.id);
      }
      this.editTodo = null;
    },
    onCancel: function(todo) {
      console.log('cancel', todo);
      const oldValue = this.editTodo.text;
      this.editTodo = null;
      todo.text = oldValue;
    },
    onRemove: function(id) {
      console.log('remove', id);
      const index = this.todos.findIndex((x) => x.id === id);
      this.todos.splice(index, 1);
    },
    handleClearComplete: function() {
      this.todos = filters.active(this.todos);
    }
  }
};
</script>

<style>
:focus {
  outline: 0;
}
.home {
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
h1 {
  position: absolute;
  top: -200px;
  width: 100%;
  font-size: 8em;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}
.new-todo,
.edit {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.new-todo {
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}

.todo__checkbox {
  text-align: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  -webkit-appearance: none;
  appearance: none;
  background: none;
}

button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  -webkit-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
