<template>
  <section class="home">
    <header>
      <h1>todos</h1>
      <input 
        type="text" 
        class="new-todo" 
        v-model="text" 
        placeholder="What do you need to do?" 
        autocomplete="off"
        autofocus="autofocus"
      />
    </header>
    <TodoList v-bind:items="todos"/>
    <footer></footer>
  </section>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'home',
  components: {
    TodoList
  },
  data: function() {
    return {
      text: '',
      todos: [
        { id: 1, text: 'buy milk', isComplete: false },
        { id: 2, text: 'buy paper', isComplete: false },
        { id: 3, text: 'read paper', isComplete: false }
      ]
    };
  },
  methods: {}
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
