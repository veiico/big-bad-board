import { applyMiddleware, compose, createStore, Middleware, Store, StoreEnhancer } from 'redux';
import { rootReducer, RootState } from './reducers';
import { modalInitialState } from './components/Modal/Modal.reducer';
import { columnInitialState } from './data/Column/Column.reducer';
import { taskInitialState } from './data/Task/Task.reducer';

const initialState: RootState = {
  components: {
    modal: modalInitialState,
  },
  data: {
    columns: columnInitialState,
    tasks: taskInitialState,
  },
};

export const configureStore = (preloadedState: RootState = initialState): Store => {
  const middlewares: Middleware[] = [];
  const middlewareEnhancer: StoreEnhancer = applyMiddleware(...middlewares);

  const enhancers: Function[] = [
    middlewareEnhancer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  ];
  const composedEnhancers: StoreEnhancer = compose(...enhancers);

  return createStore(
    rootReducer,
    preloadedState,
    composedEnhancers,
  );
};
