import Timer from './components/timer';
import Users from './components/users';
import Modal from './components/modal';
import { HomeWrapper } from './style';

const Home = () => {
  return (
    <HomeWrapper>
      <Timer />
      <Users />
      <Modal />
    </HomeWrapper>
  );
}

export default Home;