import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import storage from "redux-persist/lib/storage/session";

import rootReducer from "./reducers";

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = createStore(rootReducer, middleware);
