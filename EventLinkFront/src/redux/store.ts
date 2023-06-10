import { configureStore } from '@reduxjs/toolkit';
import selfSlice from './self/self.slice';
import tokenSlice from './token/token.slice';
import usersSlice from './users/users.slice';

const store = configureStore({
    reducer: {
        self: selfSlice,
        token: tokenSlice,
        users: usersSlice
    },
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;