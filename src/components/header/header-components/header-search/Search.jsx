import Location from "./location/Location";
import Travellers from "./travellers/Travellers";
import FormBtn from "./button/FormBtn";
import DatePickers from "./datepicker/DatePickers";
import "./style.css";

const Form = () => {
    return (
        <div className="container">
            <div className="form-container">
                <div className="form">
                    <Location />
                    <DatePickers />
                    <Travellers />
                    <FormBtn />
                </div>
            </div>
        </div>
    );
};

export default Form;
