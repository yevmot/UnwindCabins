import Button from "../../../../buttons/Button";
import React, { useState } from "react";
import Modal from "./../../../../modals/FormModal";

const FormBtn = ({ setIsActive }) => {
    const handleClick = () => {
        console.log("Custom logic in FormBtn");
        setIsActive(true);
    };

    return (
        <Button
            onClick={handleClick}
            text="Find available cabins"
            bgColor="var(--dark-green)"
            textColor="white"
            hoverColor="var(--orange)"
        />
    );
};

export default FormBtn;
