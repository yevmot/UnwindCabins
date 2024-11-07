import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
});

export default function BasicButtons({
    text,
    icon,
    bgColor,
    textColor,
    hoverColor,
    fontSize,
    fontWeight,
    onClick,
    ...props
}) {
    return (
        <ThemeProvider theme={theme}>
            <Button
                onClick={() => {
                    console.log("clicked");
                    if (onClick) {
                        onClick();
                    }
                }}
                variant="contained"
                sx={{
                    fontFamily: "Poppins, sans-serif",
                    backgroundColor: bgColor,
                    color: textColor,
                    fontSize: "16px",
                    fontWeight: "400",
                    textTransform: "none",
                    transition: "transform 0.3s",
                    "&:hover": {
                        color: hoverColor,
                        transform: "scale(1.01)",
                    },
                }}
            >
                {text}
                {icon && <img src={icon} alt="icon" />}
            </Button>
        </ThemeProvider>
    );
}
