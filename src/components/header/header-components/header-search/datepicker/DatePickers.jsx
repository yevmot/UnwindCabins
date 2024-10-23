import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setCheckInDate,
    setCheckOutDate,
} from "../../../../../store/dateSlice";
import DatePicker from "./DatePickerConstructor";

function ParentComponent() {
    const dispatch = useDispatch();

    const checkInDate = useSelector((state) => state.dates.checkInDate);
    const checkOutDate = useSelector((state) => state.dates.checkOutDate);

    return (
        <div style={{ display: "flex", gap: "8px" }}>
            <DatePicker
                label="Check In"
                minDate={new Date()}
                value={checkInDate}
                onChange={(newDate) => {
                    dispatch(setCheckInDate(newDate.toISOString()));
                    if (
                        // Если Check Out меньше Check In, обнуляем его
                        checkOutDate &&
                        newDate &&
                        newDate.isAfter(checkOutDate)
                    ) {
                        dispatch(setCheckOutDate(null));
                    }
                }}
            />
            <DatePicker
                label="Check Out"
                minDate={checkInDate || new Date()}
                value={checkOutDate}
                onChange={(newDate) =>
                    dispatch(setCheckOutDate(newDate.toISOString()))
                }
            />
        </div>
    );
}

export default ParentComponent;
