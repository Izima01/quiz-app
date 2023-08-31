import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        age: 0,
        category: '',
        difficulty: '',
        limit: 0
    },
    reducers: {
        addUserDetails(state, action) {
            const newUser = action.payload;
            state.name = newUser.name;
            state.age = newUser.age;
            state.category = newUser.category;
            state.difficulty = newUser.difficulty;
            state.limit = newUser.limit;
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice;