import { configureStore } from '@reduxjs/toolkit';
import selfSlice from './self/self.slice';

const store = configureStore({
    reducer: {
        self: selfSlice
    },
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;