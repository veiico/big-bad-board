import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Store } from 'redux';
import throttle from 'lodash/throttle';
import { Container, Content, GlobalStyle } from './App.styles';
import { Provider } from 'react-redux';
import { configureStore } from '../../../core/redux/store';
import Board from '../../pages/Board/Board';
import Task from '../../pages/Task/Task';
import HeaderView from '../../../components/Header/Header.view';
import Modal from '../../../components/Modal/Modal';
import { loadState, saveState } from '../../../core/redux/persistor';
import { modalInitialState } from '../../../core/redux/components/Modal/Modal.reducer';

const store: Store = configureStore(loadState());

store.subscribe(throttle(() => {
  saveState({
    components: {
      modal: modalInitialState,
    },
    data: store.getState().data,
  });
}, 1000));

const App: React.FC = () => {
  return (
    <Provider store={store || {}}>
      <GlobalStyle/>

      <Container>
        <HeaderView/>

        <Content>
          <Router>
            <Modal/>

            <Switch>
              <Route exact path="/" component={Board}/>
              <Route path="/task/:id" component={Task}/>
              <Route>404</Route>
            </Switch>
          </Router>
        </Content>
      </Container>
    </Provider>
  );
};

export default App;
