import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    CheckInDate: null,
    CheckOutDate: null,
};

const dateSlice = createSlice({
    name: "dates",
    initialState,
    reducers: {
        setCheckInDate: (state, action) => {
            state.checkInDate = action.payload;
        },
        setCheckOutDate: (state, action) => {
            state.checkOutDate = action.payload;
        },
    },
});

export const { setCheckInDate, setCheckOutDate } = dateSlice.actions;
export default dateSlice.reducer;
