const { INCREMENT, DECREMENT } = require('./actionTypes');

// increment action
const increment = () => {
  return {
    type: INCREMENT,
  };
};

// decrement action
const decrement = () => {
  return {
    type: DECREMENT,
  };
};

module.exports = {
  increment,
  decrement,
};
