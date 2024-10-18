import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Icon({ width = 20, height = 20 }) {
    return (
        <IconButton aria-label="icon">
            <AccountCircleIcon
                sx={{
                    width: `${width}px`,
                    height: `${height}px`,
                    color: "#3F3F3F",
                }}
            />
        </IconButton>
    );
}
