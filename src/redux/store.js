import reducers from "./reducers/reducers";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createStore } from "redux";

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

export default store