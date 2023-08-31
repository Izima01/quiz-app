import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        questionArray: [],
        score: 0,
    },
    reducers: {
        addQuestions(state, action) {
            state.questionArray = action.payload;
        },
        gradeQuestion(state, action) {
            const answer = action.payload.answer;
            const selected = action.payload.opt;
            const timeLeft = action.payload.totalSeconds
            // eslint-disable-next-line eqeqeq
            if (answer === selected) {
                const addScore = 5 * timeLeft;
                console.log(addScore);
                state.score += addScore;
            }
        },
    }
});

export const quizActions = quizSlice.actions;

export default quizSlice;