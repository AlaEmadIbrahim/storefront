import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import categories from "./categories";
import products from "./products";
import cart from "./cart";
import { getRemoteData } from "./thunk";

const rootReducer = combineReducers({ categories, products, cart });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) 
);

store.dispatch(getRemoteData());

export default store;
