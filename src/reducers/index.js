import { createStore, combineRedcers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import account from "./account";

const reducer = combineRedcers({ account });

const store = () => {
  return createStore(reducer, composeWithDevTools);
};

export default store;
