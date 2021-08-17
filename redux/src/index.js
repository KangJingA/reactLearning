import store from "./store";
import { bugAdded } from "./actions";
// callback function gets called everytime the state of the store chagnes
// everytime the state changes, can refresh the UI
// UI components should subscribe to the store
const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});

store.dispatch(bugAdded("Bug 1"));

// should unsubscribe whenever you move out of the UI

console.log(store.getState());
