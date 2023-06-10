import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BasicState, ErrorState } from '../redux_interface';
import axios from 'axios';
import { RootState } from '../store';

interface SelfState extends BasicState {
    response?: SelfResponse
}

type SelfResponse = {
    authorities: Authority[],
    userId: string,
    firstname: string,
    lastname: string,
    sub: string,
    iat: string,
    exp: string
}

export type Authority = {
    authority: string
}

const initialState: SelfState = {
    state: 'idle'
};


export const GetSelf = createAsyncThunk<SelfResponse, string, {}>(
    'self/get',
    async (token, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:4000/api/v1/secured/self', {}, { headers: { Authorization: 'Bearer ' + token } });
            return response.data;
        } catch (error: any) {
            const errorVal: ErrorState = error.response.data
            return rejectWithValue(errorVal);
        }
    }
);



const selfSlice = createSlice({
    name: 'self',
    initialState,
    reducers: {
        clear: () => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetSelf.pending, (state) => {
            state.state = 'pending'
        })
        builder.addCase(GetSelf.fulfilled, (state, action: PayloadAction<SelfResponse>) => {
            state.state = 'success'
            state.response = action.payload
            state.error = undefined
        })
        builder.addCase(GetSelf.rejected, (state, action: PayloadAction<any>) => {
            state.state = 'error';
            state.error = action.payload
            state.response = undefined;
        })

    }
})

export const selectSelfState = (state: RootState) => state.self.state;
export const selectSelfResponse = (state: RootState) => state.self.response;
export const selectSelfError = (state: RootState) => state.self.error;

export const actions = selfSlice.actions;

export default selfSlice.reducer;
