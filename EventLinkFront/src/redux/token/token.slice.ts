import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SignInForm } from "../../pages/SignIn";
import axios from "axios";
import { BasicState, ErrorState } from "../redux_interface";
import { RootState } from "../store";

interface TokenState extends BasicState {
    response?: TokenResponse
}

export type TokenResponse = {
    token: string
}

const initialState: TokenState = {
    state: 'idle'
};

export const GetToken = createAsyncThunk<TokenResponse, SignInForm, {}>(
    'token/get',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:4000/api/v1/auth/login', { email, password });
            return response.data;
        } catch (error: any) {
            const errorVal: ErrorState = error.response.data
            return rejectWithValue(errorVal);
        }
    }
);

const saveTokenToLocalStorage = (token: string) => {
    localStorage.setItem('token', token);
};


const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        addToken: (state, { payload }: PayloadAction<TokenResponse>) => {
            state.state = "success"
            state.response = payload
            state.error = undefined
        },
        clear: () => {
            return initialState
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetToken.pending, (state) => {
            state.state = 'pending'
            state.response = undefined
            state.error = undefined
        })
        builder.addCase(GetToken.fulfilled, (state, action: PayloadAction<TokenResponse>) => {
            state.state = 'success'
            state.response = action.payload
            state.error = undefined
            saveTokenToLocalStorage(action.payload.token)
        })
        builder.addCase(GetToken.rejected, (state, action: PayloadAction<any>) => {
            state.state = 'error';
            state.error = action.payload
            state.response = undefined;
        })
    }

})

export const selectTokenState = (state: RootState) => state.token.state;
export const selectTokenResponse = (state: RootState) => state.token.response;
export const selectTokenError = (state: RootState) => state.token.error;
export const actions = tokenSlice.actions;

export default tokenSlice.reducer