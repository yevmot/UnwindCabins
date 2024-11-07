import { useDispatch, useSelector } from "react-redux";
import {
    setCheckInDate,
    setCheckOutDate,
} from "../../../../../store/dateSlice";
import DatePicker from "./DatePickerConstructor";
import dayjs from "dayjs";

const ParentComponent = () => {
    const dispatch = useDispatch();
    const checkInDate = useSelector((state) => state.dates.checkInDate);
    const checkOutDate = useSelector((state) => state.dates.checkOutDate);

    const handleChangeCheckInDate = (newDate) => {
        const dateString = newDate ? dayjs(newDate).format("DD.MM.YYYY") : "";
        dispatch(setCheckInDate(dateString)); // Сохраняем строку в Redux
        console.log("Текущее значение checkInDate:", dateString);

        // Проверяем, если новая дата заезда позже даты выезда
        if (
            checkOutDate &&
            newDate &&
            dayjs(newDate).isAfter(dayjs(checkOutDate))
        ) {
            dispatch(setCheckOutDate(null)); // Сбрасываем дату выезда
        }
    };

    const handleChangeCheckOutDate = (newDate) => {
        const dateString = newDate ? dayjs(newDate).format("DD.MM.YYYY") : "";
        dispatch(setCheckOutDate(dateString)); // Сохраняем строку в Redux
        console.log("Текущее значение checkOutDate:", dateString);
    };

    return (
        <div style={{ display: "flex", gap: "8px" }}>
            <DatePicker
                label="Check In"
                minDate={new Date()} // Минимальная дата - сегодня
                value={dayjs(checkInDate)} // Значение Check In
                onChange={handleChangeCheckInDate}
            />
            <DatePicker
                label="Check Out"
                minDate={checkOutDate ? dayjs(checkInDate) : new Date()} // Минимальная дата для Check Out
                value={dayjs(checkOutDate)} // Значение Check Out
                onChange={handleChangeCheckOutDate} // Обработчик для изменения даты выезда
            />
        </div>
    );
};

export default ParentComponent;
