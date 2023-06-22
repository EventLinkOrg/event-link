import { configureStore } from '@reduxjs/toolkit';
import selfSlice from './self/self.slice';
import tokenSlice from './token/token.slice';
import usersSlice from './users/users.slice';
import categoriesSlice from './categories/categories.slice';
import eventsSlice from './events/events.slice';
import ticketsSlice from './tickets/tickets.slice';

const store = configureStore({
    reducer: {
        self: selfSlice,
        token: tokenSlice,
        users: usersSlice,
        categories: categoriesSlice,
        events: eventsSlice,
        tickets: ticketsSlice
    },
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;