import { TimerWrapper, Counter } from './style';

const Timer = () => {
  return (
    <TimerWrapper>
      <h2>抽獎時間</h2>
      <input type="text" />
      <span>分鐘</span>
      <button>設定</button>
      <Counter>00:00</Counter>
    </TimerWrapper>
  );
}

export default Timer;