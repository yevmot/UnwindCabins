import Map from "./../../../../../img/icons/map.svg";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

const locations = [
    "Hampshire · England",
    "Norfolk · England",
    "Lake District · England",
    "Cotswolds · England",
    "Cornwall · England",
    "South Downs · England",
    "New Forest · England",
    "Exmoor · England",
    "Northumberland National Park · England",
];

const MapIcon = () => {
    return (
        <div className="img-wrapper">
            <img src={Map} alt="map" />
        </div>
    );
};

const IconWithText = ({ label = "I want to go" }) => {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <MapIcon />
            <span>{label}</span>
        </div>
    );
};

const Location = ({ label }) => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="form-wrapper">
            <Autocomplete
                freeSolo
                options={locations}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                sx={{
                    "& .MuiAutocomplete-clearIndicator": {
                        width: "auto",
                        height: "auto",
                    },
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        id="outlined-basic"
                        label={<IconWithText label={label} />}
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
                                width: "296px",
                                height: "54px",
                            },
                            "& .MuiInputLabel-root": {
                                fontFamily: "Poppins",
                                fontSize: "16px",
                            },
                        }}
                    />
                )}
            />
        </div>
    );
};

export default Location;
