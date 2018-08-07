import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configStore from './store';

export default function AppCreator(
  component,
  root,
  {rootReducer, rootSaga, persistReducerList, middleware=[]},
) {
  const {store, persistor} = configStore({
    rootReducer,
    rootSaga,
    persistReducerList,
    middlewareAdd : middleware,
  });

  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {component}
      </PersistGate>
    </Provider>,
    root,
  );
}
