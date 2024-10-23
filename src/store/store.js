import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./locationSlice";
import travelersReducer from "./travelersSlice";
import datesReducer from "./dateSlice";

const store = configureStore({
    reducer: {
        location: locationReducer,
        travelers: travelersReducer,
        dates: datesReducer,
    },
});

export default store;
