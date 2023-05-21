import { applyMiddleware, compose } from "redux";
import { legacy_createStore as createStore } from 'redux'
import reducers from "./reducers";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default store

  export  const store = createStore(
        persistedReducer,
        composeEnhancers(applyMiddleware(thunk))
    )
   export let persistor = persistStore(store)