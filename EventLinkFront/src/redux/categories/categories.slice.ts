import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BasicState, ErrorState } from '../redux_interface';
import axios from 'axios';
import { RootState } from '../store';
import { BASE_URL_SECURED } from '../../utils/const';

interface CategoriesState extends BasicState {
    response?: CategoryResponseData[]
}

type CategoryResponseData = {
    _id: string,
    title: string,
    textContent: string,
}

const initialState: CategoriesState = {
    state: 'idle'
};


export const GetCategories = createAsyncThunk<CategoryResponseData[], undefined, { rejectValue: ErrorState }>(
    'categories/get',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL_SECURED}/category`);
            return response.data;
        } catch (error: any) {
            const errorVal: ErrorState = error.response.data
            return rejectWithValue(errorVal);
        }
    }
);



const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        clear: () => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetCategories.pending, (state) => {
            state.state = 'pending'
        })
        builder.addCase(GetCategories.fulfilled, (state, action: PayloadAction<CategoryResponseData[]>) => {
            state.state = 'success'
            state.response = action.payload
            state.error = undefined
        })
        builder.addCase(GetCategories.rejected, (state, action: PayloadAction<any>) => {
            state.state = 'error';
            state.error = action.payload
            state.response = undefined;
        })

    }
})

export const selectCategoriesState = (state: RootState) => state.categories.state;
export const selectCategoriesResponse = (state: RootState) => state.categories.response;
export const selectCategoriesError = (state: RootState) => state.categories.error;

export const actions = categoriesSlice.actions;

export default categoriesSlice.reducer;
