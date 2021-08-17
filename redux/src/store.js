import { createStore } from "redux";
import reducer from "./reducer";

// pass reducer as an argument
const store = createStore(reducer);

export default store;
