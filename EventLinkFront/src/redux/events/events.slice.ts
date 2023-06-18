import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BasicState, ErrorState } from '../redux_interface';
import axios from 'axios';
import { RootState } from '../store';
import { BASE_URL_SECURED } from '../../utils/const';

interface EventsState extends BasicState {
    response?: EventsResponse
}

type SortDirection = 'ASC' | 'DESC';

interface EventsQueryParams extends URLSearchParams {
    page?: number,
    size?: number
    sortDirection?: SortDirection
    sortColumn?: string
}

export type EventsRequest = {
    params?: EventsQueryParams
}

type EventsResponse = {
    page: number,
    total: number,
    size: number,
    sortedColumn: string,
    data: EventResponseData[]
}

type EventResponseData = {
    _id: string,
    title: string,
    dateAdded: string,
    startDate: string,
    endDate: string,
    tickets: number,
    textContent: string,
    categoryId: string,
    userId: string,
    img: Image
}

export type Image = {
    name: string,
    data: any,
    contentType: string,
}

const initialState: EventsState = {
    state: 'idle'
};


export const GetEvents = createAsyncThunk<EventsResponse, EventsRequest, {}>(
    'events/get',
    async ({
        params
    }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL_SECURED}/event`, { params });
            return response.data;
        } catch (error: any) {
            const errorVal: ErrorState = error.response.data
            return rejectWithValue(errorVal);
        }
    }
);



const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        clear: () => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetEvents.pending, (state) => {
            state.state = 'pending'
        })
        builder.addCase(GetEvents.fulfilled, (state, action: PayloadAction<EventsResponse>) => {
            state.state = 'success'
            state.response = action.payload
            state.error = undefined
        })
        builder.addCase(GetEvents.rejected, (state, action: PayloadAction<any>) => {
            state.state = 'error';
            state.error = action.payload
            state.response = undefined;
        })

    }
})

export const selectEventsState = (state: RootState) => state.events.state;
export const selectEventsResponse = (state: RootState) => state.events.response;
export const selectEventsError = (state: RootState) => state.events.error;

export const actions = eventsSlice.actions;

export default eventsSlice.reducer;
