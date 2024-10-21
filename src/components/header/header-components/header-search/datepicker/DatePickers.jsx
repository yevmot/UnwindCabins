import React, { useState } from "react";
import DatePicker from "./DatePickerConstructor";

function ParentComponent() {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    return (
        <div style={{ display: "flex", gap: "8px" }}>
            <DatePicker
                label="Check In"
                minDate={new Date()}
                value={checkInDate}
                onChange={(newDate) => {
                    setCheckInDate(newDate);
                    // Если Check Out меньше Check In, обнуляем его
                    if (
                        checkOutDate &&
                        newDate &&
                        newDate.isAfter(checkOutDate)
                    ) {
                        setCheckOutDate(null);
                    }
                }}
            />
            <DatePicker
                label="Check Out"
                minDate={checkInDate || new Date()}
                value={checkOutDate}
                onChange={setCheckOutDate}
            />
        </div>
    );
}

export default ParentComponent;
