const STORE_KEY = 'bkzn__vue-todo-store';

export default {
  fetch: () => {
    return (
      JSON.parse(localStorage.getItem(STORE_KEY)) || [
        { id: 1, text: 'buy milk', isComplete: false },
        { id: 2, text: 'buy paper', isComplete: false },
        { id: 3, text: 'read paper', isComplete: false }
      ]
    );
  },
  update: (state) => {
    const value = JSON.stringify(state);
    localStorage.setItem(STORE_KEY, value);
  }
};
