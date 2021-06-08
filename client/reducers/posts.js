export default function (state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index

      return [
        ...state.slice(0, i), // before the item we're updating
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1) // after the item we're updating
      ]
  }

  return state;
}