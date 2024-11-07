import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    CheckInDate: "",
    CheckOutDate: "",
};

const dateSlice = createSlice({
    name: "dates",
    initialState,
    reducers: {
        setCheckInDate: (state, action) => {
            state.CheckInDate = action.payload;
        },
        setCheckOutDate: (state, action) => {
            state.CheckOutDate = action.payload;
        },
    },
});

export const { setCheckInDate, setCheckOutDate } = dateSlice.actions;
export default dateSlice.reducer;
