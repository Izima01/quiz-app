/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { quizActions } from '../store/quizSlice';
import { useSwiper } from 'swiper/react';
import { useTimer } from 'react-timer-hook';
import { decode } from 'html-entities';
import { useNavigate } from 'react-router-dom';

const QuestionBox = ({ que, options, answer, index }) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 15);

  const dispatch = useDispatch();
  const { questionArray, activeIndex } = useSelector((state) => state.quiz);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState('');
  const swiper = useSwiper();
  const navigate = useNavigate();

  // Timer logic
  const { totalSeconds, seconds, restart } = useTimer({
    expiryTimestamp: time,
    autoStart: true,
    onExpire: () => {
      setAnswered(true);
      dispatch(quizActions.gradeQuestion({ answer, opt: selected, totalSeconds }));
      
    }
  });

  const nextQuestion = () => {
    if (swiper.activeIndex === questionArray.length-1) {
      navigate('/finish');
    } else {
      swiper.slideNext();
      dispatch(quizActions.nextQuestion());
      setAnswered(false);
    }
  }

  const selectOption = (opt) => {
    setSelected(opt);
    setAnswered(true);
    dispatch(quizActions.gradeQuestion({ answer, opt, totalSeconds }));
  };

  useEffect(() => {
    // console.log(answered);
    restart(time, true);
    setAnswered(false);
  }, [swiper.activeIndex, activeIndex]);

  return (
    <div className='question'>

      <div className='flex'>
        <h2>Question {index}</h2>

        {/* Timer component */}
        <div style={{textAlign: 'center'}}>
          <p
            style={{
                fontWeight: 600,
                fontSize: '28px',
                color: (seconds < 8) ? 'red' : 'green',
              }}
            >
              {seconds}
              <span style={{ fontSize: '20px' }}>s left</span>
            </p>
        </div>

        </div>
        <h3>{que || "questionsssss"}</h3>
        <div className='options'>
          {
            options.map((opt, i) => {
                return (
                  <button disabled={answered} className={(opt === selected) ? 'selected' : (opt === answer && answered) ? 'correct' : (answered && opt !== answer) ? 'wrong' : ''} key={i} value={i} onClick={() => selectOption(opt)}>{decode(opt)}</button>
                )
            })
          }
        </div>
        <button className='next button' onClick={nextQuestion}>{swiper.activeIndex === questionArray.length-1 ? 'Finish Quiz' : 'Next Question'}</button>
    </div>
  )
}

export default QuestionBox
