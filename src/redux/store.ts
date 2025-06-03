import { applyMiddleware, compose, createStore} from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import rootReducer from './reducers';

const initState = {
    
};


export default function makeStore(initialState = initState) {
  const middlewares = [thunk];
  let composeEnhancers = compose;

    if(process.env.NODE_ENV === 'development'){
        if((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
            composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
        }
    }

  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

    if(typeof module !== 'undefined' && (module as any).hot) {
        (module as any).hot.accept('./reducers', () => {
            const nextReducer = require('./reducers').default;
            store.replaceReducer(nextReducer);
        });
    }


  return store;
}
