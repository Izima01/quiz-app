import '../App.css';
import { useSelector } from 'react-redux';
import QuestionBox from './QuestionBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { decode } from 'html-entities';
import useQuestionFetcher from '../useQuestionFetcher';
// import { queArray } from '../Assets/Data';

const Questions = () => {
    const { questionArray, score } = useSelector((state) => state.quiz);
    const { isLoading } = useQuestionFetcher();

    return (
        <div style={{ overflow:'hidden' }}>
            {
                isLoading ? <h2>Loading....</h2>  : (
                    <>
                        <div className='scoreboard'>
                            <h2>{score} POINTS</h2>
                        </div>
                        <Swiper className='slider' slidesPerView={1} allowTouchMove={false} loop={false}>
                            {
                                questionArray.length>0 && questionArray?.map((item, i) => {
                                    let options = questionArray.length>0 && [decode(item.correct_answer), ...item.incorrect_answers];
                                    return (
                                        <SwiperSlide key={i}>
                                            <QuestionBox que={decode(item?.question)} options={options.sort(() => Math.random() - 0.5)} index={i+1} answer={decode(item?.correct_answer)} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </>
                )
            }
        </div>
    )
}

export default Questions
