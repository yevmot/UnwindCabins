import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import { useState } from "react";
import Calendar from "./../../../img/icons/calendar.svg";

function DatePickerIn() {
    const [checkInDate, setCheckInDate] = useState(null);

    return (
        <div className="date-wrapper">
            <div className="img-wrapper">
                <img src={Calendar} />
            </div>
            <DatePicker
                className="date-picker"
                placeholderText="Check in"
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                dateFormat="dd.MM.yyyy"
            />
        </div>
    );
}

export default DatePickerIn;
