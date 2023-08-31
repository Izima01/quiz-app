import { useNavigate } from 'react-router-dom';
import '../App.css';
import { categories } from '../Assets/Data';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { userActions } from '../store/userSlice';
import { useEffect } from 'react';
import { quizActions } from '../store/quizSlice';

const dets = {
    name: '',
    category: 0,
    difficulty: '',
    limit: 5
};

const Home = () => {
    const [state, setState] = useState(dets);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.id;
        setState({ ...state, [name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.name && state.category) {
            dispatch(userActions.addUserDetails(state));
            navigate('/questions');
        }
    }

    useEffect(() => {
      dispatch(quizActions.reset());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1>Trivia App</h1>
            <form onSubmit={handleSubmit}>
                <div className='input_group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' value={state?.name} required onChange={(e) => handleChange(e)}  />
                </div>

                <div className='input_group'>
                    <label htmlFor='limit'>Number of questions</label>
                    <input type='number' id='limit' value={state?.limit} required onChange={(e) => handleChange(e)} />
                </div>

                <div className='input_group select'>
                    <label htmlFor='difficulty'>Difficulty Level</label>
                    <select value={state?.difficulty} required onChange={(e) => handleChange(e)} id='difficulty'>
                        <option value='' disabled>Choose a difficulty</option>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </select>
                </div>
                
                <div className='input_group select'>
                    <label htmlFor='category'>Category</label>
                    <select value={state?.category} required onChange={(e) => handleChange(e)} id='category'>
                        {categories.map(({name, id}) => (
                            <option key={id} value={id}>{name}</option>
                        ))}
                    </select>
                </div>
                <button type='submit' onClick={handleSubmit}>Start the quiz</button>
            </form>
        </div>
    )
}

export default Home