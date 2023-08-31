import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { quizActions } from '../store/quizSlice';
import { useSwiper } from 'swiper/react';
import { useTimer } from 'react-timer-hook';
import { decode } from 'html-entities';


const QuestionBox = ({ que, options, answer, index }) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 20);

  const dispatch = useDispatch();
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState('');
  // options.map(opt => answerArray.push(Object.keys(opt)));
  const swiper = useSwiper();

  // Timer logic
  const { totalSeconds, seconds, restart } = useTimer({
    expiryTimestamp: time,
    onExpire: () => {
      setAnswered(true);
      dispatch(quizActions.gradeQuestion({ answer, opt: selected, totalSeconds }));
      setTimeout(() => {
        swiper.slideNext();
      }, 1500);
    }
  });

  const selectOption = (opt) => {
    setSelected(opt);
    setAnswered(true);
    dispatch(quizActions.gradeQuestion({ answer, opt, totalSeconds }));
    setTimeout(() => {
      swiper.slideNext();
    }, 1500);
  };

  useEffect(() => {
    if (swiper.activeIndex === 9 && answered) {
      alert("you're done now");
    } else {
      setAnswered(false);
      restart(time);
    }
  }, [swiper.activeIndex]);

  return (
    <div className='question'>
        <div className='flex' style={{ padding: '0 20px 10px' }}>
          <h2>Question {index}</h2>

          {/* Timer component */}
          <div style={{textAlign: 'center'}}>
            <p
              style={{
                  fontWeight: 600,
                  fontSize: '36px',
                  color: (seconds < 10) ? 'red' : 'green',
                }}
              >
                {totalSeconds}S
                <span style={{ fontSize: '18px' }}> left</span>
              </p>
          </div>

        </div>
        <h3>{que || "questionsssss"}</h3>
        <div className='options'>
          {
            options.map((opt, i) => {
                return (
                    <button className={(answered && answer === opt) ? 'correct' : (answered && answer !== opt) ? 'wrong' : ''} key={i} value={i} onClick={() => selectOption(opt)}>{decode(opt)}</button>
                )
            })
          }
        </div>
        {/* <button className='next' onClick={() => swiper.slideNext()}>Next Question</button> */}
    </div>
  )
}

export default QuestionBox