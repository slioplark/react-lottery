import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import { TimerWrapper, Counter } from './style';


const Timer = () => {
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);

  const inputRef = useRef(0);
  const minuteRef = useRef(0);
  const secondRef = useRef(0);
  const dispatch = useDispatch();

  const setTimer = () => {
    const inputVal = inputRef.current.value;
    setM(inputVal);
    minuteRef.current = inputVal;
    let x = setInterval(() => {
      if (secondRef.current === 0) {
        setM(prev => prev - 1);
        setS(prev => prev === 0 ? 59 : prev);
        minuteRef.current -= 1;
        secondRef.current = 59;
      } else {
        setS(prev => prev - 1);
        secondRef.current -= 1;
      }

      if (secondRef.current === 0 && minuteRef.current === 0) {
        clearInterval(x);
        setM(0);
        setS(0);
        openModal();
      }
    }, 1000);
  }

  const openModal = () => {
    const random = Math.floor(Math.random() * 10);
    dispatch(actionCreators.getUser(random));
    dispatch(actionCreators.openModal());
  }

  return (
    <TimerWrapper>
      <h2>抽獎時間</h2>
      <input type="number" min='0' ref={inputRef} />
      <span>分鐘</span>
      <button onClick={setTimer}>設定</button>
      <Counter>{m}:{s}</Counter>
    </TimerWrapper>
  );
}

export default Timer;