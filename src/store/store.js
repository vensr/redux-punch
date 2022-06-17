import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { loading, message } from "../reducers/common/reducers";
import { STORE_NAME } from "../EnvVars";
const reducers = {
    loading,
    message,
};

const rootReducer = combineReducers(reducers);
const persistConfig = {
    key: STORE_NAME,
    storage,
    stateReconciler: autoMergeLevel2
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureDataStore = () => createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
