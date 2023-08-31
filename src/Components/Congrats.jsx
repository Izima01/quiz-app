import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Congrats = () => {
  const { name } = useSelector((state) => state.user);
  const { score, questionArray } = useSelector((state) => state.quiz);

  return (
    <div style={{ display:'flex', flexDirection: 'column', gap: '24px' }}>
      <h2>Congratulations {name}</h2>
      <p>You scored {score} points out of {questionArray.length * 100}</p>
      <Link to='/' className='button' style={{ margin:'0 auto' }}>Play again</Link>
    </div>
  )
}

export default Congrats