<template>
    <footer>
      <div class="todo-count">
          <strong>{{countInfo.number}}</strong>
          {{countInfo.text}}
      </div>
      <ul class="filters">
          <li>
              <router-link to="#/all" :class="{ selected: activeFilter === 'all' }">All</router-link>
          </li>
          <li>
              <router-link to="#/active" :class="{ selected: activeFilter === 'active' }">Active</router-link>
          </li>
          <li>              
              <router-link to="#/complete" :class="{ selected: activeFilter === 'complete' }">Complete</router-link>
          </li>
      </ul>
      <button 
        class="clear-completed"
        @click="$emit('clear-complete')"
        v-show="hasCompleted"
      >
      Clear Completed
      </button>
    </footer>
</template>

<script>
export default {
  name: 'Filters',
  props: {
    countInfo: Object,
    activeFilter: String,
    hasCompleted: Boolean
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
}
footer:before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}
.todo-count {
  float: left;
  text-align: left;
}
.filters {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
}
.filters li {
  display: inline;
}
.filters li a.selected {
  border-color: rgba(175, 47, 47, 0.2);
}
.filters li a {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}
.clear-completed,
.clear-completed:active {
  float: right;
  position: relative;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
}
.clear-completed:hover {
  text-decoration: underline;
}
</style>
