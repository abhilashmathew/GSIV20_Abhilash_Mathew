/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './src/reducers';
import AppNavigator from './src/navigation'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

function configureStore(initalState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            // loggerMiddleware
        )
    );
    return createStore(reducer, initalState, enhancer)
}

const store = configureStore({});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <AppNavigator />
      </Provider>
    );
  }
}

export default App;
