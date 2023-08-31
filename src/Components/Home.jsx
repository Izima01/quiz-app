import { useNavigate } from 'react-router-dom';
import '../App.css';
import { categories } from '../Data';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { userActions } from '../store/userSlice';

const dets = {
    name: '',
    age: 0,
    category: '',
    difficulty: '',
    limit: 0
};

const Home = () => {
    const [state, setState] = useState(dets);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.id;
        setState({ ...state, [name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.name && state.age && state.category) {
            dispatch(userActions.addUserDetails(state));
            navigate('/questions');
        }
        // setStartRunning(true);
    }

    return (
        <div>
            <h1>Trivia App</h1>
            <form>
                <div className='input_group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' value={state?.name} required onChange={(e) => handleChange(e)}  />
                </div>

                <div className='input_group'>
                    <label htmlFor='age'>Age</label>
                    <input type='number' id='age' value={state?.age} required onChange={(e) => handleChange(e)} />
                </div>

                <div className='input_group'>
                    <label htmlFor='limit'>Number of questions</label>
                    <input type='number' id='limit' value={state?.limit} required onChange={(e) => handleChange(e)} />
                </div>

                <div className='input_group'>
                    <label htmlFor='difficulty'>Difficulty Level</label>
                    <select value={state?.difficulty} required onChange={(e) => handleChange(e)} id='difficulty'>
                        <option value='easy' disabled>Choose a difficulty level</option>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='difficult'>difficult</option>
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
            {/* <a href='#questions'>Next Page</a> */}
        </div>
    )
}

export default Home