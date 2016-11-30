import { applyMiddleware, createStore/*, compose*/ } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { DevTools } from 'containers';
import rootReducer from 'reducers';

// const enhancer = compose(
//   // Required! Enable Redux DevTools with the monitors you chose
//   DevTools.instrument()
// );

export default (initialState) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('reducers', () =>
      store.replaceReducer(require('reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
};
