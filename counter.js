const actions = {
  INC: 'INCREMENT',
  DEC: 'DECREMENT',
}


function counter(state = 0, {type}) {
  switch (type) {
    case actions.INC: {
      return state + 1;
    }
    case actions.DEC: {
      return state - 1;
    }
    default: {
      return state;
    }
  }
}

module.exports = {
  counter,
  actions
}