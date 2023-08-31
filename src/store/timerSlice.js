import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        timeLeft: 20,
        isRunning: false,
        target: 20,
    },
    reducers : {
        updateTimer(state, action) {
            state.timeLeft = action.payload;
        },
        questionAnswered(state, action) {
            console.log(action.payload);
            state.finishTime = action.payload;
        }
    }
});

export const timerActions = timerSlice.actions;

export default timerSlice;