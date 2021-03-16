import Timer from "./components/timer";
import Users from "./components/users";
import Modal from "./components/modal";

import { AppWrapper } from './components/style';

function App() {
  return (
    <AppWrapper>
      <Timer />
      <Users />
      <Modal />
    </AppWrapper>
  );
}

export default App;
