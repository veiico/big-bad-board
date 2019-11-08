import { combineReducers } from 'redux';
import { columnReducer } from './data/Column/Column.reducer';
import { taskReducer } from './data/Task/Task.reducer';
import { StateType } from 'typesafe-actions';
import { modalReducer } from './components/Modal/Modal.reducer';

export const rootReducer = combineReducers({
  components: combineReducers({
    modal: modalReducer,
  }),
  data: combineReducers({
    columns: columnReducer,
    tasks: taskReducer,
  }),
});

export type RootState = StateType<typeof rootReducer>;