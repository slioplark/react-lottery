import { useDispatch } from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import { TimerWrapper, Counter } from './style';


const Timer = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(actionCreators.openModal());
  }

  return (
    <TimerWrapper>
      <h2>抽獎時間</h2>
      <input type="text" />
      <span>分鐘</span>
      <button onClick={openModal}>設定</button>
      <Counter>00:00</Counter>
    </TimerWrapper>
  );
}

export default Timer;