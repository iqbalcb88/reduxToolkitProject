const store = require('./store');
const { increment, decrement } = require('./counter/actions');

// subscribe to store

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch actions

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
