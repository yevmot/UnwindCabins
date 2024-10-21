import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

import Calendar from "./../../../../../img/icons/calendar.svg";

const CalendarIcon = () => (
    <img
        src={Calendar}
        alt="calendar icon"
        style={{ width: "18px", height: "18px" }}
    />
);
const LabelWithIcon = ({ label }) => (
    <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <CalendarIcon />
        <span style={{ marginLeft: 10 }}>{label}</span>
    </div>
);

function DatePickerIn({ label, minDate, value, onChange }) {
    return (
        <div className="date-wrapper">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MuiDatePicker
                    label={<LabelWithIcon label={label} />}
                    alue={value}
                    onChange={onChange}
                    format="DD/MM/YYYY"
                    minDate={dayjs(minDate)}
                    sx={{
                        height: "54px",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                border: "none",
                            },
                        },
                        "& .css-jupps9-MuiInputBase-root-MuiOutlinedInput-root":
                            { paddingRight: "0" },
                    }}
                />
            </LocalizationProvider>
        </div>
    );
}

export default DatePickerIn;
