import { createTheme, responsiveFontSizes } from "@mui/material";


let theme = createTheme({
    palette: {

        primary: {
            main: '#1e191c',
        },
        secondary: {
            main: '#89a5bc',
        },
    },
    typography: {
        fontFamily: "Open Sans"
    }
});

theme = responsiveFontSizes(theme)

export default theme