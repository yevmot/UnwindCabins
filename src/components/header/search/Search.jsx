import Location from "./location/Location";
import Travellers from "./travellers/Travellers";
import FormBtn from "./button/FormBtn";
import DatePickerIn from "./datepicker/DatePickerIn";
import DatePickerOut from "./datepicker/DatePickerOut";
import "./style.css";

const Form = () => {
    return (
        <div className="container">
            <div className="form-container">
                <div className="form">
                    <Location />
                    <DatePickerIn />
                    <DatePickerOut />
                    <Travellers />
                    <FormBtn />
                </div>
            </div>
        </div>
    );
};

export default Form;
