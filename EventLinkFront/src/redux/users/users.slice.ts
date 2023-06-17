import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BasicState, ErrorState } from '../redux_interface';
import axios from 'axios';
import { RootState } from '../store';
import { BASE_URL_SECURED } from '../../utils/const';

interface UsersState extends BasicState {
    response?: UsersResponse
}

type SortDirection = 'ASC' | 'DESC';

interface UsersQueryParams extends URLSearchParams {
    page?: number,
    size?: number
    sortDirection?: SortDirection
    sortColumn?: string
}

export type UsersRequest = {
    token: string,
    params?: UsersQueryParams
}

type UsersResponse = {
    page: number,
    total: number,
    size: number,
    sortedColumn: string,
    data: UserResponseData[]
}

type UserResponseData = {
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    enabled: boolean,
    locked: boolean,
    roles: Role[]
}

type Role = {
    id: string,
    name: string,
}

const initialState: UsersState = {
    state: 'idle'
};


export const GetUsers = createAsyncThunk<UsersResponse, UsersRequest, {}>(
    'users/get',
    async ({
        token,
        params
    }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL_SECURED}/users`, { headers: { Authorization: 'Bearer ' + token }, params });
            return response.data;
        } catch (error: any) {
            const errorVal: ErrorState = error.response.data
            return rejectWithValue(errorVal);
        }
    }
);



const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        clear: () => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetUsers.pending, (state) => {
            state.state = 'pending'
        })
        builder.addCase(GetUsers.fulfilled, (state, action: PayloadAction<UsersResponse>) => {
            state.state = 'success'
            state.response = action.payload
            state.error = undefined
        })
        builder.addCase(GetUsers.rejected, (state, action: PayloadAction<any>) => {
            state.state = 'error';
            state.error = action.payload
            state.response = undefined;
        })

    }
})

export const selectUsersState = (state: RootState) => state.users.state;
export const selectUsersResponse = (state: RootState) => state.users.response;
export const selectUsersError = (state: RootState) => state.users.error;

export const actions = usersSlice.actions;

export default usersSlice.reducer;
