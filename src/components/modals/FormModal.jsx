import React from "react";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { TextField } from "@mui/material";
import Button from "./../buttons/Button";

import "./style.css";

const FormModal = ({ isActive, setIsActive }) => {
    // Получаем данные о путешественниках из Redux-хранилища
    const countTravelers = useSelector((state) => state.travelers.travelers);
    const location = useSelector((state) => state.location.location);
    const CheckInDate = useSelector((state) => state.dates.CheckInDate);
    const CheckOutDate = useSelector((state) => state.dates.CheckOutDate);

    const closeModal = () => {
        setIsActive(false);
    };
    const handleOverClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };
    return (
        <div
            className={`overlay ${isActive ? "active" : ""}`}
            onClick={handleOverClick}
        >
            <div className="form-modal">
                <IconButton className="close-modal-btn" onClick={closeModal}>
                    X
                </IconButton>
                <div className="modal-info">
                    <h1 className="modal-title">We have available cabins</h1>
                    <h2 className="client-info">Location: {location}</h2>
                    <h2 className="client-info">
                        {CheckInDate} - {CheckOutDate} for {countTravelers}{" "}
                        people
                    </h2>
                    <p className="modal-text">
                        Please leave your email or phone number and we will
                        contact you for a consultation
                    </p>
                </div>

                <TextField
                    className="modal-input"
                    label="E-mail"
                    variant="outlined"
                    sx={{
                        "&.MuiTextField-root input": {
                            padding: "15px 17px",
                        },
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                border: "none",
                            },
                            fontFamily: "Poppins",
                            fontSize: "16px",
                        },
                        "& .MuiInputLabel-root": {
                            fontFamily: "Poppins",
                            fontSize: "16px",
                        },
                    }}
                />
                <TextField
                    className="modal-input"
                    label="Phone number"
                    variant="outlined"
                    sx={{
                        "&.MuiTextField-root input": {
                            padding: "15px 17px",
                        },
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                border: "none",
                            },
                            fontFamily: "Poppins",
                            fontSize: "16px",
                        },
                        "& .MuiInputLabel-root": {
                            fontFamily: "Poppins",
                            fontSize: "16px",
                        },
                    }}
                />
                <Button
                    text="Submit"
                    bgColor="var(--dark-green)"
                    textColor="white"
                    hoverColor="var(--orange)"
                    sx={{ width: "80%" }}
                />
            </div>
        </div>
    );
};

export default FormModal;
