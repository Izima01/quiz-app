import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { quizActions } from './store/quizSlice';

const useQuestionFetcher = () => {
    const { difficulty, limit, category } = useSelector((state) => state.user);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const url = `https://opentdb.com/api.php?amount=${limit}&category=${category}&difficulty=${difficulty}&type=multiple`;

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const response = await fetch(url);
                const result = await response.json();
                dispatch(quizActions.addQuestions(result.results));
            } catch (err) {
                console.error('Error fetching data:', err);
            } finally {
                setIsLoading(false);
            } 
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, limit, difficulty]);

    return { isLoading }
}

export default useQuestionFetcher