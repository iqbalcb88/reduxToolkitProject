const { combineReducers, createStore } = require('redux');
const counterReducer = require('./counter/reducer');

// combineReducers
const rootReducer = combineReducers({
  counter: counterReducer,
});

// store
const store = createStore(rootReducer);

module.exports = store;
