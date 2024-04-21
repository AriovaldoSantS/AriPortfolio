import { createTheme, responsiveFontSizes } from "@mui/material";


let theme = createTheme({
    palette: {
        primary: {
            main: '#006400',
        },
        secondary: {
            main: '#A9A9A9',
        },
    },
    typography: {
        fontFamily: "Open Sans"
    }
});

theme = responsiveFontSizes(theme)

export default theme