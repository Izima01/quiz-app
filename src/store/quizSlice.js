import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        questionArray: [],
        score: 0,
        activeIndex: 0
    },
    reducers: {
        addQuestions(state, action) {
            state.questionArray = action.payload;
        },
        gradeQuestion(state, action) {
            const { answer, opt, totalSeconds } = action.payload;
            const isCorrect = answer === opt;
            // eslint-disable-next-line eqeqeq
            if (isCorrect) {
                const addScore = 5 * totalSeconds;
                state.score += addScore;
            }
        },
        reset (state, action) {
            state.questionArray = [];
            state.score = 0;
        },
        nextQuestion(state, action) {
            state.activeIndex += 1;
        }
    }
});

export const quizActions = quizSlice.actions;

export default quizSlice;