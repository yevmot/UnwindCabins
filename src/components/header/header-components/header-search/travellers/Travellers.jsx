import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TravImg from "./../../../../../img/icons/travellers.svg";

import { useDispatch, useSelector } from "react-redux";
import { setTravelers } from "../../../../../store/travelersSlice.js";

import "./style.css";

export default function BasicSelect() {
    // Сохраняю ссылку на функцию (хук)
    const dispatch = useDispatch();
    // Получаю текущее состояние
    const travelersFromStore = useSelector(
        (state) => state.travelers.travelers
    );
    console.log("Текущее значение путешественников:", travelersFromStore);

    const [travelers, setTravelersState] = React.useState(travelersFromStore);

    const handleChange = (event) => {
        // Записываю выбранное пользователем значение
        const newValue = event.target.value;
        // Обновляю локальное состояние
        setTravelersState(newValue);
        // Отправляю значение в Redux
        dispatch(setTravelers(newValue));
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
