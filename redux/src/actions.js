import * as actions from "./actionTypes";

// think about the action first before the reducer

// action creators to generator the actiob object
// for cleaner code
export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description,
  },
});

export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id: id, // can just be id
  },
});
