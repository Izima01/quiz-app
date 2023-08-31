import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import timerSlice from "./timerSlice";
import quizSlice from "./quizSlice";

export const store = configureStore({
    reducer: {
        'user': userSlice.reducer,
        'timer': timerSlice.reducer,
        'quiz': quizSlice.reducer,
    }
});