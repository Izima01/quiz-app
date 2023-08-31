import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTimer } from 'react-timer-hook';
import { timerActions } from '../store/timerSlice';
import { useSwiper } from 'swiper/react';

const time = new Date();
time.setSeconds(time.getSeconds() + 20);

const MyTimer = ({ answered, setAnswered }) => {
    const dispatch = useDispatch();
    const swiper = useSwiper();

    const { totalSeconds, seconds, restart } = useTimer({
      expiryTimestamp: time,
      onExpire: () => {
        setAnswered(true);
        swiper.slideNext();
        restart();
      }
    });

    useEffect(() => {
        dispatch(timerActions.updateTimer(totalSeconds));
    }, [totalSeconds]);
  
    useEffect(() => {
      restart();
    }, [answered]);

  return (
    <div style={{textAlign: 'center'}}>
      <p
        style={{
            fontWeight: 600,
            fontSize: '36px',
            color: (seconds < 10) ? 'red' : 'green',
            }}
        >
            {seconds}S
            <span style={{ fontSize: '18px' }}> left</span>
        </p>
    </div>
  );
}

export default MyTimer