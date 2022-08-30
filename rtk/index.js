const store = require('./app/store');

const { counterActions } = require('./features/counter/counterSlice');
const {
  dynamicCounterActions,
} = require('./features/dynamicCounter/dynamicCounterSlice');

// show initial state
// console.log(`initial state: ${JSON.stringify(store.getState())}`);
// console.log('initial state: ', store.getState());

// subscribe to state changes
store.subscribe(() => {
  // console.log(store.getState());
});

store.dispatch(counterActions.increment());
store.dispatch(counterActions.decrement());
store.dispatch(counterActions.increment());
store.dispatch(dynamicCounterActions.increment(2));
store.dispatch(dynamicCounterActions.increment(3));
store.dispatch(dynamicCounterActions.decrement(4));

/* 
console.log(counterActions);
{
  increment: [Function: actionCreator] {
    toString: [Function (anonymous)],
    type: 'counter/increment',
    match: [Function (anonymous)]
  },
  decrement: [Function: actionCreator] {
    toString: [Function (anonymous)],
    type: 'counter/decrement',
    match: [Function (anonymous)]
  }
} */
