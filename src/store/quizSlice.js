import { createSlice } from "@reduxjs/toolkit";
import { queArray } from '../Data';

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        questionArray: queArray,
        score: 0,
    },
    reducers: {
        addQuestions(state, action) {
            state.questionArray = action.payload;
        },
        gradeQuestion(state, action) {
            const { answer, opt, totalSeconds } = action.payload;
            // eslint-disable-next-line eqeqeq
            if (answer === opt) {
                const addScore = 5 * totalSeconds;
                state.score += addScore;
            }
        },
    }
});

export const quizActions = quizSlice.actions;

export default quizSlice;