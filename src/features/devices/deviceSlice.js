import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadDevices = createAsyncThunk(
    'allDevices/getAllRecipes',
    async () => {
        const data = await fetch('https://fakestoreapi.com/products?limit=5');
        const json = await data.json();
        return json;
    }
)

export const devicesSlice = createSlice({
    name: 'devices',
    initialState: {
        devices: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [loadDevices.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadDevices.fulfilled]: (state, action) => {
            state.devices  = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadDevices.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export default devicesSlice.reducer

export const selectDevices = (state) => state.devices.devices