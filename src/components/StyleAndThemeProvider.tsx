import React, {FunctionComponent} from 'react';
import {create} from "jss";
import {createMuiTheme, jssPreset, StylesProvider, ThemeProvider} from "@material-ui/core/styles";
import rtl from "jss-rtl";

const jss = create({plugins: [...jssPreset().plugins, rtl()]});
const theme = createMuiTheme({direction: "rtl"});

const StyleAndThemeProvider: FunctionComponent = ({children}) => {
    return (
        <StylesProvider jss={jss}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </StylesProvider>

    );
}

export default StyleAndThemeProvider;