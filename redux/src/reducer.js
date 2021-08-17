import * as actions from "./actionTypes";
let lastId = 0;

// reducer is a pure function
export default function reducer(state = [], action) {
  if (action.type === actions.BUG_ADDED) {
    // return the new state
    return [
      ...state, // copy all the bugs in the current state. can use the immutable libraries
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type === actions.BUG_REMOVED) {
    // return everything except for the bug that you want removed
    return state.filter((bug) => bug.id !== action.payload.id);
  } else if (action.type === actions.BUG_RESOLVED) {
    return state.map((bug) =>
      bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
    );
  }

  return state;
}
