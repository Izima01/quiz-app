import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        category: 0,
        difficulty: '',
        limit: 5
    },
    reducers: {
        addUserDetails(state, action) {
            const newUser = action.payload;
            state.name = newUser.name;
            state.category = newUser.category;
            state.difficulty = newUser.difficulty;
            state.limit = newUser.limit;
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice;