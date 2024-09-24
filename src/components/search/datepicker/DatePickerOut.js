import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import { useState } from "react";
import Calendar from "./../../../img/icons/calendar.svg";

function DatePickerOut() {
    const [checkOutDate, setCheckOutDate] = useState(null);

    return (
        <div className="date-wrapper">
            <div className="img-wrapper">
                <img src={Calendar} />
            </div>
            <DatePicker
                className="date-picker"
                placeholderText="Check out"
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                dateFormat="dd.MM.yyyy"
            />
        </div>
    );
}

export default DatePickerOut;
