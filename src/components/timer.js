import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import { TimerWrapper, Counter } from './style';

const Timer = () => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isReset, setIsReset] = useState(false);

  const inputRef = useRef(0);
  const minuteRef = useRef(0);
  const secondRef = useRef(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer = null;
    let inputVal = Number(inputRef.current.value) || 0;
    if (inputVal < 0) inputVal = 0;

    const openModal = () => {
      const random = Math.floor(Math.random() * 10);
      dispatch(actionCreators.getUser(random));
      dispatch(actionCreators.openModal());
    }

    setMinute(inputVal);
    setSecond(0);
    minuteRef.current = inputVal;
    secondRef.current = 0;

    if (inputVal > 0) {
      timer = setInterval(() => {
        if (secondRef.current === 0) {
          setMinute(prev => prev - 1);
          setSecond(prev => prev === 0 ? 59 : prev);
          minuteRef.current -= 1;
          secondRef.current = 59;
        } else {
          setSecond(prev => prev - 1);
          secondRef.current -= 1;
        }

        if (secondRef.current === 0 && minuteRef.current === 0) {
          clearInterval(timer);
          setMinute(0);
          setSecond(0);
          openModal();
        }
      }, 1000);
    }

    return () => {
      clearInterval(timer);
      setIsReset(false);
    }
  }, [isReset, dispatch]);

  return (
    <TimerWrapper>
      <h2>抽獎時間</h2>
      <input type="number" min='0' ref={inputRef} />
      <span>分鐘</span>
      <button onClick={() => setIsReset(true)}>設定</button>
      <Counter>{minute}:{second}</Counter>
    </TimerWrapper>
  );
}

export default Timer;