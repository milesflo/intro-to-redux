const actions = {
  INC: 'INCREMENT',
  DEC: 'DECREMENT',
}


function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0
  }
  if (action.type === actions.INC) {
    return state + 1;
  }
  else if (action.type === actions.DEC) {
    return state - 1;
  }
  return state;
}

module.exports = {
  counter,
  actions
}