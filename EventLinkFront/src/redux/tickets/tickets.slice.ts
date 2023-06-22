import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BasicState, ErrorState, ReduxState } from '../redux_interface';
import axios from 'axios';
import { RootState } from '../store';
import { BASE_URL_SECURED } from '../../utils/const';

interface TicketsState extends BasicState {
    response?: TicketResponse[];
    add_state: ReduxState;
    add_response?: TicketResponse;
}


type TicketResponse = {
    _id: string,
    eventId: string,
    datePurchased: string,
    expiredDate: string,
    userId: string,
    ticketPrice: string,
}

const initialState: TicketsState = {
    state: 'idle',
    add_state: 'idle',
};

export type TicketsRequest = {
    token: string,
    userId: string
}

export type AddTicketRequest = {
    token: string,
    userId: string,
    ticketPrice: string,
    eventId: string
}

export const GetTicketsByUserId = createAsyncThunk<TicketResponse[], TicketsRequest, {}>(
    'ticket/get/user',
    async (body, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL_SECURED}/ticket/${body.userId}`, { headers: { Authorization: 'Bearer ' + body.token } });
            return response.data;
        } catch (error: any) {
            const errorVal: ErrorState = error.response.data
            return rejectWithValue(errorVal);
        }
    }
);

export const AddTicket = createAsyncThunk<TicketResponse, AddTicketRequest, {}>(
    'ticket/add',
    async (body, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL_SECURED}/ticket`, body, { headers: { Authorization: 'Bearer ' + body.token } });
            return response.data;
        } catch (error: any) {
            const errorVal: ErrorState = error.response.data
            return rejectWithValue(errorVal);
        }
    }
);

const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        clear: () => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetTicketsByUserId.pending, (state) => {
            state.state = 'pending'
        })
        builder.addCase(GetTicketsByUserId.fulfilled, (state, action: PayloadAction<TicketResponse[]>) => {
            state.state = 'success'
            state.response = action.payload
            state.error = undefined
        })
        builder.addCase(GetTicketsByUserId.rejected, (state, action: PayloadAction<any>) => {
            state.state = 'error';
            state.error = action.payload
            state.response = undefined;
        })
        builder.addCase(AddTicket.pending, (state) => {
            state.add_state = 'pending'
        })
        builder.addCase(AddTicket.fulfilled, (state, action: PayloadAction<TicketResponse>) => {
            state.add_state = 'success'
            state.add_response = action.payload
            state.error = undefined
        })
        builder.addCase(AddTicket.rejected, (state, action: PayloadAction<any>) => {
            state.add_state = 'error';
            state.error = action.payload
            state.response = undefined;
        })

    }
})

export const selectTicketsState = (state: RootState) => state.tickets.state;
export const selectTicketsResponse = (state: RootState) => state.tickets.response;
export const selectTicketsError = (state: RootState) => state.tickets.error;

export const selectAddTicketState = (state: RootState) => state.tickets.add_state;
export const selectAddTicketResponse = (state: RootState) => state.tickets.add_response;

export const actions = ticketsSlice.actions;

export default ticketsSlice.reducer;
