import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false
}

const loadingSlice = createSlice({
    name: "loadingSlice",
    initialState,
    reducers: {
        showLoading: (state, action) => {
            state.isLoading = true
        },
        hideLoading: (state, action) => {
            state.isLoading = false
        }
    }
});

export const { showLoading, hideLoading } = loadingSlice.actions

export default loadingSlice.reducer