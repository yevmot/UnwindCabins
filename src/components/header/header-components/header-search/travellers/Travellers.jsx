import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TravImg from "./../../../../../img/icons/travellers.svg";

import "./style.css";

export default function BasicSelect() {
    const [travelers, setTravelers] = React.useState("");

    const handleChange = (event) => {
        setTravelers(event.target.value);
    };

    return (
        <Box
            sx={{
                minWidth: 140,
                height: 54,
                backgroundColor: "#EAEAEA",
            }}
        >
            <FormControl fullWidth>
                <div>
                    <InputLabel
                        id="demo-simple-select-label"
                        sx={{
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            fontWeight: "400",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                        }}
                    >
                        <img
                            src={TravImg}
                            alt="Travellers Icon"
                            style={{ marginRight: 12, width: 16, height: 16 }}
                        />
                        Travelers
                    </InputLabel>
                </div>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={travelers}
                    label="Travelers"
                    onChange={handleChange}
                    IconComponent={() => null}
                    sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                        },
                    }}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value="more">More</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
