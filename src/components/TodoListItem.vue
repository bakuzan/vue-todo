<template>
  <li v-bind:class="classes">
      <div class="todo__view">
        <input type="checkbox" class="todo__checkbox" v-bind:checked="item.isComplete" />
        <label class="todo__label">
            {{item.text}}
        </label>
        <button class="todo__destroy"></button>
      </div>
  </li>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    item: Object
  },
  computed: {
    classes: function() {
      return {
        todo: true,
        'todo--complete': this.item.isComplete
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo {
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
}
.todo__view {
  display: flex;
}
.todo__label {
  word-break: break-all;
  padding: 15px 60px 15px 15px;
  margin-left: 45px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
}
.todo__checkbox:after {
  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
}
.todo__checkbox:checked:after {
  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
}
.todo__destroy {
  display: none;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
}
.todo:hover .todo__destroy {
  display: block;
}
.todo__destroy:hover {
  color: #af5b5e;
}
.todo__destroy:after {
  content: '×';
}
</style>
