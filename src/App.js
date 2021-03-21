import { Provider } from 'react-redux';

import store from './store'
import Home from './pages/home/index';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
