import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BasicState, ErrorState, ReduxState } from '../redux_interface';
import axios from 'axios';
import { RootState } from '../store';
import { BASE_URL_SECURED } from '../../utils/const';

interface EventsState extends BasicState {
    response?: EventsResponse,
    add_state: ReduxState,
    add_event_response?: EventPostResponse
    get_by_user_id_response?: EventResponseData[]
    get_by_user_id_state?: ReduxState
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

export type EventResponseData = {
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

export type EventPostRequest = {
    token: string
    title: string;
    categoryId: string;
    textContent: string;
    startDate: string;
    endDate: string;
    tickets: string;
    image?: Image;
}

type EventPostResponse = {
    _id: string;
    title: string;
    category: string;
    textContent: string;
    startDate: string;
    endDate: string;
    tickets: string;
    categoryId: string;
    image?: Image;
}

export type GetEventsByUserRequest = {
    id: string;
    token: string;
}

export type Image = {
    name: string,
    data: any,
    contentType: string,
}

const initialState: EventsState = {
    state: 'idle',
    add_state: 'idle'
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

export const GetEventsByUser = createAsyncThunk<EventResponseData[], GetEventsByUserRequest, {}>(
    'events/get/id',
    async ({
        token, id
    }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL_SECURED}/events/${id}`, { headers: { Authorization: 'Bearer ' + token } });
            return response.data;
        } catch (error: any) {
            const errorVal: ErrorState = error.response.data
            return rejectWithValue(errorVal);
        }
    }
);

export const AddEvent = createAsyncThunk<EventPostResponse, EventPostRequest, {}>(
    'events/add',
    async ({
        token,
        title,
        categoryId,
        textContent,
        startDate,
        endDate,
        tickets,
        image
    }, { rejectWithValue }) => {
        try {
            const formData = new FormData();

            if (image) {
                const binaryData = image.data.data; // get the binary data from the blog object
                const typedArray = new Uint8Array(binaryData); // create a typed array from the binary data
                const blob = new Blob([typedArray], { type: image.contentType }); // create a blob object with the typed array and content type
                formData.append('image', blob);
            }

            formData.append('title', title);
            formData.append('textContent', textContent);
            formData.append('startDate', startDate);
            formData.append('endDate', endDate);
            formData.append('tickets', tickets);
            formData.append('categoryId', categoryId);
            console.log(formData);
            const response = await axios.post(`${BASE_URL_SECURED}/event`, formData, { headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'multipart/form-data' } });
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
        builder.addCase(AddEvent.pending, (state) => {
            state.add_state = 'pending'
        })
        builder.addCase(AddEvent.fulfilled, (state, action: PayloadAction<EventPostResponse>) => {
            state.add_state = 'success'
            state.add_event_response = action.payload
            state.error = undefined
        })
        builder.addCase(AddEvent.rejected, (state, action: PayloadAction<any>) => {
            state.add_state = 'error';
            state.error = action.payload
            state.add_event_response = undefined;
        })
        builder.addCase(GetEventsByUser.pending, (state) => {
            state.get_by_user_id_state = 'pending'
        })
        builder.addCase(GetEventsByUser.fulfilled, (state, action: PayloadAction<EventResponseData[]>) => {
            state.get_by_user_id_state = 'success'
            state.get_by_user_id_response = action.payload
            state.error = undefined
        })
        builder.addCase(GetEventsByUser.rejected, (state, action: PayloadAction<any>) => {
            state.get_by_user_id_state = 'error';
            state.error = action.payload
            state.get_by_user_id_response = undefined;
        })
    }
})

export const selectEventsState = (state: RootState) => state.events.state;
export const selectEventsResponse = (state: RootState) => state.events.response;
export const selectEventsError = (state: RootState) => state.events.error;
export const selectAddEventResponse = (state: RootState) => state.events.add_event_response;
export const selectAddEventState = (state: RootState) => state.events.add_state;
export const selectGetEventResponse = (state: RootState) => state.events.get_by_user_id_response;
export const selectGetEventState = (state: RootState) => state.events.get_by_user_id_state;

export const actions = eventsSlice.actions;

export default eventsSlice.reducer;
