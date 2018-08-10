export default {
  all: (items) => items,
  active: (items) => items.filter((x) => !x.isComplete),
  complete: (items) => items.filter((x) => x.isComplete)
};
