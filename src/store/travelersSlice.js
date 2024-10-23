import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    travelers: "",
};

const travelersSlice = createSlice({
    name: "travelers",
    initialState,
    reducers: {
        setTravelers: (state, action) => {
            state.travelers = action.payload;
        },
    },
});

export const { setTravelers } = travelersSlice.actions;
export default travelersSlice.reducer;
