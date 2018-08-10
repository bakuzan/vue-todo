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
    activeFilter: String
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
</style>
