import Select from "react-dropdown";
import "react-dropdown/style.css";
import TravImg from "./../../../../../img/icons/travellers.svg";

const Dropdown = () => {
    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="select-wrapper">
            <div className="img-wrapper">
                <img src={TravImg} />
            </div>
            <Select name="select" options={options} placeholder="Travellers" />
        </div>
    );
};

export default Dropdown;
