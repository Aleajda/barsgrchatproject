import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk as thunkMiddleware } from "redux-thunk";
import authReducer from "./authReducer";
import appReducer from "./appReduser";


let reducers = combineReducers({
    Auth: authReducer,
    App: appReducer
});

let store:any = createStore(reducers, applyMiddleware(thunkMiddleware));

window.Storage = store;
export default store