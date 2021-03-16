import { Provider } from 'react-redux';

import store from './store'
import Timer from './components/timer';
import Users from './components/users';
import Modal from './components/modal';

import { AppWrapper } from './components/style';

function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Timer />
        <Users />
        <Modal />
      </AppWrapper>
    </Provider>
  );
}

export default App;
